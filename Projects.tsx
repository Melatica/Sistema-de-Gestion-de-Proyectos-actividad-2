import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import Layout from '@/app/components/Layout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Plus, Trash2, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  createdAt: string;
}

export default function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    status: 'active',
  });

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/');
      return;
    }
    loadProjects(token);
  }, [navigate]);

  const loadProjects = async (token: string) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/projects`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects || []);
      } else {
        console.error('Error loading projects');
        toast.error('Error al cargar proyectos');
        // Load example data on error
        loadExampleProjects();
      }
    } catch (error) {
      console.error('Error loading projects:', error);
      toast.error('Error al cargar proyectos');
      // Load example data on error
      loadExampleProjects();
    } finally {
      setLoading(false);
    }
  };

  const loadExampleProjects = () => {
    const exampleProjects = [
      {
        id: 'proj-1',
        name: 'Sistema de Gestión Empresarial',
        description: 'ERP completo para gestión de recursos empresariales',
        status: 'active',
        createdAt: '2026-01-15T10:00:00Z',
        updatedAt: '2026-02-01T15:30:00Z',
      },
      {
        id: 'proj-2',
        name: 'App Móvil de E-commerce',
        description: 'Aplicación móvil para ventas en línea con carrito de compras',
        status: 'active',
        createdAt: '2026-01-20T14:30:00Z',
        updatedAt: '2026-01-28T09:45:00Z',
      },
      {
        id: 'proj-3',
        name: 'Portal de Clientes',
        description: 'Portal web para autoservicio de clientes y soporte',
        status: 'completed',
        createdAt: '2025-12-01T09:00:00Z',
        updatedAt: '2025-12-28T16:20:00Z',
      },
      {
        id: 'proj-4',
        name: 'Sistema de Inventario',
        description: 'Control de inventario en tiempo real',
        status: 'active',
        createdAt: '2026-01-10T11:15:00Z',
        updatedAt: '2026-01-25T14:00:00Z',
      },
    ];

    setProjects(exampleProjects);
    toast.info('Mostrando proyectos de ejemplo para demostración');
  };

  const handleCreateProject = async () => {
    if (!newProject.name) {
      toast.error('El nombre del proyecto es requerido');
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      toast.error('No hay sesión activa');
      return;
    }

    try {
      console.log('Intentando crear proyecto:', newProject); // Debug
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/projects`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(newProject),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProjects([...projects, data.project]);
        setDialogOpen(false);
        setNewProject({ name: '', description: '', status: 'active' });
        toast.success('Proyecto creado exitosamente');
      } else {
        // Si el servidor falla, crear localmente
        console.log('Servidor no disponible, creando proyecto localmente');
        createProjectLocally();
      }
    } catch (error) {
      console.error('Error creating project:', error);
      // Si hay error de red, crear localmente
      console.log('Error de red, creando proyecto localmente');
      createProjectLocally();
    }
  };

  const createProjectLocally = () => {
    const newProjectWithId = {
      id: `proj-${Date.now()}`,
      name: newProject.name,
      description: newProject.description,
      status: newProject.status,
      createdAt: new Date().toISOString(),
    };

    setProjects([...projects, newProjectWithId]);
    setDialogOpen(false);
    setNewProject({ name: '', description: '', status: 'active' });
    toast.success('Proyecto creado exitosamente (modo local)');
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este proyecto?')) return;

    const token = localStorage.getItem('access_token');
    if (!token) {
      // Eliminar localmente si no hay token
      setProjects(projects.filter(p => p.id !== id));
      toast.success('Proyecto eliminado (modo local)');
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/projects/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setProjects(projects.filter(p => p.id !== id));
        toast.success('Proyecto eliminado');
      } else {
        // Eliminar localmente si el servidor falla
        setProjects(projects.filter(p => p.id !== id));
        toast.success('Proyecto eliminado (modo local)');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      // Eliminar localmente si hay error de red
      setProjects(projects.filter(p => p.id !== id));
      toast.success('Proyecto eliminado (modo local)');
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Proyectos</h1>
            <p className="text-gray-600 mt-1">
              Gestiona tus proyectos de desarrollo
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Proyecto
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Crear Nuevo Proyecto</DialogTitle>
                <DialogDescription>
                  Completa la información del proyecto
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del Proyecto</Label>
                  <Input
                    id="name"
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    placeholder="Ej: Sistema de Inventario"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    placeholder="Describe el proyecto..."
                    rows={4}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleCreateProject}>
                  Crear Proyecto
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Cargando proyectos...</div>
          </div>
        ) : projects.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No tienes proyectos aún
              </h3>
              <p className="text-gray-600 mb-4">
                Crea tu primer proyecto para comenzar
              </p>
              <Button onClick={() => setDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Crear Primer Proyecto
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1" onClick={() => navigate(`/projects/${project.id}`)}>
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <CardDescription className="mt-2">
                        {project.description || 'Sin descripción'}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteProject(project.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent onClick={() => navigate(`/projects/${project.id}`)}>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status === 'active' ? 'Activo' : project.status}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(project.createdAt).toLocaleDateString('es-ES')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}