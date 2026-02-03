import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, FolderKanban, Users, ListTodo } from 'lucide-react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface QuickStartGuideProps {
  onComplete: () => void;
}

export default function QuickStartGuide({ onComplete }: QuickStartGuideProps) {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const createDemoProject = async () => {
    setLoading(true);
    const token = localStorage.getItem('access_token');
    if (!token) return;

    try {
      const projectData = {
        name: 'Proyecto de Ejemplo - Sistema Web',
        description: 'Este es un proyecto de demostración para mostrar las capacidades del sistema de gestión',
        status: 'active',
      };

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/projects`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(projectData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success('Proyecto de ejemplo creado');
        
        // Create demo tasks
        const tasks = [
          { title: 'Diseñar la interfaz de usuario', description: 'Crear mockups y wireframes', status: 'done', priority: 'high' },
          { title: 'Implementar autenticación', description: 'Sistema de login y registro', status: 'in-progress', priority: 'high' },
          { title: 'Crear API REST', description: 'Endpoints para CRUD de datos', status: 'in-progress', priority: 'medium' },
          { title: 'Configurar base de datos', description: 'Esquema y migraciones', status: 'done', priority: 'high' },
          { title: 'Implementar dashboard', description: 'Vista principal con estadísticas', status: 'todo', priority: 'medium' },
          { title: 'Pruebas unitarias', description: 'Testing de componentes críticos', status: 'todo', priority: 'low' },
        ];

        for (const task of tasks) {
          await fetch(
            `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/projects/${data.project.id}/tasks`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify(task),
            }
          );
        }

        toast.success('Tareas de ejemplo agregadas');
        setStep(2);
      } else {
        toast.error('Error al crear proyecto de ejemplo');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al crear proyecto de ejemplo');
    } finally {
      setLoading(false);
    }
  };

  const createDemoTeam = async () => {
    setLoading(true);
    const token = localStorage.getItem('access_token');
    if (!token) return;

    try {
      const teamMembers = [
        { name: 'Ana García', email: 'ana.garcia@ejemplo.com', role: 'Project Manager' },
        { name: 'Carlos Rodríguez', email: 'carlos.rodriguez@ejemplo.com', role: 'Developer' },
        { name: 'María López', email: 'maria.lopez@ejemplo.com', role: 'Developer' },
        { name: 'Juan Martínez', email: 'juan.martinez@ejemplo.com', role: 'Designer' },
        { name: 'Laura Sánchez', email: 'laura.sanchez@ejemplo.com', role: 'QA Tester' },
      ];

      for (const member of teamMembers) {
        await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/team-members`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(member),
          }
        );
      }

      toast.success('Equipo de ejemplo creado');
      setStep(3);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al crear equipo de ejemplo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>🚀 Guía de Inicio Rápido</span>
        </CardTitle>
        <CardDescription>
          Configura tu primer proyecto y equipo en minutos
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Step 1: Create Project */}
        <div className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${
          step >= 1 ? 'bg-indigo-50' : 'bg-gray-50'
        }`}>
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            step > 1 ? 'bg-green-500' : 'bg-indigo-600'
          } text-white font-bold`}>
            {step > 1 ? <CheckCircle2 className="h-5 w-5" /> : '1'}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 flex items-center">
              <FolderKanban className="h-5 w-5 mr-2" />
              Crear Proyecto de Ejemplo
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Crea un proyecto con tareas predefinidas para explorar el tablero Kanban
            </p>
            {step === 1 && (
              <Button onClick={createDemoProject} disabled={loading}>
                {loading ? 'Creando...' : 'Crear Proyecto de Ejemplo'}
              </Button>
            )}
            {step > 1 && (
              <p className="text-sm text-green-600 font-medium">✓ Proyecto creado exitosamente</p>
            )}
          </div>
        </div>

        {/* Step 2: Create Team */}
        <div className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${
          step >= 2 ? 'bg-indigo-50' : 'bg-gray-50'
        }`}>
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            step > 2 ? 'bg-green-500' : step === 2 ? 'bg-indigo-600' : 'bg-gray-300'
          } text-white font-bold`}>
            {step > 2 ? <CheckCircle2 className="h-5 w-5" /> : '2'}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Formar Equipo de Trabajo
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Agrega miembros del equipo con diferentes roles
            </p>
            {step === 2 && (
              <Button onClick={createDemoTeam} disabled={loading}>
                {loading ? 'Agregando...' : 'Crear Equipo de Ejemplo'}
              </Button>
            )}
            {step > 2 && (
              <p className="text-sm text-green-600 font-medium">✓ Equipo creado exitosamente</p>
            )}
            {step < 2 && (
              <p className="text-sm text-gray-500">Completa el paso anterior primero</p>
            )}
          </div>
        </div>

        {/* Step 3: Explore */}
        <div className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${
          step >= 3 ? 'bg-green-50' : 'bg-gray-50'
        }`}>
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            step === 3 ? 'bg-green-500' : 'bg-gray-300'
          } text-white font-bold`}>
            {step === 3 ? <CheckCircle2 className="h-5 w-5" /> : '3'}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 flex items-center">
              <ListTodo className="h-5 w-5 mr-2" />
              ¡Listo para Comenzar!
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Explora tu nuevo proyecto y equipo
            </p>
            {step === 3 && (
              <div className="space-x-2">
                <Button onClick={onComplete}>
                  Ir al Dashboard
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/projects'}>
                  Ver Proyectos
                </Button>
              </div>
            )}
            {step < 3 && (
              <p className="text-sm text-gray-500">Completa los pasos anteriores</p>
            )}
          </div>
        </div>

        {/* Skip Button */}
        {step < 3 && (
          <div className="text-center pt-4 border-t">
            <Button variant="ghost" onClick={onComplete} className="text-gray-500">
              Omitir guía y explorar por mi cuenta
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
