import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import Layout from '@/app/components/Layout';
import QuickStartGuide from '@/app/components/QuickStartGuide';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { FolderKanban, CheckCircle2, Clock, Users } from 'lucide-react';
import { toast } from 'sonner';

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  createdAt: string;
}

interface Task {
  id: string;
  title: string;
  status: string;
  priority: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showQuickStart, setShowQuickStart] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/');
      return;
    }
    loadDashboardData(token);
  }, [navigate]);

  const loadDashboardData = async (token: string) => {
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
        
        // Get all tasks for all projects
        const allTasks = [];
        for (const project of data.projects || []) {
          const tasksResponse = await fetch(
            `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/projects/${project.id}/tasks`,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            }
          );
          if (tasksResponse.ok) {
            const tasksData = await tasksResponse.json();
            allTasks.push(...(tasksData.tasks || []));
          }
        }
        setTasks(allTasks);
      } else {
        console.error('Error loading projects');
        toast.error('Error al cargar proyectos');
        // Load example data on error
        loadExampleData();
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast.error('Error al cargar datos del dashboard');
      // Load example data on error
      loadExampleData();
    } finally {
      setLoading(false);
    }
  };

  const loadExampleData = () => {
    const exampleProjects = [
      {
        id: 'proj-1',
        name: 'Sistema de Gestión Empresarial',
        description: 'ERP completo para gestión de recursos',
        status: 'active',
        createdAt: '2026-01-15T10:00:00Z',
      },
      {
        id: 'proj-2',
        name: 'App Móvil de E-commerce',
        description: 'Aplicación móvil para ventas en línea',
        status: 'active',
        createdAt: '2026-01-20T14:30:00Z',
      },
      {
        id: 'proj-3',
        name: 'Portal de Clientes',
        description: 'Portal web para autoservicio de clientes',
        status: 'completed',
        createdAt: '2025-12-01T09:00:00Z',
      },
    ];

    const exampleTasks = [
      // Proyecto 1 - Sistema de Gestión
      { id: 't1', projectId: 'proj-1', title: 'Diseñar base de datos', status: 'completed', priority: 'high', createdAt: '2026-01-16T10:00:00Z' },
      { id: 't2', projectId: 'proj-1', title: 'Implementar API REST', status: 'in-progress', priority: 'high', createdAt: '2026-01-18T11:00:00Z' },
      { id: 't3', projectId: 'proj-1', title: 'Crear interfaz de usuario', status: 'in-progress', priority: 'medium', createdAt: '2026-01-20T09:00:00Z' },
      { id: 't4', projectId: 'proj-1', title: 'Pruebas de integración', status: 'todo', priority: 'high', createdAt: '2026-01-25T14:00:00Z' },
      
      // Proyecto 2 - App Móvil
      { id: 't5', projectId: 'proj-2', title: 'Configurar React Native', status: 'completed', priority: 'high', createdAt: '2026-01-21T10:00:00Z' },
      { id: 't6', projectId: 'proj-2', title: 'Diseñar pantallas', status: 'in-progress', priority: 'medium', createdAt: '2026-01-23T11:00:00Z' },
      { id: 't7', projectId: 'proj-2', title: 'Integrar pasarela de pago', status: 'todo', priority: 'high', createdAt: '2026-01-28T09:00:00Z' },
      
      // Proyecto 3 - Portal de Clientes
      { id: 't8', projectId: 'proj-3', title: 'Configurar servidor', status: 'done', priority: 'high', createdAt: '2025-12-02T10:00:00Z' },
      { id: 't9', projectId: 'proj-3', title: 'Desarrollar funcionalidades', status: 'done', priority: 'medium', createdAt: '2025-12-10T11:00:00Z' },
      { id: 't10', projectId: 'proj-3', title: 'Deploy a producción', status: 'done', priority: 'high', createdAt: '2025-12-20T14:00:00Z' },
    ];

    const exampleMembers = [
      { id: 'member-1', name: 'Carlos Martínez', email: 'carlos.martinez@ejemplo.com', role: 'Senior Frontend Developer' },
      { id: 'member-2', name: 'María García', email: 'maria.garcia@ejemplo.com', role: 'UI/UX Designer' },
      { id: 'member-3', name: 'Juan Pérez', email: 'juan.perez@ejemplo.com', role: 'Frontend Developer' },
      { id: 'member-4', name: 'Laura Sánchez', email: 'laura.sanchez@ejemplo.com', role: 'QA Tester' },
      { id: 'member-5', name: 'Roberto López', email: 'roberto.lopez@ejemplo.com', role: 'Full Stack Developer' },
    ];

    setProjects(exampleProjects);
    setTasks(exampleTasks);
    setTeamMembers(exampleMembers);
    toast.info('Mostrando datos de ejemplo para demostración');
  };

  const handleQuickStartComplete = () => {
    setShowQuickStart(false);
    const token = localStorage.getItem('access_token');
    if (token) {
      loadDashboardData(token);
    }
  };

  const completedTasks = tasks.filter(t => t.status === 'done').length;
  const pendingTasks = tasks.filter(t => t.status === 'todo').length;

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Resumen de tus proyectos y tareas
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Cargando...</div>
          </div>
        ) : showQuickStart ? (
          <QuickStartGuide onComplete={handleQuickStartComplete} />
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Proyectos Activos
                  </CardTitle>
                  <FolderKanban className="h-4 w-4 text-indigo-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{projects.length}</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Total de proyectos
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Tareas Completadas
                  </CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{completedTasks}</div>
                  <p className="text-xs text-gray-500 mt-1">
                    De {tasks.length} totales
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Tareas Pendientes
                  </CardTitle>
                  <Clock className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pendingTasks}</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Por completar
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Miembros del Equipo
                  </CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{teamMembers.length}</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Colaboradores activos
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Proyectos Recientes</CardTitle>
                <CardDescription>
                  Tus últimos proyectos creados
                </CardDescription>
              </CardHeader>
              <CardContent>
                {projects.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No tienes proyectos aún. ¡Crea uno nuevo!
                  </div>
                ) : (
                  <div className="space-y-4">
                    {projects.slice(0, 5).map((project) => (
                      <div
                        key={project.id}
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {project.description || 'Sin descripción'}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            project.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status === 'active' ? 'Activo' : project.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </Layout>
  );
}