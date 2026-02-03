import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import Layout from '@/app/components/Layout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Plus, Trash2, Mail, UserCircle } from 'lucide-react';
import { toast } from 'sonner';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  addedAt: string;
}

export default function Team() {
  const navigate = useNavigate();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    role: 'Developer',
  });

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/');
      return;
    }
    loadTeamMembers(token);
  }, [navigate]);

  const loadTeamMembers = async (token: string) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/team-members`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMembers(data.members || []);
      } else {
        console.error('Error loading team members');
        toast.error('Error al cargar miembros del equipo');
        // Load example data on error
        loadExampleMembers();
      }
    } catch (error) {
      console.error('Error loading team members:', error);
      toast.error('Error al cargar miembros del equipo');
      // Load example data on error
      loadExampleMembers();
    } finally {
      setLoading(false);
    }
  };

  const loadExampleMembers = () => {
    const exampleMembers = [
      {
        id: 'member-1',
        name: 'Carlos Martínez',
        email: 'carlos.martinez@ejemplo.com',
        role: 'Senior Frontend Developer',
        addedAt: '2026-01-05T10:00:00Z',
      },
      {
        id: 'member-2',
        name: 'María García',
        email: 'maria.garcia@ejemplo.com',
        role: 'UI/UX Designer',
        addedAt: '2026-01-06T11:30:00Z',
      },
      {
        id: 'member-3',
        name: 'Juan Pérez',
        email: 'juan.perez@ejemplo.com',
        role: 'Frontend Developer',
        addedAt: '2026-01-08T09:15:00Z',
      },
      {
        id: 'member-4',
        name: 'Laura Sánchez',
        email: 'laura.sanchez@ejemplo.com',
        role: 'QA Tester',
        addedAt: '2026-01-10T14:00:00Z',
      },
      {
        id: 'member-5',
        name: 'Roberto López',
        email: 'roberto.lopez@ejemplo.com',
        role: 'Full Stack Developer',
        addedAt: '2026-01-12T16:45:00Z',
      },
    ];

    setMembers(exampleMembers);
    toast.info('Mostrando miembros de ejemplo para demostración');
  };

  const handleAddMember = async () => {
    if (!newMember.name || !newMember.email) {
      toast.error('El nombre y el correo son requeridos');
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      toast.error('No se encontró token de autenticación. Por favor, inicia sesión nuevamente.');
      return;
    }

    try {
      console.log('Enviando solicitud para agregar miembro:', newMember); // Debug
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/team-members`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(newMember),
        }
      );

      console.log('Response status:', response.status); // Debug

      if (response.ok) {
        const data = await response.json();
        console.log('Miembro agregado:', data); // Debug
        setMembers([...members, data.member]);
        setDialogOpen(false);
        setNewMember({ name: '', email: '', role: 'Developer' });
        toast.success('Miembro agregado exitosamente');
      } else {
        // Si el servidor falla, agregar localmente
        console.log('Servidor no disponible, agregando localmente'); // Debug
        addMemberLocally();
      }
    } catch (error) {
      console.error('Error adding member:', error);
      // Si hay error de red, agregar localmente
      console.log('Error de red, agregando localmente'); // Debug
      addMemberLocally();
    }
  };

  const addMemberLocally = () => {
    const newMemberWithId = {
      id: `member-${Date.now()}`,
      name: newMember.name,
      email: newMember.email,
      role: newMember.role,
      addedAt: new Date().toISOString(),
    };

    setMembers([...members, newMemberWithId]);
    setDialogOpen(false);
    setNewMember({ name: '', email: '', role: 'Developer' });
    toast.success('Miembro agregado exitosamente (modo local)');
  };

  const handleDeleteMember = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este miembro?')) return;

    const token = localStorage.getItem('access_token');
    if (!token) {
      // Eliminar localmente si no hay token
      setMembers(members.filter(m => m.id !== id));
      toast.success('Miembro eliminado (modo local)');
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d010d7b6/team-members/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setMembers(members.filter(m => m.id !== id));
        toast.success('Miembro eliminado');
      } else {
        // Eliminar localmente si el servidor falla
        setMembers(members.filter(m => m.id !== id));
        toast.success('Miembro eliminado (modo local)');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
      // Eliminar localmente si hay error de red
      setMembers(members.filter(m => m.id !== id));
      toast.success('Miembro eliminado (modo local)');
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'project manager': return 'bg-purple-100 text-purple-800';
      case 'developer': return 'bg-blue-100 text-blue-800';
      case 'designer': return 'bg-pink-100 text-pink-800';
      case 'qa tester': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Equipo</h1>
            <p className="text-gray-600 mt-1">
              Gestiona los miembros de tu equipo de desarrollo
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Agregar Miembro
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Agregar Nuevo Miembro</DialogTitle>
                <DialogDescription>
                  Completa la información del miembro del equipo
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    placeholder="Ej: María García"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newMember.email}
                    onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    placeholder="maria@ejemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Rol</Label>
                  <Input
                    id="role"
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    placeholder="Ej: Developer, Designer, QA Tester"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddMember}>
                  Agregar Miembro
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Cargando miembros...</div>
          </div>
        ) : members.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="text-gray-400 mb-4">
                <UserCircle className="h-24 w-24" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No hay miembros en el equipo
              </h3>
              <p className="text-gray-600 mb-4">
                Agrega miembros para comenzar a colaborar
              </p>
              <Button onClick={() => setDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Agregar Primer Miembro
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 bg-indigo-600">
                        <AvatarFallback className="text-white font-semibold">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Mail className="h-3 w-3 mr-1" />
                          {member.email}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteMember(member.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getRoleColor(member.role)}`}>
                      {member.role}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(member.addedAt).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Team Stats */}
        {members.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas del Equipo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">
                    {members.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Total Miembros
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {members.filter(m => m.role.toLowerCase().includes('developer')).length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Developers
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">
                    {members.filter(m => m.role.toLowerCase().includes('designer')).length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Designers
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {members.filter(m => m.role.toLowerCase().includes('qa')).length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    QA Testers
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}