# 📋 Sistema de Gestión de Proyectos - Full Stack

## 🎯 Descripción del Proyecto

Aplicación web full stack para gestión de proyectos de equipos de desarrollo de software. Incluye autenticación de usuarios, creación y gestión de proyectos, sistema Kanban de tareas, y administración de equipos.

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** con TypeScript
- **Tailwind CSS v4** para estilos
- **React Router v7** para navegación (SPA)
- **Radix UI** para componentes base
- **Lucide React** para iconos
- **Sonner** para notificaciones toast

### Backend
- **Supabase** como Backend as a Service
- **Deno** runtime para funciones serverless
- **Hono** framework para API REST
- **PostgreSQL** (proporcionado por Supabase)

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/              # Componentes UI reutilizables
│   │   │   ├── Layout.tsx       # Layout principal con sidebar
│   │   │   └── QuickStartGuide.tsx  # Guía de inicio rápido
│   │   ├── pages/
│   │   │   ├── Login.tsx        # Página de inicio de sesión
│   │   │   ├── Signup.tsx       # Página de registro
│   │   │   ├── Dashboard.tsx    # Dashboard con estadísticas
│   │   │   ├── Projects.tsx     # Lista de proyectos
│   │   │   ├── ProjectDetails.tsx  # Detalles y tablero Kanban
│   │   │   └── Team.tsx         # Gestión de equipo
│   │   ├── routes.tsx           # Configuración de rutas
│   │   └── App.tsx              # Componente raíz
│   ├── lib/
│   │   └── supabase.ts          # Cliente Supabase centralizado
│   └── styles/
│       ├── theme.css            # Variables CSS y tema
│       └── fonts.css            # Importación de fuentes
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx        # Servidor API REST
│           └── kv_store.tsx     # Almacenamiento key-value
├── utils/
│   └── supabase/
│       └── info.ts              # Configuración de Supabase
└── README_PROYECTO.md           # Este archivo
```

## API Endpoints

### Autenticación
- `POST /make-server-d010d7b6/signup` - Crear nueva cuenta

### Proyectos
- `GET /make-server-d010d7b6/projects` - Obtener todos los proyectos
- `POST /make-server-d010d7b6/projects` - Crear proyecto
- `PUT /make-server-d010d7b6/projects/:id` - Actualizar proyecto
- `DELETE /make-server-d010d7b6/projects/:id` - Eliminar proyecto

### Tareas
- `GET /make-server-d010d7b6/projects/:projectId/tasks` - Obtener tareas
- `POST /make-server-d010d7b6/projects/:projectId/tasks` - Crear tarea
- `PUT /make-server-d010d7b6/projects/:projectId/tasks/:taskId` - Actualizar tarea
- `DELETE /make-server-d010d7b6/projects/:projectId/tasks/:taskId` - Eliminar tarea

### Equipo
- `GET /make-server-d010d7b6/team-members` - Obtener miembros
- `POST /make-server-d010d7b6/team-members` - Agregar miembro
- `DELETE /make-server-d010d7b6/team-members/:id` - Eliminar miembro

## Instrucciones de Uso

### 1. Registro e Inicio de Sesión
1. Al abrir la aplicación, verás la página de inicio de sesión
2. Si no tienes cuenta, haz clic en "Regístrate aquí"
3. Completa el formulario con tu nombre, email y contraseña
4. Inicia sesión con tus credenciales

### 2. Guía de Inicio Rápido (Recomendado para nuevos usuarios)
1. Al iniciar sesión por primera vez, verás la **Guía de Inicio Rápido**
2. Esta guía te ayudará a:
   - **Paso 1**: Crear un proyecto de ejemplo con 6 tareas predefinidas
   - **Paso 2**: Formar un equipo de ejemplo con 5 miembros
   - **Paso 3**: Explorar el dashboard con datos de demostración
3. Puedes completar cada paso secuencialmente haciendo clic en los botones
4. Si prefieres configurar todo manualmente, puedes omitir la guía

### 3. Crear un Proyecto Manualmente
1. Navega a la sección "Proyectos" en el menú lateral
2. Haz clic en "Nuevo Proyecto"
3. Ingresa el nombre y descripción del proyecto
4. Haz clic en "Crear Proyecto"

### 4. Gestionar Tareas
1. Haz clic en un proyecto para ver sus detalles
2. Haz clic en "Nueva Tarea" para crear una tarea
3. Completa el título, descripción, prioridad y estado
4. Las tareas aparecerán en el tablero Kanban
5. Usa los botones "Iniciar" y "Completar" para mover tareas
6. Arrastra y suelta no está implementado, usa los botones

### 5. Agregar Miembros al Equipo
1. Navega a la sección "Equipo"
2. Haz clic en "Agregar Miembro"
3. Ingresa nombre, email y rol del miembro
4. El miembro aparecerá en la lista del equipo

### 6. Ver Estadísticas
- El Dashboard muestra un resumen general
- Estadísticas incluyen:
  - Total de proyectos activos
  - Tareas completadas vs pendientes
  - Número de miembros del equipo
  - Proyectos recientes

## Características Técnicas

### Frontend
- **Componentes Reutilizables**: Uso extensivo de componentes UI de Radix
- **Routing**: React Router con rutas protegidas
- **Estado**: Gestión de estado local con React hooks
- **Validación**: Validación de formularios en el cliente
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla
- **Notificaciones**: Sistema de toast con Sonner

### Backend
- **Autenticación JWT**: Tokens seguros con Supabase Auth
- **API RESTful**: Endpoints bien estructurados siguiendo principios REST
- **Base de Datos**: Key-Value store de Supabase para prototipado rápido
- **CORS**: Configurado para permitir requests del frontend
- **Logging**: Registro de errores y requests
- **Validación**: Validación de datos en el servidor

## Seguridad

- Autenticación requerida para todas las rutas protegidas
- Tokens JWT almacenados en localStorage
- Verificación de usuario en cada request al servidor
- CORS configurado apropiadamente
- Validación de datos en frontend y backend

## Futuras Mejoras

- Drag and drop para tareas
- Filtros y búsqueda avanzada
- Notificaciones en tiempo real
- Asignación de tareas a miembros específicos
- Fechas de vencimiento para tareas
- Comentarios en tareas
- Archivos adjuntos
- Gráficas y reportes
- Roles y permisos más granulares
- Integración con servicios externos (GitHub, Slack, etc.)

## Créditos

Desarrollado con React, Supabase y Tailwind CSS como parte de un proyecto académico de gestión de proyectos de software.