# Guía para Video de Presentación de la Actividad

## Información del Video

**Duración estimada:** 10-15 minutos  
**Formato recomendado:** MP4 1080p  
**Herramientas sugeridas:** OBS Studio, Loom, Zoom  
**Plataforma de subida:** YouTube, Google Drive, OneDrive  

---

## Estructura del Video

### Introducción (1 minuto)

**Texto sugerido:**
```
"Hola, mi nombre es [Tu Nombre] y en este video voy a presentar el 
trabajo realizado para la gestión de servidores y administración del 
proyecto de la aplicación web de gestión de proyectos TechProjects.

Este video cubre 4 áreas principales:
1. Selección de hardware del servidor
2. Ejecución de sesiones de pruebas
3. Implementación de metodología Scrum
4. Sistema de control de versiones con Git

Comencemos."
```

**Qué mostrar:**
- Pantalla con título del proyecto
- Tu nombre y fecha
- Índice de contenidos

---

## Parte 1: Selección de Hardware (3-4 minutos)

### Sección 1.1: Justificación de la Base de Datos

**Texto sugerido:**
```
"Para este proyecto, decidimos utilizar PostgreSQL a través de Supabase 
como nuestra base de datos. PostgreSQL es una base de datos relacional 
robusta que ofrece:
- Soporte para JSON (características NoSQL híbridas)
- Transacciones ACID
- Escalabilidad horizontal con Supabase
- Excelente rendimiento para aplicaciones web"
```

**Qué mostrar:**
- Abrir documento `docs/1_SELECCION_HARDWARE.md`
- Navegar a la sección "Naturaleza del Sistema"
- Mostrar comparativa de tecnologías

### Sección 1.2: Especificaciones del Servidor

**Texto sugerido:**
```
"Seleccionamos un servidor Dell PowerEdge R450 con las siguientes 
especificaciones:

DISCO DURO:
- 2 TB SSD NVMe en RAID 1 para datos críticos
- 4 TB HDD en RAID 5 para respaldos
- Justificación: El SSD proporciona velocidad para la base de datos,
  mientras que el HDD ofrece capacidad para respaldos históricos.
  Con un crecimiento estimado de 5 GB/año, tenemos capacidad para 
  más de 10 años.

MEMORIA RAM:
- 64 GB DDR4 ECC
- Distribución: 32 GB para PostgreSQL, 8 GB para Node.js API,
  4 GB para sistema operativo, y el resto para servicios y buffer
- Justificación: PostgreSQL requiere memoria suficiente para caché
  de datos. Con 64 GB podemos mantener los datos más accesados en 
  memoria, reduciendo accesos a disco.

TOPOLOGÍA DE RED:
- Topología Estrella con segmentación por VLANs
- VLAN 10: Servidores (10.0.10.0/24)
- VLAN 20: Aplicaciones (10.0.20.0/24)
- VLAN 30: Administración (10.0.30.0/24)
- Tarjetas de red 2x10 Gbps con bonding para redundancia
- Justificación: Esta topología permite aislar el tráfico,
  mejorando seguridad y rendimiento. Las VLANs separan el acceso
  a la base de datos del tráfico de aplicaciones.

SISTEMA OPERATIVO:
- Ubuntu Server 24.04 LTS
- Justificación:
  * 5 años de soporte oficial
  * Compatibilidad excelente con PostgreSQL, Node.js, Docker
  * Bajo consumo de recursos (< 500 MB RAM)
  * Gran comunidad y documentación
  * Gratis y open source
```

**Qué mostrar:**
- Scroll por las secciones de especificaciones
- Destacar tablas de distribución de memoria
- Mostrar diagrama de topología de red
- Mostrar tabla comparativa de sistemas operativos

### Sección 1.3: Licitación de Proveedores

**Texto sugerido:**
```
"Realizamos una licitación con tres proveedores: Dell, HPE y Supermicro.

Después de evaluar precio, especificaciones, garantía, tiempo de entrega
y experiencia del proveedor, seleccionamos Dell PowerEdge R450 con una
puntuación de 9.2/10.

Dell ofrece el mejor equilibrio entre rendimiento (procesador Xeon Gold),
soporte (ProSupport Plus 5 años), y precio ($7,800 USD).
```

**Qué mostrar:**
- Abrir `docs/2_LICITACION_PROVEEDORES.md`
- Mostrar tabla comparativa de proveedores
- Mostrar gráfica de puntuación
- Destacar la decisión final

---

## Parte 2: Herramientas de Monitoreo y Seguridad (2 minutos)

### Sección 2.1: Herramientas de Monitoreo

**Texto sugerido:**
```
"Implementamos 3 herramientas de monitoreo para garantizar la 
estabilidad de la plataforma:

1. PROMETHEUS + GRAFANA:
   - Monitoreo de métricas del servidor, base de datos y aplicación
   - Dashboards personalizados para CPU, RAM, disco, red
   - Alertas configuradas para condiciones críticas
   - Retención de 90 días de datos

2. NETDATA:
   - Monitoreo en tiempo real con actualización cada segundo
   - Dashboards automáticos sin configuración
   - Detección de anomalías con machine learning
   - Excelente para diagnóstico rápido de problemas

3. UPTIME KUMA:
   - Monitoreo de disponibilidad de la aplicación
   - Verificación cada 60 segundos
   - Status page público para clientes
   - Notificaciones por Email, Slack, SMS
```

**Qué mostrar:**
- Abrir `docs/3_MONITOREO_Y_SEGURIDAD.md`
- Mostrar tabla comparativa de herramientas
- Mostrar diagrama de arquitectura de monitoreo
- Destacar las alertas configuradas

### Sección 2.2: Configuración de Seguridad

**Texto sugerido:**
```
"Implementamos múltiples capas de seguridad:

1. Firewall UFW - Solo puertos esenciales abiertos (22, 80, 443)
2. Fail2Ban - Protección contra ataques de fuerza bruta
3. SSL/TLS con Let's Encrypt - Certificados gratuitos, renovación automática
4. PostgreSQL hardening - Usuarios con privilegios mínimos
5. Rate limiting con Nginx - Máximo 100 requests/minuto por IP
6. Backups automáticos encriptados - Diarios con retención de 90 días

Todas estas medidas garantizan que la plataforma esté protegida contra
los ataques más comunes.
```

**Qué mostrar:**
- Scroll por las secciones de seguridad
- Mostrar tabla de resumen de configuración de seguridad
- Destacar los comandos de configuración importantes

---

## Parte 3: Ejecución de Sesiones de Pruebas (3 minutos)

### Sección 3.1: Pruebas Manuales

**Texto sugerido:**
```
"Ejecutamos 5 pruebas manuales para validar las funciones básicas:

PASO 1 - Autenticación:
Verificamos registro de usuarios, login y logout. La prueba incluye
validación de email y contraseña.

PASO 2 - Creación de Proyectos:
Validamos que los usuarios pueden crear proyectos con nombre, descripción,
fechas y prioridades.

PASO 3 - Tablero Kanban:
Probamos la creación de tareas y drag & drop entre columnas. Verificamos
que los cambios se persisten en la base de datos.

PASO 4 - Gestión de Equipo:
Comprobamos la asignación de miembros a proyectos y tareas.

PASO 5 - Dashboard:
Validamos que las estadísticas y gráficos muestran datos correctos.
```

**Qué mostrar:**
- Abrir `docs/4_PRUEBAS_SISTEMA.md`
- Scroll por cada paso de las pruebas manuales
- Si es posible, hacer demostración en vivo de 1-2 pruebas
- Mostrar la checklist de pruebas completadas

### Sección 3.2: Pruebas Automatizadas

**Texto sugerido:**
```
"Implementamos 3 suites de pruebas automatizadas con Vitest:

PRUEBA 1 - Componentes UI (Button.test.tsx):
Validamos que los componentes se renderizan correctamente, ejecutan
callbacks onClick, aplican estilos y se pueden deshabilitar.

PRUEBA 2 - Autenticación (Auth.test.tsx):
Probamos el flujo completo de registro, login, validación de emails
y manejo de errores.

PRUEBA 3 - Tablero Kanban (Kanban.test.tsx):
Verificamos que las columnas se renderizan, las tareas se muestran
correctamente, y los badges de prioridad tienen los colores correctos.

Todas las pruebas pasaron exitosamente con 13 tests en total.
```

**Qué mostrar:**
- Abrir terminal y ejecutar: `npm run test:run`
- Mostrar resultados de las pruebas pasando
- Abrir archivos de prueba:
  * `src/tests/components/Button.test.tsx`
  * `src/tests/integration/Auth.test.tsx`
  * `src/tests/integration/Kanban.test.tsx`
- Explicar brevemente qué valida cada test

**Comandos a ejecutar en video:**
```bash
# Ejecutar todas las pruebas
npm run test:run

# Mostrar reporte de cobertura
npm run test:coverage

# Abrir archivo de prueba
code src/tests/components/Button.test.tsx
```

---

## Parte 4: Metodología Scrum (3 minutos)

### Sección 4.1: Equipo Scrum

**Texto sugerido:**
```
"Como Product Owner, formé un equipo Scrum de 7 personas:

- Yo como Product Owner - defino la visión y priorizo el backlog
- Ana López como Scrum Master - facilita eventos y elimina impedimentos
- 5 miembros del Development Team:
  * Carlos Martínez - Frontend Developer
  * María García - UI/UX Designer
  * Juan Pérez - Frontend Developer
  * Laura Sánchez - QA Engineer
  * Roberto López - Full Stack Developer

Capacidad total: 280 horas por sprint de 2 semanas.
```

**Qué mostrar:**
- Abrir `docs/5_METODOLOGIA_SCRUM.md`
- Mostrar tabla del equipo Scrum
- Destacar roles y responsabilidades

### Sección 4.2: Product Backlog y Sprint Planning

**Texto sugerido:**
```
"Creamos un Product Backlog de 17 historias de usuario organizadas
en 4 épicas:

1. Modernización del Dashboard
2. Optimización del Tablero Kanban
3. Mejora de Navegación y Responsividad
4. Sistema de Notificaciones en Tiempo Real

Priorizamos con el método MoSCoW:
- Must Have: 73 Story Points
- Should Have: 60 Story Points
- Could Have: 21 Story Points

Ejecutamos 3 sprints de 2 semanas cada uno.

SPRINT 1 - Fundamentos de Mejora UI/UX:
Completamos 5 historias (39 Story Points):
- Gráficos interactivos en dashboard
- Filtros de proyectos
- Tarjetas estadísticas animadas
- Drag & drop mejorado
- Navegación colapsable

Todas las historias fueron aceptadas por el Product Owner.
```

**Qué mostrar:**
- Mostrar tabla del Product Backlog completo
- Destacar Sprint 1 Backlog
- Scroll por las épicas del proyecto
- Mostrar distribución de Story Points

### Sección 4.3: Daily Standups y Sprint Review

**Texto sugerido:**
```
"Realizamos Daily Standups diarios de 15 minutos. Por ejemplo,
en el Daily Standup #5 del Sprint 1:

- Carlos completó gráfico de proyectos
- María diseñó tarjetas de estadísticas
- Juan implementó filtros
- Laura encontró un bug que fue corregido rápidamente
- Roberto optimizó el rendimiento del Kanban

En el Sprint Review presentamos las 5 historias completadas a los
stakeholders, quienes quedaron impresionados con las mejoras visuales.
```

**Qué mostrar:**
- Mostrar tabla de Daily Standup #5
- Mostrar sección de Sprint Review
- Destacar las historias aceptadas

### Sección 4.4: Sprint Retrospective

**Texto sugerido:**
```
"En la Retrospectiva identificamos:

QUÉ SALIÓ BIEN:
- Comunicación excelente
- Pair programming efectivo
- Testing temprano evitó bugs
- Estimaciones precisas

QUÉ MEJORAR:
- Documentación durante desarrollo
- Pruebas de accesibilidad
- Sesiones de diseño colaborativo

Definimos acciones concretas de mejora para el siguiente sprint,
lo que demuestra mejora continua.

Completamos los 3 sprints exitosamente con una velocidad promedio
de 49.67 Story Points y 100% de las historias Must Have completadas.
```

**Qué mostrar:**
- Mostrar tabla Start/Stop/Continue de retrospectiva
- Mostrar gráfica de burndown del proyecto
- Mostrar gráfica de velocidad
- Destacar métricas finales (17/22 historias completadas)

---

## Parte 5: Sistema de Control de Versiones con Git (3 minutos)

### Sección 5.1: Creación de Repositorio y Ramas

**Texto sugerido:**
```
"Implementamos Git Flow como estrategia de branching:

RAMAS PRINCIPALES:
- main: Código en producción
- develop: Código de desarrollo

RAMAS DE SOPORTE:
- feature/*: Nuevas funcionalidades
- bugfix/*: Corrección de bugs
- release/*: Preparación de versiones
- hotfix/*: Parches urgentes

Creamos ramas para cada historia de usuario:
- feature/dashboard-improvements
- feature/kanban-filters
- feature/notifications
```

**Qué mostrar:**
- Abrir `docs/6_CONTROL_VERSIONES_GIT.md`
- Mostrar diagrama de estructura de ramas
- Abrir terminal y ejecutar:

```bash
# Ver todas las ramas
git branch -a

# Ver historial gráfico
git log --graph --oneline --all --decorate -15

# Ver tags
git tag -l
```

### Sección 5.2: Flujo de Trabajo

**Texto sugerido:**
```
"El flujo de trabajo típico es:

1. Crear feature branch desde develop
2. Hacer commits siguiendo Conventional Commits:
   - feat: para nuevas funcionalidades
   - fix: para corrección de bugs
   - docs: para documentación
   - test: para pruebas
   
3. Push a remoto regularmente
4. Crear Pull Request para code review
5. Merge a develop después de aprobación
6. Al completar sprint, crear release branch
7. Merge release a main y crear tag

Por ejemplo, este commit de feature de notificaciones:
'feat(notifications): Implement real-time notification system'

Incluye descripción detallada y referencia a la historia de usuario.
```

**Qué mostrar:**
- Scroll por ejemplos de commits
- Mostrar tabla de tipos de commits (Conventional Commits)
- Ejecutar en terminal:

```bash
# Ver commits de un feature
git log --oneline --grep="notifications"

# Ver diferencias entre versiones
git diff v1.0.0..v2.0.0 --stat

# Ver tags anotados
git show v2.0.0
```

### Sección 5.3: Recuperación de Versiones

**Texto sugerido:**
```
"Git permite recuperar cualquier versión anterior:

OPCIÓN 1 - Revertir commit:
Crea un nuevo commit que deshace cambios, manteniendo historial.

OPCIÓN 2 - Checkout de archivo:
Restaura un archivo específico a versión anterior.

OPCIÓN 3 - Crear rama desde tag:
Útil para mantener versiones anteriores con parches.

Por ejemplo, si necesitamos volver a la versión 1.0:
git checkout -b restore-v1.0 v1.0.0
```

**Qué mostrar:**
- Mostrar sección de recuperación de versiones
- Ejecutar en terminal:

```bash
# Ver historial de un archivo
git log --oneline -- src/app/pages/Dashboard.tsx

# Ver archivo en versión anterior
git show v1.0.0:src/app/pages/Dashboard.tsx

# Ver reflog (historial de cambios)
git reflog -10
```

### Sección 5.4: Repositorio Público

**Texto sugerido:**
```
"El código está disponible públicamente en GitHub:
https://github.com/tu-usuario/techprojects-app

El repositorio incluye:
- Todo el código fuente
- Documentación completa en /docs
- Pruebas automatizadas en /src/tests
- GitHub Actions para CI/CD
- README con instrucciones de instalación

Cualquiera puede clonar el repositorio y ejecutar la aplicación
localmente con 'npm install' y 'npm run dev'.
```

**Qué mostrar:**
- Abrir navegador en GitHub
- Navegar por el repositorio
- Mostrar estructura de archivos
- Mostrar README.md
- Mostrar carpeta /docs
- Mostrar GitHub Actions (si están configurados)
- Mostrar commits recientes
- Mostrar tags de versiones

---

## Conclusión del Video (1 minuto)

**Texto sugerido:**
```
"En resumen, hemos cubierto:

1. HARDWARE: Seleccionamos servidor Dell PowerEdge R450 con:
   - 2 TB SSD + 4 TB HDD
   - 64 GB RAM
   - Topología de red con VLANs
   - Ubuntu Server 24.04 LTS

2. MONITOREO Y SEGURIDAD:
   - Prometheus + Grafana
   - Netdata
   - Uptime Kuma
   - Múltiples capas de seguridad

3. PRUEBAS:
   - 5 pruebas manuales completadas
   - 3 suites de pruebas automatizadas (13 tests)
   - 100% de pruebas pasando

4. SCRUM:
   - Equipo de 7 personas
   - 3 sprints de 2 semanas
   - 17 historias de usuario completadas
   - 100% Must Have completado

5. GIT:
   - Git Flow implementado
   - Conventional Commits
   - Repositorio público en GitHub
   - Control completo de versiones

Toda la documentación detallada está disponible en el repositorio.

Gracias por su atención.
```

**Qué mostrar:**
- Pantalla con resumen de puntos clave
- Tu nombre y contacto
- Enlace al repositorio de GitHub
- Enlace a la documentación

---

## Checklist Pre-Grabación

### Preparación Técnica

- [ ] Cerrar aplicaciones innecesarias
- [ ] Configurar resolución de pantalla 1920×1080
- [ ] Probar micrófono (audio claro sin ruido de fondo)
- [ ] Preparar terminal con comandos listos
- [ ] Tener todos los documentos abiertos en tabs
- [ ] Configurar OBS/Loom con captura de pantalla + webcam (opcional)

### Preparación de Contenido

- [ ] Revisar todos los documentos en /docs
- [ ] Probar todos los comandos Git que vas a ejecutar
- [ ] Tener repositorio de GitHub listo (crear si no existe)
- [ ] Ejecutar pruebas para verificar que pasan
- [ ] Preparar notas o guion escrito

### Durante la Grabación

- [ ] Hablar claramente y a velocidad moderada
- [ ] Hacer pausas entre secciones
- [ ] Usar puntero del mouse para destacar información importante
- [ ] Hacer zoom en texto pequeño
- [ ] No apresurarse - es mejor 15 minutos completos que 8 apresurados

### Post-Grabación

- [ ] Revisar el video completo
- [ ] Verificar que el audio se escucha bien
- [ ] Verificar que todo el texto es legible
- [ ] Agregar títulos/marcadores de tiempo (opcional)
- [ ] Subir a YouTube/Drive en modo público
- [ ] Copiar enlace del video
- [ ] Probar que el enlace funciona en navegador incógnito

---

## Herramientas Recomendadas

### Grabación de Pantalla

| Herramienta | Plataforma | Precio | Recomendación |
|-------------|------------|--------|---------------|
| **OBS Studio** | Windows, Mac, Linux | Gratis | ⭐⭐⭐⭐⭐ Mejor calidad |
| **Loom** | Web, Windows, Mac | Gratis (límite 5 min) / $8/mes | ⭐⭐⭐⭐ Muy fácil de usar |
| **Zoom** | Windows, Mac, Linux | Gratis | ⭐⭐⭐⭐ Si ya lo tienes |
| **ShareX** | Windows | Gratis | ⭐⭐⭐ Ligero y rápido |
| **QuickTime** | Mac | Gratis | ⭐⭐⭐ Nativo de Mac |

### Edición (Opcional)

- **DaVinci Resolve** (Gratis) - Profesional pero complejo
- **OpenShot** (Gratis) - Fácil de usar
- **Clipchamp** (Web, Gratis) - Online, sin instalación

### Subida de Video

- **YouTube** - Recomendado, configura como "unlisted" o "public"
- **Google Drive** - Fácil, asegúrate de dar permisos de visualización
- **OneDrive** - Si tienes cuenta de Microsoft
- **Vimeo** - Opción profesional

---

## Ejemplo de Descripción del Video

```
Presentación de Proyecto: Gestión de Servidores y Administración con Scrum

Este video presenta el trabajo realizado para la administración integral 
de la aplicación web TechProjects Management App.

CONTENIDO:
00:00 - Introducción
00:30 - Selección de Hardware del Servidor
04:00 - Herramientas de Monitoreo y Seguridad
06:00 - Ejecución de Sesiones de Pruebas
09:00 - Metodología Scrum (3 sprints)
12:00 - Sistema de Control de Versiones con Git
15:00 - Conclusiones

REPOSITORIO:
https://github.com/tu-usuario/techprojects-app

DOCUMENTACIÓN:
- Selección de Hardware
- Licitación de Proveedores
- Monitoreo y Seguridad
- Pruebas del Sistema
- Metodología Scrum
- Control de Versiones Git

TECNOLOGÍAS:
React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Vitest, Git

Contacto: tu-email@ejemplo.com
Fecha: 02 de febrero de 2026
```

---

## Tips para un Video Exitoso

### Presentación

✅ **Hacer:**
- Hablar con confianza y claridad
- Usar lenguaje profesional pero accesible
- Explicar conceptos técnicos de forma simple
- Hacer pausas entre secciones
- Destacar logros y resultados

❌ **Evitar:**
- Hablar demasiado rápido
- Usar muletillas ("eh", "este", "pues")
- Divagar sin estructura
- Texto demasiado pequeño
- Fondo ruidoso o distracciones

### Técnica

✅ **Hacer:**
- Resolución 1920×1080 (Full HD)
- Bitrate mínimo 5000 kbps
- Framerate 30 FPS mínimo
- Zoom en texto importante
- Buen contraste de colores

❌ **Evitar:**
- Grabar en resolución baja
- Audio con ruido de fondo
- Cambiar de ventana muy rápido
- Texto ilegible
- Cursor moviéndose erráticamente

---

## Escaleta Detallada (15 minutos)

| Minuto | Sección | Contenido | Archivos/Comandos |
|--------|---------|-----------|-------------------|
| 0:00-1:00 | Introducción | Presentación personal, índice | Pantalla de título |
| 1:00-2:00 | Hardware - DB | Justificación PostgreSQL/Supabase | `1_SELECCION_HARDWARE.md` |
| 2:00-3:30 | Hardware - Specs | Disco, RAM, Red, SO | Tablas de especificaciones |
| 3:30-4:30 | Licitación | Comparativa 3 proveedores | `2_LICITACION_PROVEEDORES.md` |
| 4:30-5:30 | Monitoreo | 3 herramientas (Prometheus, Netdata, Uptime Kuma) | `3_MONITOREO_Y_SEGURIDAD.md` |
| 5:30-6:30 | Seguridad | 6 capas de seguridad | Tabla de resumen |
| 6:30-8:00 | Pruebas Manuales | 5 pasos de prueba | `4_PRUEBAS_SISTEMA.md` |
| 8:00-9:30 | Pruebas Automatizadas | 3 suites, demo en terminal | `npm run test:run` |
| 9:30-10:30 | Scrum - Equipo | Roles, backlog, épicas | `5_METODOLOGIA_SCRUM.md` |
| 10:30-11:30 | Scrum - Sprints | 3 sprints, dailys, reviews | Tablas de sprints |
| 11:30-12:30 | Scrum - Métricas | Velocidad, burndown, resultados | Gráficas y tablas |
| 12:30-13:30 | Git - Ramas | Estructura, Git Flow | `git log --graph`, `git branch` |
| 13:30-14:30 | Git - Workflow | Commits, merges, tags | `git show`, `git diff` |
| 14:30-15:00 | Conclusión | Resumen, repositorio GitHub | Pantalla final |

---

¡Éxito con tu video! 🎥🚀

**Documento elaborado por:**  
Equipo de Documentación  
TechProjects Management Solutions  
Fecha: 02 de febrero de 2026
