import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { projectId as supabaseProjectId, publicAnonKey } from '/utils/supabase/info';
import Layout from '@/app/components/Layout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Badge } from '@/app/components/ui/badge';
import { Plus, ArrowLeft, Trash2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignedTo: string | null;
  createdAt: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
}

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    assignedTo: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/');
      return;
    }
    if (id) {
      loadProjectAndTasks(token, id);
    }
  }, [id, navigate]);

  const loadProjectAndTasks = async (token: string, currentProjectId: string) => {
    try {
      // Load project details
      const projectsRes = await fetch(
        `https://${supabaseProjectId}.supabase.co/functions/v1/make-server-d010d7b6/projects`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (projectsRes.ok) {
        const projectsData = await projectsRes.json();
        const foundProject = projectsData.projects.find((p: Project) => p.id === currentProjectId);
        setProject(foundProject || null);
      }

      // Load tasks
      const tasksRes = await fetch(
        `https://${supabaseProjectId}.supabase.co/functions/v1/make-server-d010d7b6/projects/${currentProjectId}/tasks`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (tasksRes.ok) {
        const tasksData = await tasksRes.json();
        setTasks(tasksData.tasks || []);
      }
    } catch (error) {
      console.error('Error loading project data:', error);
      toast.error('Error al cargar datos del proyecto');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async () => {
    if (!newTask.title) {
      toast.error('El título de la tarea es requerido');
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token || !id) return;

    try {
      const response = await fetch(
        `https://${supabaseProjectId}.supabase.co/functions/v1/make-server-d010d7b6/projects/${id}/tasks`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...newTask,
            assignedTo: newTask.assignedTo || null,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTasks([...tasks, data.task]);
        setDialogOpen(false);
        setNewTask({
          title: '',
          description: '',
          status: 'todo',
          priority: 'medium',
          assignedTo: '',
        });
        toast.success('Tarea creada exitosamente');
      } else {
        toast.error('Error al crear tarea');
      }
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Error al crear tarea');
    }
  };

  const handleUpdateTaskStatus = async (taskId: string, newStatus: string) => {
    const token = localStorage.getItem('access_token');
    if (!token || !id) return;

    try {
      const response = await fetch(
        `https://${supabaseProjectId}.supabase.co/functions/v1/make-server-d010d7b6/projects/${id}/tasks/${taskId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTasks(tasks.map(t => t.id === taskId ? data.task : t));
        toast.success('Estado actualizado');
      } else {
        toast.error('Error al actualizar estado');
      }
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Error al actualizar tarea');
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm('¿Estás seguro de eliminar esta tarea?')) return;

    const token = localStorage.getItem('access_token');
    if (!token || !id) return;

    try {
      const response = await fetch(
        `https://${supabaseProjectId}.supabase.co/functions/v1/make-server-d010d7b6/projects/${id}/tasks/${taskId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setTasks(tasks.filter(t => t.id !== taskId));
        toast.success('Tarea eliminada');
      } else {
        toast.error('Error al eliminar tarea');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Error al eliminar tarea');
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done': return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'in-progress': return <Clock className="h-4 w-4 text-blue-600" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const tasksByStatus = {
    todo: tasks.filter(t => t.status === 'todo'),
    'in-progress': tasks.filter(t => t.status === 'in-progress'),
    done: tasks.filter(t => t.status === 'done'),
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Cargando proyecto...</div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Proyecto no encontrado
          </h2>
          <Button onClick={() => navigate('/projects')}>
            Volver a Proyectos
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/projects')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
              <p className="text-gray-600 mt-1">
                {project.description || 'Sin descripción'}
              </p>
            </div>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nueva Tarea
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Crear Nueva Tarea</DialogTitle>
                <DialogDescription>
                  Completa la información de la tarea
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="Ej: Implementar autenticación"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="Describe la tarea..."
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Prioridad</Label>
                    <Select
                      value={newTask.priority}
                      onValueChange={(value) => setNewTask({ ...newTask, priority: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Baja</SelectItem>
                        <SelectItem value="medium">Media</SelectItem>
                        <SelectItem value="high">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Estado</Label>
                    <Select
                      value={newTask.status}
                      onValueChange={(value) => setNewTask({ ...newTask, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">Por Hacer</SelectItem>
                        <SelectItem value="in-progress">En Progreso</SelectItem>
                        <SelectItem value="done">Completada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleCreateTask}>
                  Crear Tarea
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Task Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Todo Column */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Por Hacer</span>
                  <Badge variant="secondary">{tasksByStatus.todo.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasksByStatus.todo.map((task) => (
                  <Card key={task.id} className="p-4 bg-gray-50">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-sm">{task.title}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteTask(task.id)}
                          className="h-6 w-6 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      {task.description && (
                        <p className="text-xs text-gray-600">{task.description}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUpdateTaskStatus(task.id, 'in-progress')}
                          className="h-7 text-xs"
                        >
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
                {tasksByStatus.todo.length === 0 && (
                  <p className="text-center text-gray-500 text-sm py-8">
                    No hay tareas
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* In Progress Column */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>En Progreso</span>
                  <Badge variant="secondary">{tasksByStatus['in-progress'].length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasksByStatus['in-progress'].map((task) => (
                  <Card key={task.id} className="p-4 bg-blue-50">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-sm">{task.title}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteTask(task.id)}
                          className="h-6 w-6 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      {task.description && (
                        <p className="text-xs text-gray-600">{task.description}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUpdateTaskStatus(task.id, 'done')}
                          className="h-7 text-xs"
                        >
                          Completar
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
                {tasksByStatus['in-progress'].length === 0 && (
                  <p className="text-center text-gray-500 text-sm py-8">
                    No hay tareas
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Done Column */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Completadas</span>
                  <Badge variant="secondary">{tasksByStatus.done.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasksByStatus.done.map((task) => (
                  <Card key={task.id} className="p-4 bg-green-50">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-sm line-through text-gray-600">
                          {task.title}
                        </h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteTask(task.id)}
                          className="h-6 w-6 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      {task.description && (
                        <p className="text-xs text-gray-600">{task.description}</p>
                      )}
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                      </Badge>
                    </div>
                  </Card>
                ))}
                {tasksByStatus.done.length === 0 && (
                  <p className="text-center text-gray-500 text-sm py-8">
                    No hay tareas
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}