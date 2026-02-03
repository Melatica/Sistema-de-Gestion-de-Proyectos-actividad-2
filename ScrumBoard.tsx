import { useState } from 'react';
import Layout from '@/app/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { 
  Users, 
  ListTodo, 
  Calendar, 
  Target, 
  TrendingUp, 
  CheckCircle2,
  Clock,
  Star,
  Award,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

// Equipo Scrum
const scrumTeam = [
  {
    id: 1,
    name: 'Product Owner',
    role: 'Product Owner',
    realName: 'Tu Nombre Aquí',
    avatar: 'PO',
    color: 'bg-purple-500',
    responsibilities: 'Definir y priorizar backlog, aceptar historias'
  },
  {
    id: 2,
    name: 'Ana López',
    role: 'Scrum Master',
    avatar: 'AL',
    color: 'bg-blue-500',
    responsibilities: 'Facilitar ceremonias, eliminar impedimentos'
  },
  {
    id: 3,
    name: 'Carlos Martínez',
    role: 'Senior Frontend Developer',
    avatar: 'CM',
    color: 'bg-green-500',
    experience: '5 años'
  },
  {
    id: 4,
    name: 'María García',
    role: 'UI/UX Designer',
    avatar: 'MG',
    color: 'bg-pink-500',
    experience: '4 años'
  },
  {
    id: 5,
    name: 'Juan Pérez',
    role: 'Frontend Developer',
    avatar: 'JP',
    color: 'bg-orange-500',
    experience: '3 años'
  },
  {
    id: 6,
    name: 'Laura Sánchez',
    role: 'QA Engineer',
    avatar: 'LS',
    color: 'bg-yellow-500',
    experience: '4 años'
  },
  {
    id: 7,
    name: 'Roberto López',
    role: 'Full Stack Developer',
    avatar: 'RL',
    color: 'bg-indigo-500',
    experience: '6 años'
  }
];

// Product Backlog
const productBacklog = [
  {
    id: 'US-01',
    title: 'Gráficos interactivos en dashboard',
    description: 'Como usuario, quiero ver gráficos interactivos en el dashboard para entender mejor el estado de mis proyectos',
    storyPoints: 13,
    priority: 'Must Have',
    epic: 'Dashboard',
    status: 'Done',
    sprint: 1
  },
  {
    id: 'US-02',
    title: 'Filtros avanzados de proyectos',
    description: 'Como usuario, quiero filtrar proyectos por múltiples criterios para encontrar información rápidamente',
    storyPoints: 8,
    priority: 'Must Have',
    epic: 'Dashboard',
    status: 'Done',
    sprint: 1
  },
  {
    id: 'US-03',
    title: 'Animaciones suaves',
    description: 'Como usuario, quiero animaciones fluidas para una mejor experiencia visual',
    storyPoints: 5,
    priority: 'Must Have',
    epic: 'Dashboard',
    status: 'Done',
    sprint: 1
  },
  {
    id: 'US-06',
    title: 'Drag & drop mejorado en Kanban',
    description: 'Como usuario, quiero arrastrar tareas fácilmente para reorganizar el trabajo',
    storyPoints: 8,
    priority: 'Must Have',
    epic: 'Kanban',
    status: 'Done',
    sprint: 1
  },
  {
    id: 'US-11',
    title: 'Navegación sidebar colapsable',
    description: 'Como usuario, quiero colapsar el sidebar para tener más espacio',
    storyPoints: 5,
    priority: 'Should Have',
    epic: 'Navegación',
    status: 'Done',
    sprint: 1
  },
  {
    id: 'US-04',
    title: 'Vista de calendario',
    description: 'Como usuario, quiero ver mis tareas en formato calendario',
    storyPoints: 13,
    priority: 'Must Have',
    epic: 'Dashboard',
    status: 'In Progress',
    sprint: 2
  },
  {
    id: 'US-05',
    title: 'Exportar datos a PDF/Excel',
    description: 'Como usuario, quiero exportar reportes para compartir con stakeholders',
    storyPoints: 8,
    priority: 'Must Have',
    epic: 'Dashboard',
    status: 'In Progress',
    sprint: 2
  },
  {
    id: 'US-07',
    title: 'Swimlanes por asignado',
    description: 'Como usuario, quiero ver tareas agrupadas por persona asignada',
    storyPoints: 8,
    priority: 'Should Have',
    epic: 'Kanban',
    status: 'To Do',
    sprint: 2
  },
  {
    id: 'US-15',
    title: 'Sistema de notificaciones push',
    description: 'Como usuario, quiero recibir notificaciones en tiempo real',
    storyPoints: 13,
    priority: 'Must Have',
    epic: 'Notificaciones',
    status: 'To Do',
    sprint: 3
  }
];

// Sprints
const sprints = [
  {
    number: 1,
    name: 'Sprint 1 - Fundamentos UI/UX',
    startDate: '2026-02-03',
    endDate: '2026-02-16',
    storyPoints: 39,
    completed: 39,
    status: 'Completed',
    goal: 'Implementar mejoras fundamentales de UI/UX en dashboard y navegación'
  },
  {
    number: 2,
    name: 'Sprint 2 - Funcionalidades Avanzadas',
    startDate: '2026-02-17',
    endDate: '2026-03-01',
    storyPoints: 55,
    completed: 29,
    status: 'In Progress',
    goal: 'Agregar vista calendario, exportación y swimlanes'
  },
  {
    number: 3,
    name: 'Sprint 3 - Notificaciones y Pulido',
    startDate: '2026-03-03',
    endDate: '2026-03-15',
    storyPoints: 55,
    completed: 0,
    status: 'Planned',
    goal: 'Implementar notificaciones y optimizar rendimiento'
  }
];

// Daily Standups
const dailyStandups = [
  {
    date: '2026-02-03',
    time: '9:30 AM',
    attendees: 7,
    duration: '15 min',
    highlights: 'Sprint 1 iniciado - Setup de ambiente'
  },
  {
    date: '2026-02-04',
    time: '9:30 AM',
    attendees: 7,
    duration: '15 min',
    highlights: 'Gráficos: 40% completado'
  },
  {
    date: '2026-02-05',
    time: '9:30 AM',
    attendees: 7,
    duration: '15 min',
    highlights: 'María necesita ayuda con animaciones'
  },
  {
    date: '2026-02-06',
    time: '9:30 AM',
    attendees: 7,
    duration: '15 min',
    highlights: 'Pair programming María-Carlos exitoso'
  },
  {
    date: '2026-02-17',
    time: '9:30 AM',
    attendees: 7,
    duration: '15 min',
    highlights: 'Sprint 2 iniciado - Vista calendario comenzado'
  },
  {
    date: '2026-02-18',
    time: '9:30 AM',
    attendees: 7,
    duration: '15 min',
    highlights: 'Calendario: integración con datos reales'
  }
];

// Ceremonias
const ceremonies = [
  {
    type: 'Sprint Planning',
    date: '2026-02-03',
    duration: '2 horas',
    outcome: '39 story points comprometidos',
    icon: Target
  },
  {
    type: 'Daily Standup',
    date: 'Diario 9:30 AM',
    duration: '15 min',
    outcome: '10 reuniones completadas',
    icon: MessageSquare
  },
  {
    type: 'Sprint Review',
    date: '2026-02-16',
    duration: '2 horas',
    outcome: '5 historias ACEPTADAS por PO',
    icon: CheckCircle2
  },
  {
    type: 'Sprint Retrospective',
    date: '2026-02-16',
    duration: '1.5 horas',
    outcome: 'Temperatura del equipo: 9.2/10',
    icon: Star
  }
];

export default function ScrumBoard() {
  const [selectedSprint, setSelectedSprint] = useState(2);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Must Have': return 'bg-red-100 text-red-800 border-red-300';
      case 'Should Have': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Could Have': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Done': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'To Do': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Metodología Scrum</h1>
              <p className="text-purple-100 text-lg">
                Mejora continua del proyecto TechProjects - Sprint 2 en progreso
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">Sprint 2</div>
              <div className="text-purple-100">17 Feb - 1 Mar 2026</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="team" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Equipo Scrum
            </TabsTrigger>
            <TabsTrigger value="backlog" className="flex items-center gap-2">
              <ListTodo className="h-4 w-4" />
              Product Backlog
            </TabsTrigger>
            <TabsTrigger value="sprints" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Sprints
            </TabsTrigger>
            <TabsTrigger value="daily" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Daily Standups
            </TabsTrigger>
            <TabsTrigger value="ceremonies" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Ceremonias
            </TabsTrigger>
          </TabsList>

          {/* Equipo Scrum */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Equipo Scrum (7 miembros)
                </CardTitle>
                <CardDescription>
                  Capacidad: 280 horas por sprint (2 semanas)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {scrumTeam.map((member) => (
                    <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className={`h-2 ${member.color}`} />
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className={`${member.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold`}>
                            {member.avatar}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{member.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                            {member.experience && (
                              <Badge variant="outline" className="text-xs">
                                {member.experience} experiencia
                              </Badge>
                            )}
                            {member.responsibilities && (
                              <p className="text-xs text-gray-500 mt-2">
                                {member.responsibilities}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 text-purple-900 font-semibold mb-2">
                    <Star className="h-5 w-5" />
                    Nota Importante
                  </div>
                  <p className="text-purple-700 text-sm">
                    <strong>Tú eres el Product Owner</strong> de este proyecto. Tus responsabilidades incluyen:
                    definir y priorizar el Product Backlog, aceptar o rechazar historias de usuario completadas,
                    y maximizar el valor del producto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Product Backlog */}
          <TabsContent value="backlog" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListTodo className="h-5 w-5" />
                  Product Backlog (17 Historias de Usuario)
                </CardTitle>
                <CardDescription>
                  Historias priorizadas usando metodología MoSCoW
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productBacklog.map((story) => (
                    <Card key={story.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline" className="font-mono">
                                {story.id}
                              </Badge>
                              <Badge className={getPriorityColor(story.priority)}>
                                {story.priority}
                              </Badge>
                              <Badge className={getStatusColor(story.status)}>
                                {story.status}
                              </Badge>
                              {story.sprint && (
                                <Badge variant="outline" className="bg-blue-50">
                                  Sprint {story.sprint}
                                </Badge>
                              )}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{story.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <TrendingUp className="h-4 w-4 text-gray-500" />
                                <span className="font-semibold">{story.storyPoints}</span> puntos
                              </div>
                              <div className="text-gray-500">
                                Épica: <span className="font-medium">{story.epic}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-red-50">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-700">10</div>
                        <div className="text-sm text-red-600">Must Have</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-yellow-50">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-700">7</div>
                        <div className="text-sm text-yellow-600">Should Have</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-700">149</div>
                        <div className="text-sm text-blue-600">Total Story Points</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sprints */}
          <TabsContent value="sprints" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sprints.map((sprint) => (
                <Card 
                  key={sprint.number}
                  className={`cursor-pointer transition-all ${
                    sprint.status === 'In Progress' 
                      ? 'ring-2 ring-blue-500 shadow-lg' 
                      : ''
                  }`}
                  onClick={() => setSelectedSprint(sprint.number)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        className={
                          sprint.status === 'Completed' 
                            ? 'bg-green-500' 
                            : sprint.status === 'In Progress'
                            ? 'bg-blue-500'
                            : 'bg-gray-500'
                        }
                      >
                        {sprint.status}
                      </Badge>
                      <span className="text-2xl font-bold text-gray-400">
                        #{sprint.number}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{sprint.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(sprint.startDate).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'short' 
                      })} - {new Date(sprint.endDate).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'short',
                        year: 'numeric'
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Sprint Goal</div>
                        <p className="text-sm font-medium">{sprint.goal}</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Progreso</span>
                          <span className="font-semibold">
                            {sprint.completed}/{sprint.storyPoints} pts
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              sprint.status === 'Completed' 
                                ? 'bg-green-500' 
                                : 'bg-blue-500'
                            }`}
                            style={{ 
                              width: `${(sprint.completed / sprint.storyPoints) * 100}%` 
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-center pt-2">
                        <div className="text-2xl font-bold text-gray-900">
                          {Math.round((sprint.completed / sprint.storyPoints) * 100)}%
                        </div>
                        <div className="text-xs text-gray-500">Completado</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sprint Planning - Sprint {selectedSprint}</CardTitle>
                <CardDescription>
                  Historias comprometidas y fechas de desarrollo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productBacklog
                    .filter(story => story.sprint === selectedSprint)
                    .map((story) => (
                      <div 
                        key={story.id}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <Badge variant="outline" className="font-mono">
                          {story.id}
                        </Badge>
                        <div className="flex-1">
                          <div className="font-semibold">{story.title}</div>
                          <div className="text-sm text-gray-600">{story.description}</div>
                        </div>
                        <Badge className={getStatusColor(story.status)}>
                          {story.status}
                        </Badge>
                        <div className="text-right">
                          <div className="font-bold text-lg">{story.storyPoints}</div>
                          <div className="text-xs text-gray-500">pts</div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-blue-900 font-semibold mb-2">
                    <Clock className="h-5 w-5" />
                    Fechas Importantes - Sprint {selectedSprint}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-blue-700 font-medium">Sprint Planning:</span>
                      <span className="ml-2">
                        {sprints[selectedSprint - 1]?.startDate} 9:00 AM (2 horas)
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-700 font-medium">Daily Standups:</span>
                      <span className="ml-2">Diario 9:30 AM (15 min)</span>
                    </div>
                    <div>
                      <span className="text-blue-700 font-medium">Sprint Review:</span>
                      <span className="ml-2">
                        {sprints[selectedSprint - 1]?.endDate} 2:00 PM (2 horas)
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-700 font-medium">Retrospective:</span>
                      <span className="ml-2">
                        {sprints[selectedSprint - 1]?.endDate} 4:30 PM (1.5 horas)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Daily Standups */}
          <TabsContent value="daily" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Daily Standups (Reuniones Diarias)
                </CardTitle>
                <CardDescription>
                  Actualizaciones diarias de 15 minutos a las 9:30 AM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dailyStandups.map((standup, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex flex-col items-center justify-center">
                          <div className="text-xs font-medium">
                            {new Date(standup.date).toLocaleDateString('es-ES', { 
                              month: 'short' 
                            }).toUpperCase()}
                          </div>
                          <div className="text-2xl font-bold">
                            {new Date(standup.date).getDate()}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-semibold">
                            {new Date(standup.date).toLocaleDateString('es-ES', { 
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <Badge variant="outline">{standup.time}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{standup.highlights}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          {standup.attendees} asistentes
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <Clock className="h-4 w-4" />
                          {standup.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-900 font-semibold mb-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Formato de Daily Standup
                  </div>
                  <div className="text-sm text-green-700 space-y-1">
                    <p>• <strong>¿Qué hice ayer?</strong> - Trabajo completado</p>
                    <p>• <strong>¿Qué haré hoy?</strong> - Trabajo planificado</p>
                    <p>• <strong>¿Tengo impedimentos?</strong> - Bloqueos o ayuda necesaria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ceremonias */}
          <TabsContent value="ceremonies" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ceremonies.map((ceremony, index) => {
                const Icon = ceremony.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{ceremony.type}</CardTitle>
                          <CardDescription>{ceremony.date}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Duración:</span>
                          <span className="font-semibold">{ceremony.duration}</span>
                        </div>
                        <div className="pt-2 border-t">
                          <div className="text-sm text-gray-600 mb-1">Resultado:</div>
                          <p className="font-medium">{ceremony.outcome}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Métricas del Proyecto</CardTitle>
                <CardDescription>
                  Indicadores de desempeño del equipo Scrum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-700">149</div>
                        <div className="text-sm text-blue-600">Total Story Points</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-50 to-green-100">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-700">49.7</div>
                        <div className="text-sm text-green-600">Velocidad Promedio</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-700">100%</div>
                        <div className="text-sm text-purple-600">Must Have Completados</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-700">9.2/10</div>
                        <div className="text-sm text-yellow-600">Satisfacción del Equipo</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  ¿Listo para el siguiente sprint?
                </h3>
                <p className="text-purple-100">
                  Sprint 3 comienza el 3 de marzo de 2026
                </p>
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2"
              >
                Ver Sprint 3
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
