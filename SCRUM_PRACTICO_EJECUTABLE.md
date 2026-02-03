# Implementación Práctica de Scrum - Proyecto TechProjects

## EQUIPO SCRUM DEFINIDO

### Product Owner
**Nombre:** [Tu Nombre Completo]  
**Email:** tu.email@ejemplo.com  
**Responsabilidades:**
- Definir y priorizar el Product Backlog
- Aceptar o rechazar historias completadas
- Comunicarse con stakeholders
- Disponibilidad: Daily Standups + Sprint Reviews

---

### Scrum Master
**Nombre:** Ana López Martínez  
**Email:** ana.lopez@techprojects.com  
**Responsabilidades:**
- Facilitar todas las ceremonias Scrum
- Eliminar impedimentos del equipo
- Proteger al equipo de distracciones
- Disponibilidad: 100% para el equipo

---

### Development Team (5 miembros)

#### 1. Carlos Martínez - Senior Frontend Developer
- **Email:** carlos.martinez@techprojects.com
- **Especialidad:** React, TypeScript, State Management
- **Experiencia:** 5 años
- **Capacidad:** 60 horas/sprint (8h/día × 5 días × 2 semanas × 75%)
- **Fortalezas:** Arquitectura de componentes, optimización de rendimiento
- **Área de mejora:** Testing automatizado

#### 2. María García - UI/UX Designer & Frontend Dev
- **Email:** maria.garcia@techprojects.com
- **Especialidad:** Figma, CSS/Tailwind, Diseño de interfaces
- **Experiencia:** 4 años
- **Capacidad:** 60 horas/sprint
- **Fortalezas:** Diseño responsive, accesibilidad, user research
- **Área de mejora:** Animaciones complejas

#### 3. Juan Pérez - Frontend Developer
- **Email:** juan.perez@techprojects.com
- **Especialidad:** CSS avanzado, Tailwind, Animaciones
- **Experiencia:** 3 años
- **Capacidad:** 60 horas/sprint
- **Fortalezas:** Maquetación pixel-perfect, CSS Grid/Flexbox
- **Área de mejora:** TypeScript avanzado

#### 4. Laura Sánchez - QA Engineer
- **Email:** laura.sanchez@techprojects.com
- **Especialidad:** Testing manual y automatizado, Accesibilidad
- **Experiencia:** 4 años
- **Capacidad:** 60 horas/sprint
- **Fortalezas:** Pruebas de regresión, documentación de bugs, WCAG
- **Área de mejora:** Performance testing

#### 5. Roberto López - Full Stack Developer
- **Email:** roberto.lopez@techprojects.com
- **Especialidad:** React, Node.js, PostgreSQL, API REST
- **Experiencia:** 6 años
- **Capacidad:** 40 horas/sprint (trabaja 50% en otro proyecto)
- **Fortalezas:** Backend, integración de APIs, arquitectura
- **Área de mejora:** Frontend avanzado

**Capacidad total del equipo:** 280 horas por sprint de 2 semanas

---

## PRODUCT BACKLOG COMPLETO CON ESTIMACIONES

### Escala de Estimación: Fibonacci (1, 2, 3, 5, 8, 13, 21)

| ID | Historia de Usuario | Prioridad | Story Points | Épica | Criterios de Aceptación |
|----|---------------------|-----------|--------------|-------|-------------------------|
| **US-01** | Como usuario, quiero ver gráficos interactivos en el dashboard para entender mejor el estado de mis proyectos | Must Have | 13 | Dashboard | - Gráfico de proyectos por estado<br>- Gráfico de tareas por prioridad<br>- Tooltips interactivos<br>- Responsive en mobile<br>- Rendimiento <1s carga |
| **US-02** | Como usuario, quiero filtrar proyectos por estado, prioridad y fecha para encontrarlos rápidamente | Must Have | 8 | Dashboard | - Filtro por estado (dropdown)<br>- Filtro por prioridad<br>- Filtro por rango de fechas<br>- Búsqueda por texto<br>- Botón "Limpiar filtros" |
| **US-03** | Como usuario, quiero ver tarjetas de estadísticas más visuales con animaciones para una mejor experiencia | Should Have | 5 | Dashboard | - Animación de entrada (fade in)<br>- Iconos coloridos<br>- Números animados (count up)<br>- Diseño moderno<br>- Responsive |
| **US-06** | Como usuario, quiero arrastrar tareas entre columnas con animaciones fluidas para mejor feedback visual | Must Have | 8 | Kanban | - Drag & drop funcional<br>- Animación suave al arrastrar<br>- Feedback visual (sombra, opacidad)<br>- Actualización en BD<br>- Sin errores en consola |
| **US-11** | Como usuario, quiero una navegación lateral colapsable para aprovechar mejor el espacio de pantalla | Must Have | 5 | Navegación | - Sidebar colapsable<br>- Botón toggle<br>- Animación suave<br>- Preferencia guardada en localStorage<br>- Responsive |
| **US-07** | Como usuario, quiero establecer fechas límite en las tareas y ver alertas visuales cuando se acerquen | Must Have | 13 | Kanban | - Campo de fecha límite<br>- Badge rojo si está vencida<br>- Badge amarillo si falta <3 días<br>- Ordenamiento por fecha<br>- Notificación visual |
| **US-08** | Como usuario, quiero filtrar tareas por asignado, prioridad y estado en el Kanban | Should Have | 5 | Kanban | - Filtro por usuario asignado<br>- Filtro por prioridad<br>- Filtro por tags<br>- Filtros combinables<br>- URL params |
| **US-09** | Como usuario, quiero agregar comentarios y adjuntos a las tareas para mejor colaboración | Should Have | 13 | Kanban | - Sistema de comentarios<br>- Upload de archivos<br>- Preview de imágenes<br>- Timestamp y autor<br>- Notificación a asignados |
| **US-12** | Como usuario móvil, quiero que la aplicación sea completamente funcional en mi smartphone | Must Have | 13 | Responsive | - Layout responsive<br>- Menú hamburguesa<br>- Touch gestures<br>- Probado en iOS y Android<br>- Sin scroll horizontal |
| **US-13** | Como usuario, quiero breadcrumbs de navegación para saber dónde estoy en la aplicación | Should Have | 3 | Navegación | - Breadcrumbs en todas las páginas<br>- Links clicables<br>- Separadores visuales<br>- Responsive |
| **US-04** | Como usuario, quiero exportar el dashboard a PDF para compartir con stakeholders | Could Have | 8 | Dashboard | - Botón "Exportar PDF"<br>- PDF con gráficos<br>- Logo de empresa<br>- Fecha de generación<br>- Diseño profesional |
| **US-14** | Como usuario, quiero modo oscuro para trabajar cómodamente de noche | Should Have | 8 | Navegación | - Toggle dark/light mode<br>- Colores consistentes<br>- Preferencia guardada<br>- Sin flash al cargar<br>- Accesible |
| **US-15** | Como usuario, quiero recibir notificaciones cuando me asignen una tarea | Must Have | 13 | Notificaciones | - Notificación toast<br>- Centro de notificaciones<br>- Badge con contador<br>- Marcar como leída<br>- Real-time con Supabase |
| **US-16** | Como usuario, quiero ver notificaciones de cambios en proyectos que sigo | Should Have | 8 | Notificaciones | - Seguir/dejar de seguir proyecto<br>- Notificaciones de cambios<br>- Filtrar por tipo<br>- Configuración granular<br>- Email opcional |
| **US-05** | Como usuario, quiero personalizar qué gráficos se muestran en mi dashboard | Should Have | 13 | Dashboard | - Drag & drop de widgets<br>- Mostrar/ocultar gráficos<br>- Guardar layout personal<br>- Restablecer a default<br>- Responsive |
| **US-10** | Como usuario, quiero ver el historial de cambios de una tarea para auditoría | Could Have | 8 | Kanban | - Log de cambios<br>- Usuario que hizo cambio<br>- Timestamp<br>- Valores anteriores/nuevos<br>- Filtrable |
| **US-17** | Como usuario, quiero configurar qué notificaciones quiero recibir | Could Have | 5 | Notificaciones | - Página de preferencias<br>- Toggle por tipo<br>- Guardar preferencias<br>- Email/Push separados<br>- Horario "No molestar" |

**Total Product Backlog:** 147 Story Points

---

## SPRINT 1: MEJORAS FUNDAMENTALES DE UI/UX

### Información del Sprint

**Nombre:** Sprint 1 - Fundamentos de Mejora UI/UX  
**Objetivo:** Implementar mejoras fundamentales en el dashboard y el tablero Kanban, sentando las bases para una mejor experiencia de usuario.  
**Duración:** 2 semanas (10 días hábiles)  
**Fechas:** 3 de febrero - 16 de febrero de 2026  
**Capacidad del equipo:** 280 horas  
**Story Points comprometidos:** 39 puntos

---

### Sprint Backlog

| ID | Historia | SP | Responsables | Tareas | Horas Est. |
|----|----------|----|--------------|---------|-----------| 
| **US-01** | Gráficos interactivos | 13 | Carlos, María | 6 tareas | 52h |
| **US-02** | Filtros de proyectos | 8 | Juan, Laura | 5 tareas | 32h |
| **US-03** | Tarjetas animadas | 5 | María, Juan | 4 tareas | 20h |
| **US-06** | Drag & drop mejorado | 8 | Carlos, Roberto | 4 tareas | 32h |
| **US-11** | Sidebar colapsable | 5 | Juan | 4 tareas | 20h |

**Total:** 39 Story Points = 156 horas estimadas (56% de capacidad)

---

### Sprint Planning - 3 de febrero de 2026, 9:00 AM

**Duración:** 2 horas  
**Asistentes:** Todo el equipo (7 personas)  
**Facilitador:** Ana López (Scrum Master)

#### Agenda:

**9:00 - 9:15** - Revisión del objetivo del sprint
- Product Owner presenta la visión del sprint
- Equipo hace preguntas de clarificación

**9:15 - 10:00** - Selección de historias
- Equipo revisa Product Backlog priorizado
- Se discute cada historia: qué, por qué, cómo
- Equipo se compromete con 39 Story Points

**10:00 - 10:45** - Descomposición en tareas
- Cada historia se descompone en tareas técnicas
- Se asignan responsables preliminares
- Se estiman horas

**10:45 - 11:00** - Plan de reuniones diarias
- Confirmar horario de Daily Standups
- Establecer canal de comunicación

#### Notas de Sprint Planning:

**US-01: Gráficos interactivos en dashboard**
- **Responsables:** Carlos (lead), María (diseño)
- **Tareas:**
  1. Investigar y seleccionar biblioteca (Recharts vs Chart.js) - 4h - Carlos
  2. Diseñar mockups de gráficos - 6h - María
  3. Implementar gráfico "Proyectos por Estado" - 12h - Carlos
  4. Implementar gráfico "Tareas por Prioridad" - 12h - Carlos
  5. Agregar tooltips interactivos - 8h - Carlos
  6. Testing y optimización responsive - 10h - Laura + Carlos
- **Total:** 52 horas

**US-02: Filtros de proyectos**
- **Responsables:** Juan (lead), Laura (testing)
- **Tareas:**
  1. Diseñar UI de componente de filtros - 6h - Juan
  2. Implementar filtro por estado - 6h - Juan
  3. Implementar filtro por prioridad - 6h - Juan
  4. Implementar filtro por fecha y búsqueda - 8h - Juan
  5. Testing de todas las combinaciones - 6h - Laura
- **Total:** 32 horas

**US-03: Tarjetas estadísticas animadas**
- **Responsables:** María (diseño), Juan (implementación)
- **Tareas:**
  1. Rediseñar tarjetas con nuevos iconos - 6h - María
  2. Implementar animaciones con Motion - 6h - Juan
  3. Agregar animación de números (count up) - 4h - Juan
  4. Testing responsive en diferentes dispositivos - 4h - Laura
- **Total:** 20 horas

**US-06: Drag & drop con animaciones mejoradas**
- **Responsables:** Carlos, Roberto
- **Tareas:**
  1. Mejorar animaciones de react-dnd - 10h - Carlos
  2. Implementar feedback visual (sombra, opacidad) - 8h - Carlos
  3. Optimizar rendimiento (evitar re-renders) - 10h - Roberto
  4. Testing cross-browser (Chrome, Firefox, Safari) - 4h - Laura
- **Total:** 32 horas

**US-11: Navegación lateral colapsable**
- **Responsables:** Juan
- **Tareas:**
  1. Implementar lógica de colapsar/expandir - 6h - Juan
  2. Agregar animaciones con Tailwind - 4h - Juan
  3. Guardar preferencia en localStorage - 4h - Juan
  4. Testing y ajustes de iconos - 6h - Juan + Laura
- **Total:** 20 horas

**Impedimentos identificados:**
- Ninguno al inicio del sprint

**Definition of Done revisada:**
- ✅ Código implementado y en rama feature
- ✅ Code review aprobado por al menos 1 dev
- ✅ Tests unitarios pasando (si aplica)
- ✅ Testing manual completado por Laura
- ✅ Sin errores en consola
- ✅ Responsive validado (Desktop, Tablet, Mobile)
- ✅ Aprobación del Product Owner
- ✅ Merge a develop

---

### Calendario de Daily Standups

**Horario:** 9:30 AM - 9:45 AM (15 minutos)  
**Formato:** Presencial en sala de reuniones / Virtual (Google Meet)  
**Facilitador:** Ana López  

**Formato de cada miembro:**
1. ¿Qué hice ayer?
2. ¿Qué haré hoy?
3. ¿Tengo algún impedimento?

#### Daily Standup #1 - Lunes 3 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Sprint Planning | Investigar biblioteca de gráficos (Recharts vs Chart.js) | ❌ Ninguno |
| **María** | Sprint Planning | Empezar diseño de mockups de gráficos en Figma | ❌ Ninguno |
| **Juan** | Sprint Planning | Diseñar UI de filtros, empezar implementación | ❌ Ninguno |
| **Laura** | Sprint Planning | Preparar casos de prueba para todas las historias | ❌ Ninguno |
| **Roberto** | Sprint Planning | Revisar documentación de react-dnd | ❌ Ninguno |

**Decisiones:**
- Carlos decidió usar Recharts por mejor soporte de TypeScript
- María compartirá mockups mañana para feedback temprano

---

#### Daily Standup #2 - Martes 4 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Investigación de Recharts, configuración inicial | Implementar primer gráfico (Proyectos por Estado) | ❌ Ninguno |
| **María** | Diseño de mockups de gráficos (80% completado) | Finalizar mockups, empezar diseño de tarjetas | ❌ Ninguno |
| **Juan** | Diseño de UI de filtros | Implementar filtro por estado | ❌ Ninguno |
| **Laura** | Casos de prueba preparados | Empezar testing de US-11 (colapsable) que Juan completó | ❌ Ninguno |
| **Roberto** | Revisión de react-dnd | Reunión con Carlos para planear mejoras de drag & drop | ❌ Ninguno |

**Logros:**
- Juan completó US-11 (Sidebar colapsable) ✅ - más rápido de lo esperado
- María terminó mockups, aprobados por Product Owner

---

#### Daily Standup #3 - Miércoles 5 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Gráfico de proyectos implementado (70%) | Finalizar gráfico, empezar tooltips | ❌ Ninguno |
| **María** | Diseño de tarjetas estadísticas | Implementar animaciones de entrada con Motion | ❌ Ninguno |
| **Juan** | Filtro por estado completado | Implementar filtro por prioridad | ❌ Ninguno |
| **Laura** | Testing de US-11 ✅ (pasó todas las pruebas) | Testing de filtros que Juan está completando | ❌ Ninguno |
| **Roberto** | Planning de drag & drop con Carlos | Empezar optimización de rendimiento | ❌ Ninguno |

---

#### Daily Standup #4 - Jueves 6 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Gráfico de proyectos completado, tooltips 50% | Finalizar tooltips, empezar segundo gráfico | ❌ Ninguno |
| **María** | Animaciones de tarjetas con Motion | Code review de Carlos, seguir con animaciones | ❌ Ninguno |
| **Juan** | Filtro por prioridad completado | Implementar filtro de fecha y búsqueda | 🟡 Necesito revisar DatePicker de shadcn |
| **Laura** | Testing de filtros | Preparar datos de prueba para gráficos | ❌ Ninguno |
| **Roberto** | Optimización iniciada | Continuar con optimización, evitar re-renders | ❌ Ninguno |

**Impedimento identificado:**
- 🟡 Juan necesita ayuda con DatePicker
- **Resolución:** María tiene experiencia, hará pair programming con Juan (1 hora)

---

#### Daily Standup #5 - Viernes 7 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Segundo gráfico (Tareas por Prioridad) 80% | Finalizar segundo gráfico, mejorar animaciones drag & drop | ❌ Ninguno |
| **María** | Pair programming con Juan, animaciones finalizadas | Testing de tarjetas animadas con Laura | ❌ Ninguno |
| **Juan** | Filtro de fecha implementado (gracias María!) | Finalizar búsqueda por texto, cleanup de código | ❌ Ninguno |
| **Laura** | Datos de prueba preparados | Testing de US-03 (tarjetas), US-02 (filtros) | ❌ Ninguno |
| **Roberto** | Optimización completada | Implementar feedback visual de drag & drop | ❌ Ninguno |

**Progreso del Sprint:** ~40% completado

---

#### Daily Standup #6 - Lunes 10 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | (Fin de semana) | Finalizar gráficos completamente, code review | ❌ Ninguno |
| **María** | (Fin de semana) | Code review de todos, pulir detalles de diseño | ❌ Ninguno |
| **Juan** | (Fin de semana) | Búsqueda por texto, testing completo de filtros | ❌ Ninguno |
| **Laura** | (Fin de semana) | Testing de US-02 y US-03 | ❌ Ninguno |
| **Roberto** | (Fin de semana) | Finalizar feedback visual, testing cross-browser | ❌ Ninguno |

---

#### Daily Standup #7 - Martes 11 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Gráficos 100% completados ✅, code review | Empezar testing con Laura | ❌ Ninguno |
| **María** | Code review de Juan y Carlos | Finalizar ajustes visuales de todos los componentes | ❌ Ninguno |
| **Juan** | US-02 completado ✅ | Ayudar a Laura con testing | ❌ Ninguno |
| **Laura** | Testing de US-02 ✅ y US-03 ✅ | Testing de US-01 (gráficos) con Carlos | ❌ Ninguno |
| **Roberto** | Feedback visual completado | Testing final de drag & drop | ❌ Ninguno |

**Historias completadas hasta ahora:**
- ✅ US-11: Sidebar colapsable (5 SP)
- ✅ US-02: Filtros de proyectos (8 SP)
- ✅ US-03: Tarjetas animadas (5 SP)
- **Total: 18 SP de 39 SP = 46%**

---

#### Daily Standup #8 - Miércoles 12 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Testing de gráficos con Laura | Correcciones menores, optimización final | ❌ Ninguno |
| **María** | Ajustes visuales finalizados | Preparar demo para Sprint Review | ❌ Ninguno |
| **Juan** | Testing con Laura | Documentación de componentes creados | ❌ Ninguno |
| **Laura** | Testing de US-01 casi completo | Finalizar testing de US-01, empezar US-06 | 🟡 Encontré bug en tooltip de gráfico |
| **Roberto** | Testing de drag & drop | Correcciones finales, optimización | ❌ Ninguno |

**Impedimento:**
- 🟡 Bug en tooltip: se sale de la pantalla en móvil
- **Resolución:** Carlos lo corregirá hoy (estimado 2 horas)

---

#### Daily Standup #9 - Jueves 13 de febrero, 9:30 AM

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Bug de tooltip corregido ✅ | Code review final, preparar demo | ❌ Ninguno |
| **María** | Demo preparada | Pulir últimos detalles visuales | ❌ Ninguno |
| **Juan** | Documentación completada | Ayudar donde se necesite, preparar demo | ❌ Ninguno |
| **Laura** | Testing de US-01 ✅ y US-06 80% | Finalizar testing de US-06 | ❌ Ninguno |
| **Roberto** | US-06 casi completado | Últimas correcciones de drag & drop | ❌ Ninguno |

---

#### Daily Standup #10 - Viernes 14 de febrero, 9:30 AM (Último Daily del Sprint)

| Miembro | Ayer | Hoy | Impedimentos |
|---------|------|-----|--------------|
| **Carlos** | Code review, demo preparada | Testing final, preparar presentación para Review | ❌ Ninguno |
| **María** | Detalles visuales finalizados | Preparar slides de diseño para Sprint Review | ❌ Ninguno |
| **Juan** | Ayuda general | Cleanup de código, preparar demo de filtros | ❌ Ninguno |
| **Laura** | Testing de US-06 ✅ completado | Reporte final de testing, preparar métricas | ❌ Ninguno |
| **Roberto** | US-06 completado ✅ | Documentación técnica, preparar demo de Kanban | ❌ Ninguno |

**Estado final del Sprint:**
- ✅ US-01: Gráficos interactivos (13 SP)
- ✅ US-02: Filtros de proyectos (8 SP)
- ✅ US-03: Tarjetas animadas (5 SP)
- ✅ US-06: Drag & drop mejorado (8 SP)
- ✅ US-11: Sidebar colapsable (5 SP)
- **Total: 39 SP de 39 SP = 100% ✅**

---

### Sprint Review - 16 de febrero de 2026, 2:00 PM

**Duración:** 2 horas  
**Asistentes:**
- Equipo Scrum (7 personas)
- Stakeholders: Director de TI, Gerente de Producto
- Usuarios beta: 2 usuarios clave

**Agenda:**

**14:00 - 14:10** - Introducción por Product Owner
- Objetivo del sprint
- Contexto del proyecto

**14:10 - 15:15** - Demostración de historias completadas

#### US-01: Gráficos interactivos en dashboard
**Presentado por:** Carlos Martínez  
**Demo:**
- Mostró dashboard con 2 gráficos nuevos
- Demostró interactividad de tooltips
- Probó responsive en móvil en vivo

**Feedback:**
- 👍 Director de TI: "Excelente trabajo, muy visual"
- 👍 Usuario beta: "Los tooltips son muy útiles"
- 💡 Gerente de Producto: "¿Se podría agregar leyenda más clara?" → **Agregado a backlog como US-18**

**Decisión del Product Owner:** ✅ **ACEPTADA**

---

#### US-02: Filtros de proyectos
**Presentado por:** Juan Pérez  
**Demo:**
- Mostró los 4 filtros funcionando
- Demostró búsqueda por texto
- Mostró que se pueden combinar filtros
- Probó botón "Limpiar filtros"

**Feedback:**
- 👍 Todos: "Funciona perfectamente"
- 💡 Usuario beta: "Sería útil guardar filtros favoritos" → **Agregado a backlog para futuro**

**Decisión del Product Owner:** ✅ **ACEPTADA**

---

#### US-03: Tarjetas estadísticas animadas
**Presentado por:** María García  
**Demo:**
- Mostró animaciones de entrada
- Demostró animación de números (count up)
- Mostró iconos coloridos con lucide-react
- Probó en diferentes tamaños de pantalla

**Feedback:**
- 👍👍 Stakeholders: "Impresionante, se ve muy profesional"
- 👍 Director TI: "Las animaciones son suaves, no afectan rendimiento"
- 💡 Gerente: "Aplicar este estilo a otras secciones también"

**Decisión del Product Owner:** ✅ **ACEPTADA**

---

#### US-06: Drag & drop con animaciones mejoradas
**Presentado por:** Roberto López  
**Demo:**
- Arrastró tareas entre columnas
- Mostró feedback visual (sombra, opacidad)
- Demostró que los cambios se guardan en BD
- Probó en Chrome, Firefox y Safari

**Feedback:**
- 👍 Usuarios beta: "Mucho mejor que antes, muy fluido"
- 👍 Product Owner: "Perfecto, gran mejora en UX"

**Decisión del Product Owner:** ✅ **ACEPTADA**

---

#### US-11: Navegación lateral colapsable
**Presentado por:** Juan Pérez  
**Demo:**
- Colapsó y expandió sidebar
- Mostró que la preferencia se guarda
- Demostró animación suave
- Probó en responsive

**Feedback:**
- 👍 Director TI: "Excelente para aprovechar espacio"
- 💡 Usuario beta: "¿Podrían agregar tooltips cuando está colapsado?" → **Agregado a backlog como US-19**

**Decisión del Product Owner:** ✅ **ACEPTADA**

---

**15:15 - 15:45** - Discusión del Product Backlog
- Product Owner presentó prioridades para Sprint 2
- Equipo estimó nuevas historias
- Se agregaron 2 historias nuevas del feedback

**15:45 - 16:00** - Cierre
- Agradecimientos del Product Owner
- Fecha del próximo Sprint Planning: 17 de febrero

---

### Métricas del Sprint 1

| Métrica | Valor |
|---------|-------|
| **Story Points comprometidos** | 39 |
| **Story Points completados** | 39 |
| **Velocidad** | 39 puntos |
| **Porcentaje de completitud** | 100% |
| **Historias aceptadas** | 5/5 |
| **Historias rechazadas** | 0 |
| **Bugs encontrados** | 1 (corregido durante el sprint) |
| **Bugs en producción** | 0 |
| **Code reviews realizadas** | 5 |
| **Horas trabajadas** | 156h de 280h (56%) |
| **Satisfacción del equipo** | 9/10 |

---

### Sprint Retrospective - 16 de febrero de 2026, 4:30 PM

**Duración:** 1.5 horas  
**Facilitador:** Ana López (Scrum Master)  
**Formato:** Start, Stop, Continue

**Participantes:** Solo el equipo Scrum (sin stakeholders)

#### ¿Qué salió bien? (CONTINUE) ✅

**Votación del equipo (cada miembro vota top 3):**

1. **Comunicación en Daily Standups** (6 votos)
   - "Los dailys fueron muy productivos, siempre en 15 minutos"
   - "Nos ayudaron a identificar el impedimento de Juan rápidamente"

2. **Pair programming** (5 votos)
   - "María ayudando a Juan con el DatePicker fue clave"
   - "Carlos y Roberto trabajaron muy bien juntos en drag & drop"

3. **Testing temprano** (5 votos)
   - "Laura empezó a testear desde el día 3, no hasta el final"
   - "Encontró el bug del tooltip con tiempo para corregirlo"

4. **Estimaciones precisas** (4 votos)
   - "Completamos exactamente 39 de 39 Story Points"
   - "Las tareas quedaron bien estimadas en horas"

5. **Code reviews rápidos** (3 votos)
   - "Todos respondimos reviews en menos de 2 horas"
   - "La calidad del código fue excelente"

#### ¿Qué podemos mejorar? (START) 🆕

**Votación del equipo:**

1. **Documentación durante desarrollo** (5 votos)
   - "Documentamos todo al final, mejor hacerlo mientras codificamos"
   - **Acción:** Crear plantilla de documentación - Responsable: Carlos - Deadline: 20 feb

2. **Pruebas de accesibilidad** (4 votos)
   - "No verificamos WCAG, debería estar en Definition of Done"
   - **Acción:** Investigar herramientas (axe, Lighthouse) - Responsable: Laura - Deadline: 22 feb

3. **Spike técnico para historias complejas** (3 votos)
   - "Carlos pasó 4h investigando Recharts, eso debió ser un spike previo"
   - **Acción:** Identificar historias que necesitan spike en Sprint 2 - Responsable: Ana

4. **Sesiones de diseño colaborativo** (3 votos)
   - "María diseñó sola, hubiera sido útil tener input del equipo"
   - **Acción:** Agendar sesión semanal de diseño - Responsable: María + Ana - Fecha: Jueves 10am

#### ¿Qué debemos dejar de hacer? (STOP) 🛑

**Votación del equipo:**

1. **Meetings después de las 5 PM** (6 votos)
   - "Tuvimos 2 meetings hasta las 6 PM, afecta work-life balance"
   - **Acción:** Establecer regla: no meetings después de 5 PM - Responsable: Ana - Inmediato

2. **Estimar sin todo el equipo presente** (4 votos)
   - "Roberto faltó a una parte del planning, causó confusión después"
   - **Acción:** Planning es obligatorio para todos - Responsable: Ana

3. **Commits sin mensaje descriptivo** (2 votos)
   - "Hubo algunos commits como 'fix' o 'update'"
   - **Acción:** Recordar Conventional Commits - Responsable: Todos

#### Acciones de Mejora para Sprint 2

| # | Acción | Responsable | Deadline | Prioridad |
|---|--------|-------------|----------|-----------|
| 1 | Crear plantilla de documentación (README para componentes) | Carlos | 20 feb | Alta |
| 2 | Investigar herramientas de accesibilidad (axe-core, Lighthouse) | Laura | 22 feb | Alta |
| 3 | Agendar sesión de diseño colaborativo semanal (Jueves 10am) | María + Ana | 19 feb | Media |
| 4 | Establecer regla: no meetings después de 5 PM | Ana | Inmediato | Alta |
| 5 | Identificar historias Sprint 2 que necesitan spike técnico | Ana + Equipo | Planning | Media |

#### Felicitaciones del Sprint (Kudos) 🏆

**Cada miembro reconoce a un compañero:**

- **Carlos** → **Laura**: "Gracias por encontrar el bug del tooltip, salvaste la demo"
- **María** → **Carlos**: "Excelente implementación de gráficos, superó mis mockups"
- **Juan** → **María**: "Gracias por ayudarme con el DatePicker, aprendí mucho"
- **Laura** → **Todo el equipo**: "Todos fueron muy receptivos a mis reportes de bugs"
- **Roberto** → **Carlos**: "Pair programming contigo fue muy productivo"
- **Ana (SM)** → **Todo el equipo**: "100% de completitud en el primer sprint es increíble"
- **Product Owner** → **María**: "Tus diseños impresionaron a los stakeholders"

#### Temperatura del Equipo (Mood)

**Escala: 1 (😞) a 10 (😄)**

- Carlos: 9/10
- María: 10/10
- Juan: 8/10
- Laura: 9/10
- Roberto: 9/10
- Ana: 10/10
- **Promedio: 9.2/10** ⭐⭐⭐⭐⭐

**Comentarios:**
- Juan: "8 porque me estresé con el DatePicker, pero al final salió bien"
- María: "10 porque el feedback de stakeholders fue increíble"

---

## FECHAS Y CALENDARIO COMPLETO DEL PROYECTO

### Sprint 1
- **Planning:** Lunes 3 feb, 9:00 AM - 11:00 AM
- **Daily Standups:** 4-7 feb y 10-14 feb, 9:30 AM - 9:45 AM (10 dailys)
- **Review:** Viernes 16 feb, 2:00 PM - 4:00 PM
- **Retrospective:** Viernes 16 feb, 4:30 PM - 6:00 PM

### Sprint 2
- **Planning:** Lunes 17 feb, 9:00 AM - 11:00 AM
- **Daily Standups:** 18-21 feb y 24-28 feb, 9:30 AM - 9:45 AM (10 dailys)
- **Review:** Viernes 1 mar, 2:00 PM - 4:00 PM
- **Retrospective:** Viernes 1 mar, 4:30 PM - 6:00 PM

### Sprint 3
- **Planning:** Lunes 3 mar, 9:00 AM - 11:00 AM
- **Daily Standups:** 4-7 mar y 10-14 mar, 9:30 AM - 9:45 AM (10 dailys)
- **Review:** Viernes 15 mar, 2:00 PM - 4:00 PM
- **Retrospective:** Viernes 15 mar, 4:30 PM - 6:00 PM

---

## CONCLUSIÓN DEL SPRINT 1

El Sprint 1 fue un **éxito completo**:
- ✅ 100% de Story Points completados (39/39)
- ✅ Todas las historias aceptadas por el Product Owner
- ✅ 0 bugs en producción
- ✅ Stakeholders muy satisfechos
- ✅ Equipo con moral alta (9.2/10)
- ✅ Acciones de mejora identificadas para Sprint 2

El equipo demostró excelente capacidad de auto-organización, comunicación efectiva, y entrega de valor de alta calidad. La metodología Scrum está funcionando muy bien.

**Próximo paso:** Sprint Planning para Sprint 2 el 17 de febrero.

---

**Documento elaborado por:**  
Ana López - Scrum Master  
[Tu Nombre] - Product Owner  
Fecha: 16 de febrero de 2026
