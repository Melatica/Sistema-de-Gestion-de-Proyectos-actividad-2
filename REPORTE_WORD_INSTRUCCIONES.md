# Instrucciones para Elaborar el Reporte en Word

## Información del Documento

**Formato:** Microsoft Word (.docx)  
**Páginas estimadas:** 25-35 páginas  
**Fuente:** Arial o Calibri 12pt  
**Interlineado:** 1.5  
**Márgenes:** 2.5 cm en todos los lados  

---

## Estructura del Reporte

### Portada

```
[Logo de la institución - si aplica]

ADMINISTRACIÓN DE SERVIDORES Y GESTIÓN DE PROYECTOS

Aplicación Web de Gestión de Proyectos TechProjects

Nombre del estudiante: [Tu Nombre Completo]
Matrícula: [Tu Matrícula]
Materia: Administración de Servidores y Proyectos
Profesor: [Nombre del Profesor]
Grupo: [Tu Grupo]

Fecha: 02 de febrero de 2026
```

---

### Índice (Generado Automáticamente)

```
1. Introducción ................................................ 3
2. Selección de Hardware del Servidor .......................... 4
   2.1. Justificación de la Base de Datos ..................... 4
   2.2. Especificaciones del Servidor ......................... 5
   2.3. Licitación de Proveedores ............................. 8
3. Herramientas de Monitoreo y Seguridad ...................... 12
   3.1. Herramientas de Monitoreo ............................ 12
   3.2. Configuración de Seguridad ........................... 15
4. Sesión de Pruebas del Sistema .............................. 18
   4.1. Pruebas Manuales ..................................... 18
   4.2. Pruebas Automatizadas ................................ 20
5. Metodología Scrum .......................................... 22
   5.1. Equipo Scrum ......................................... 22
   5.2. Product Backlog y Sprints ............................ 23
   5.3. Resultados del Proyecto .............................. 26
6. Sistema de Control de Versiones con Git ................... 28
   6.1. Estructura de Ramas .................................. 28
   6.2. Flujo de Trabajo ..................................... 29
   6.3. Repositorio GitHub ................................... 31
7. Conclusiones ............................................... 32
8. Referencias ................................................ 33
Anexos ........................................................ 34
```

---

## 1. Introducción (2 páginas)

### Qué incluir:

```
1.1 Contexto del Proyecto
- Descripción de la aplicación web de gestión de proyectos
- Tecnologías utilizadas (React, TypeScript, Supabase)
- Objetivos de la actividad

1.2 Alcance del Reporte
- Selección de hardware para servidor
- Implementación de monitoreo y seguridad
- Ejecución de pruebas del sistema
- Aplicación de metodología Scrum
- Control de versiones con Git

1.3 Estructura del Documento
- Breve descripción de cada capítulo
```

### Ejemplo de texto:

```
El presente reporte documenta el trabajo realizado para la administración 
integral de la aplicación web TechProjects Management App, una plataforma 
de gestión de proyectos desarrollada con React, TypeScript y Supabase.

La actividad se centra en la práctica de gestión de servidores y 
administración de proyectos, abarcando desde la selección del hardware 
adecuado hasta la implementación de metodologías ágiles de desarrollo.

A lo largo de este documento se presentan las decisiones técnicas tomadas, 
justificaciones basadas en mejores prácticas de la industria, y resultados 
concretos de las actividades realizadas.

El proyecto demuestra la capacidad de gestionar eficientemente una 
plataforma digital completa, implementando herramientas de monitoreo, 
realizando pruebas exhaustivas, y aplicando Scrum para la gestión del 
equipo de desarrollo.
```

---

## 2. Selección de Hardware del Servidor (6-8 páginas)

### Qué incluir:

**2.1 Justificación de la Base de Datos (1 página)**
- Tipo de base de datos seleccionada (PostgreSQL via Supabase)
- Razones de la selección:
  * Naturaleza del sistema (aplicación web con múltiples usuarios)
  * Ventajas de PostgreSQL (ACID, escalabilidad, rendimiento)
  * Beneficios de Supabase (hosting, API automática, real-time)
- Comparación con alternativas (MySQL, MongoDB, etc.)

**2.2 Especificaciones del Servidor (3-4 páginas)**

Subsección 2.2.1: Tamaño de Disco Duro
- Especificación seleccionada: 2 TB SSD NVMe (RAID 1) + 4 TB HDD (RAID 5)
- Justificación técnica:
  * Cálculo de espacio necesario para la base de datos
  * Proyección de crecimiento (5 GB/año)
  * Distribución: SO (100 GB), DB (500 GB), Logs (100 GB), etc.
  * Importancia del RAID 1 para redundancia
  * HDD para respaldos históricos
- **Tabla 2.1:** Distribución de almacenamiento

Subsección 2.2.2: Capacidad de Memoria RAM
- Especificación seleccionada: 64 GB DDR4 ECC
- Justificación técnica:
  * Requisitos de PostgreSQL (shared_buffers, effective_cache)
  * Distribución de memoria:
    - PostgreSQL: 32 GB
    - Node.js API: 8 GB
    - Sistema Operativo: 4 GB
    - Servicios de monitoreo: 4 GB
    - Docker: 8 GB
    - Buffer: 8 GB
  * Cálculo de conexiones concurrentes (200 conexiones)
  * Parámetros de configuración de PostgreSQL
- **Tabla 2.2:** Distribución de memoria RAM

Subsección 2.2.3: Topología de Red
- Topología seleccionada: Estrella con segmentación por VLANs
- Justificación:
  * Ventajas de la topología estrella (aislamiento de fallos, expansión fácil)
  * Segmentación por VLANs:
    - VLAN 10 (Servidores): 10.0.10.0/24
    - VLAN 20 (Aplicaciones): 10.0.20.0/24
    - VLAN 30 (Administración): 10.0.30.0/24
  * Tarjetas de red: 2 × 10 GbE con bonding
  * Conexión con máquinas cliente (diagrama de flujo)
- **Figura 2.1:** Diagrama de topología de red (INSERTAR IMAGEN)
- **Tabla 2.3:** Especificaciones de red

Subsección 2.2.4: Sistema Operativo
- Sistema seleccionado: Ubuntu Server 24.04 LTS
- Justificación:
  * Soporte a largo plazo (5 años)
  * Compatibilidad con stack tecnológico
  * Rendimiento y bajo consumo de recursos
  * Seguridad (AppArmor, UFW, actualizaciones automáticas)
  * Herramientas de administración (systemd, APT)
- **Tabla 2.4:** Comparativa de sistemas operativos
- Configuración del sistema (particionamiento de disco)
- **Tabla 2.5:** Particionamiento propuesto

**2.3 Licitación de Proveedores (2-3 páginas)**
- Descripción del proceso de licitación
- Especificaciones técnicas requeridas (RFP)
- Criterios de evaluación (precio 30%, especificaciones 35%, garantía 20%, entrega 10%, experiencia 5%)

Subsección 2.3.1: Propuestas Recibidas
- **Proveedor 1: Dell Technologies**
  * Especificaciones del Dell PowerEdge R450
  * Precio: $7,800 USD (desglosado)
  * Ventajas y desventajas
  * Puntuación: 9.2/10
  
- **Proveedor 2: HPE**
  * Especificaciones del HPE ProLiant DL360 Gen11
  * Precio: $6,800 USD (desglosado)
  * Ventajas y desventajas
  * Puntuación: 7.7/10
  
- **Proveedor 3: Supermicro**
  * Especificaciones del Supermicro 1029P-MTR
  * Precio: $7,950 USD (desglosado)
  * Ventajas y desventajas
  * Puntuación: 8.7/10

- **Tabla 2.6:** Comparativa de proveedores
- **Gráfica 2.1:** Puntuación de proveedores (INSERTAR GRÁFICA)

Subsección 2.3.2: Decisión de Adjudicación
- Proveedor seleccionado: Dell Technologies
- Justificación de la decisión:
  * Mejor puntuación global (9.2/10)
  * Procesador Intel Xeon Gold (superior a Silver)
  * Soporte ProSupport Plus (5 años NBD)
  * Marca líder en servidores
  * Gestión remota avanzada (iDRAC9 Enterprise)
- Comparación final con otros proveedores
- Próximos pasos (cronograma de compra e instalación)

### Capturas de pantalla a incluir:

1. **Captura 2.1:** Diagrama de topología de red
2. **Captura 2.2:** Tabla comparativa de proveedores (del documento)
3. **Captura 2.3:** Gráfica de puntuación de proveedores

---

## 3. Herramientas de Monitoreo y Seguridad (6-8 páginas)

### Qué incluir:

**3.1 Herramientas de Monitoreo (3-4 páginas)**

Subsección 3.1.1: Prometheus + Grafana
- Descripción de la herramienta
- Por qué se seleccionó:
  * Open source y gratuito
  * Estándar de la industria (CNCF)
  * Integración nativa con PostgreSQL, Node.js
  * Alertas configurables
- Métricas monitoreadas:
  * Servidor: CPU, RAM, Disco, Red
  * PostgreSQL: Conexiones, queries, transacciones
  * Aplicación Node.js: Request rate, latencia, errores
  * Nginx: Tráfico, conexiones
- Configuración de alertas (5 alertas principales)
- **Tabla 3.1:** Alertas configuradas en Prometheus

Subsección 3.1.2: Netdata
- Descripción de la herramienta
- Por qué se seleccionó:
  * Instalación de 1 minuto
  * Dashboards automáticos
  * Monitoreo en tiempo real (actualización cada segundo)
  * Detección de anomalías con ML
- Características principales
- Casos de uso (diagnóstico rápido, monitoreo de desarrolladores)
- **Figura 3.1:** Screenshot de dashboard de Netdata (INSERTAR CAPTURA)

Subsección 3.1.3: Uptime Kuma
- Descripción de la herramienta
- Por qué se seleccionó:
  * Interfaz moderna
  * Status page público
  * Notificaciones a múltiples servicios
  * Gratuito y open source
- Tipos de monitoreo configurados (HTTP, TCP, Ping, PostgreSQL)
- Configuración de checks (intervalos, timeouts)
- Notificaciones configuradas (Email, Slack, Telegram, SMS)
- **Tabla 3.2:** Configuración de monitors en Uptime Kuma

Subsección 3.1.4: Arquitectura de Monitoreo Completa
- Diagrama de arquitectura (cómo se integran las 3 herramientas)
- Flujo de datos desde aplicación hasta dashboards
- **Figura 3.2:** Diagrama de arquitectura de monitoreo (INSERTAR CAPTURA)

**3.2 Configuración de Seguridad (3-4 páginas)**

Subsección 3.2.1: Firewall (UFW)
- Descripción de la configuración
- Puertos abiertos: 22 (SSH), 80 (HTTP), 443 (HTTPS)
- Política por defecto: denegar todo entrante
- Comandos de configuración
- Reglas especiales (SSH solo desde IPs de administración)

Subsección 3.2.2: Fail2Ban
- Protección contra ataques de fuerza bruta
- Configuración:
  * SSH: máximo 3 intentos, ban de 2 horas
  * Nginx: máximo 5 intentos, ban de 1 hora
  * PostgreSQL: máximo 2 intentos, ban de 24 horas
- Notificación por email cuando se banea una IP
- **Código 3.1:** Configuración de Fail2Ban (fragmento)

Subsección 3.2.3: SSL/TLS con Let's Encrypt
- Certificados HTTPS gratuitos
- Renovación automática cada 90 días
- Configuración de Nginx:
  * Protocolo TLS 1.3 y 1.2
  * HSTS habilitado
  * Headers de seguridad (X-Frame-Options, CSP)
- Calificación SSLLabs: A+
- **Tabla 3.3:** Headers de seguridad configurados

Subsección 3.2.4: PostgreSQL Security Hardening
- Configuración de autenticación (pg_hba.conf)
- Usuarios con privilegios mínimos
- Solo conexiones desde localhost
- SSL habilitado
- Logging de conexiones y comandos DDL
- **Código 3.2:** Configuración de pg_hba.conf (fragmento)

Subsección 3.2.5: Protección DDoS y Rate Limiting
- Rate limiting con Nginx:
  * Login: 5 requests/minuto
  * API: 100 requests/minuto
  * General: 200 requests/minuto
- Límites de conexiones simultáneas
- Timeouts configurados
- **Tabla 3.4:** Zonas de rate limiting

Subsección 3.2.6: Seguridad de Aplicación Node.js
- Variables de entorno seguras (.env)
- Helmet.js para headers de seguridad
- CORS configurado (solo dominios autorizados)
- Express-rate-limit
- Validación de entrada con Zod
- **Código 3.3:** Configuración de Helmet.js (fragmento)

Subsección 3.2.7: Backups Automáticos y Encriptados
- Backups diarios de PostgreSQL
- Encriptación con AES-256
- Almacenamiento en S3/Google Cloud Storage
- Retención: 30 días local, 90 días remoto
- Script de backup automatizado con cron
- **Código 3.4:** Script de backup (fragmento)

Subsección 3.2.8: Resumen de Configuración de Seguridad
- **Tabla 3.5:** Resumen de 7 capas de seguridad implementadas
- Dashboard de seguridad (estadísticas de últimas 24 horas)

### Capturas de pantalla a incluir:

4. **Captura 3.1:** Dashboard de Grafana con métricas del sistema
5. **Captura 3.2:** Dashboard de Netdata en tiempo real
6. **Captura 3.3:** Uptime Kuma mostrando status de servicios
7. **Captura 3.4:** Diagrama de arquitectura de monitoreo
8. **Captura 3.5:** Configuración de Nginx con SSL
9. **Captura 3.6:** Resultado de SSLLabs (Calificación A+)

---

## 4. Sesión de Pruebas del Sistema (4-5 páginas)

### Qué incluir:

**4.1 Pruebas Manuales (2-3 páginas)**

Introducción a las pruebas manuales:
- Objetivo: Evaluar funciones básicas del sistema
- 5 pasos de prueba definidos
- Criterios de aceptación para cada paso

Subsección 4.1.1: Paso 1 - Registro e Inicio de Sesión
- Objetivo de la prueba
- Pasos ejecutados (8 pasos detallados)
- Resultados esperados (6 checkpoints)
- Resultado obtenido: ✅ Exitoso
- Tiempo de ejecución: X segundos
- Observaciones
- **Captura 4.1:** Pantalla de login de la aplicación

Subsección 4.1.2: Paso 2 - Creación de Proyectos
- Objetivo de la prueba
- Pasos ejecutados
- Datos de prueba utilizados
- Resultados esperados
- Resultado obtenido: ✅ Exitoso
- **Captura 4.2:** Formulario de creación de proyecto
- **Captura 4.3:** Lista de proyectos con proyecto creado

Subsección 4.1.3: Paso 3 - Gestión de Tareas en Kanban
- Objetivo de la prueba
- Pasos ejecutados (11 pasos)
- Tareas creadas (3 tareas de prueba)
- Prueba de drag & drop
- Resultados esperados
- Resultado obtenido: ✅ Exitoso
- **Captura 4.4:** Tablero Kanban con tareas en diferentes columnas
- **Captura 4.5:** Modal de edición de tarea

Subsección 4.1.4: Paso 4 - Gestión de Equipo
- Objetivo de la prueba
- Pasos ejecutados
- Miembros agregados (2 miembros)
- Asignación a proyecto y tareas
- Resultados esperados
- Resultado obtenido: ✅ Exitoso
- **Captura 4.6:** Lista de miembros del equipo

Subsección 4.1.5: Paso 5 - Dashboard y Estadísticas
- Objetivo de la prueba
- Verificación de estadísticas (proyectos, tareas, miembros)
- Gráficos validados (2 gráficos)
- Resultados esperados
- Resultado obtenido: ✅ Exitoso
- **Captura 4.7:** Dashboard con estadísticas y gráficos

Subsección 4.1.6: Resumen de Pruebas Manuales
- **Tabla 4.1:** Checklist de pruebas manuales (5/5 exitosas)
- Tiempo total de ejecución
- Errores encontrados: 0
- Criterio de éxito: ✅ Exitoso (5/5 funciones pasan)

**4.2 Pruebas Automatizadas (2 páginas)**

Introducción a las pruebas automatizadas:
- Framework utilizado: Vitest + React Testing Library
- Ventajas de las pruebas automatizadas
- 3 suites de pruebas implementadas

Subsección 4.2.1: Configuración de Entorno de Pruebas
- Instalación de dependencias (vitest, @testing-library/react, etc.)
- Configuración de vitest.config.ts
- Setup de testing (src/tests/setup.ts)
- **Código 4.1:** Configuración de Vitest (fragmento)

Subsección 4.2.2: Prueba Automatizada 1 - Componentes UI
- Archivo: `src/tests/components/Button.test.tsx`
- Objetivo: Verificar componentes de UI
- Tests implementados:
  1. Renderiza con texto correcto
  2. Ejecuta onClick cuando se hace clic
  3. Aplica variantes correctamente
  4. Se puede deshabilitar
- Resultado: ✅ 4/4 tests pasando
- **Código 4.2:** Fragmento de test de Button (código)
- **Captura 4.8:** Resultado de tests en terminal

Subsección 4.2.3: Prueba Automatizada 2 - Autenticación
- Archivo: `src/tests/integration/Auth.test.tsx`
- Objetivo: Verificar flujo de autenticación
- Tests implementados:
  1. Permite registro con credenciales válidas
  2. Muestra error para email inválido
  3. Login exitoso con credenciales correctas
  4. Muestra error para credenciales incorrectas
- Mock de Supabase implementado
- Resultado: ✅ 4/4 tests pasando
- **Código 4.3:** Fragmento de test de Auth (código)

Subsección 4.2.4: Prueba Automatizada 3 - Tablero Kanban
- Archivo: `src/tests/integration/Kanban.test.tsx`
- Objetivo: Verificar funcionalidad del Kanban
- Tests implementados:
  1. Renderiza todas las columnas
  2. Muestra tareas en columnas correctas
  3. Permite crear nuevas tareas
  4. Actualiza estado al arrastrar
  5. Muestra contador de tareas
- Resultado: ✅ 5/5 tests pasando
- **Código 4.4:** Fragmento de test de Kanban (código)
- **Captura 4.9:** Resultado de todos los tests pasando

Subsección 4.2.5: Resumen de Pruebas Automatizadas
- **Tabla 4.2:** Resumen de pruebas automatizadas
  * Test Files: 3 passed
  * Tests: 13 passed
  * Duration: 1.2s
- Comparación con pruebas manuales (13 tests en 1.2s vs 15 min manual)
- Beneficios: Rapidez, consistencia, regresión, CI/CD

### Capturas de pantalla a incluir:

10. **Captura 4.1-4.7:** Screenshots de cada paso de pruebas manuales
11. **Captura 4.8:** Terminal mostrando tests de Button pasando
12. **Captura 4.9:** Terminal mostrando todos los 13 tests pasando
13. **Captura 4.10:** Reporte de cobertura de código (si se generó)

---

## 5. Metodología Scrum (6-8 páginas)

### Qué incluir:

**5.1 Equipo Scrum (1 página)**

- Descripción de roles Scrum
- **Tabla 5.1:** Equipo Scrum completo (7 personas)
  * Product Owner: [Tu Nombre]
  * Scrum Master: Ana López
  * Development Team: 5 miembros
- Responsabilidades de cada rol
- Capacidad total del equipo: 280 horas/sprint

**5.2 Product Backlog y Planificación de Sprints (3-4 páginas)**

Subsección 5.2.1: Definición de Terminado (DoD)
- 10 criterios de aceptación para considerar una historia "Terminada"
- Importancia del DoD en Scrum

Subsección 5.2.2: Épicas del Proyecto
- Épica 1: Modernización del Dashboard
- Épica 2: Optimización del Tablero Kanban
- Épica 3: Mejora de Navegación y Responsividad
- Épica 4: Sistema de Notificaciones en Tiempo Real

Subsección 5.2.3: Product Backlog Completo
- **Tabla 5.2:** Product Backlog (17 historias de usuario)
  * ID, Historia de Usuario, Prioridad (MoSCoW), Estimación, Épica, Sprint
- Priorización:
  * Must Have: 73 Story Points
  * Should Have: 60 Story Points
  * Could Have: 21 Story Points
- Total: 147 Story Points estimados

Subsección 5.2.4: Sprint 1 - Fundamentos de Mejora UI/UX
- Fecha: 03-17 de febrero de 2026
- Objetivo del Sprint
- **Tabla 5.3:** Sprint 1 Backlog (5 historias, 39 Story Points)
- Daily Standups:
  * Ejemplo de Daily Standup #5 (tabla con ¿Qué hice? ¿Qué haré? ¿Impedimentos?)
- Sprint Review:
  * 5/5 historias aceptadas
  * Feedback de stakeholders
  * **Captura 5.1:** Screenshot de dashboard mejorado
- Sprint Retrospective:
  * ¿Qué salió bien? (5 puntos)
  * ¿Qué mejorar? (4 puntos)
  * Acciones de mejora (4 acciones concretas)
  * Moral del equipo: 9/10

Subsección 5.2.5: Sprint 2 - Funcionalidades Avanzadas
- Fecha: 18 feb - 03 mar de 2026
- Objetivo del Sprint
- **Tabla 5.4:** Sprint 2 Backlog (6 historias, 55 Story Points)
- Impedimentos reportados y resolución
- Sprint Review: 6/6 historias completadas
- Retrospectiva: Mejoras implementadas
- Velocidad: 55 Story Points

Subsección 5.2.6: Sprint 3 - Funcionalidades Premium
- Fecha: 04-17 de marzo de 2026
- Objetivo del Sprint
- **Tabla 5.5:** Sprint 3 Backlog (6 historias, 55 Story Points)
- Sin impedimentos críticos
- Sprint Review: 6/6 historias completadas
- Retrospectiva final del proyecto
- **Captura 5.2:** Sistema de notificaciones en tiempo real

**5.3 Resultados del Proyecto (2-3 páginas)**

Subsección 5.3.1: Métricas del Proyecto
- **Gráfica 5.1:** Burndown Chart del proyecto (INSERTAR GRÁFICA)
- **Gráfica 5.2:** Velocidad por Sprint (39 → 55 → 55)
- Velocidad promedio: 49.67 Story Points
- **Tabla 5.6:** Resumen de historias completadas
  * Must Have: 10/10 (100%) ✅
  * Should Have: 7/9 (78%) ✅
  * Could Have: 0/3 (0%)
  * Total: 17/22 (77%) ✅

Subsección 5.3.2: Entregables del Proyecto
- Código fuente (17 historias implementadas)
- Documentación completa
- Diseño (25+ componentes mejorados)
- Calidad (0 bugs críticos, Lighthouse >90, WCAG 2.1 AA)

Subsección 5.3.3: Retrospectiva del Proyecto
- Éxitos del proyecto (5 puntos principales)
- Desafíos enfrentados (3 desafíos con soluciones)
- **Tabla 5.7:** Desafíos y soluciones
- Recomendaciones para futuros proyectos (5 recomendaciones)

Subsección 5.3.4: Lecciones Aprendidas
- Pair programming acelera desarrollo
- Testing temprano ahorra tiempo
- Documentación continua es más efectiva
- Retrospectivas honestas mejoran al equipo
- Scrum funciona excelentemente para proyectos de esta naturaleza

### Capturas de pantalla a incluir:

14. **Captura 5.1:** Dashboard con gráficos interactivos implementados
15. **Captura 5.2:** Sistema de notificaciones funcionando
16. **Captura 5.3:** Tablero Kanban con filtros
17. **Captura 5.4:** Aplicación en modo móvil
18. **Gráfica 5.1:** Burndown chart (crear con Excel/Google Sheets)
19. **Gráfica 5.2:** Velocidad por sprint (gráfica de barras)

---

## 6. Sistema de Control de Versiones con Git (4-6 páginas)

### Qué incluir:

**6.1 Creación del Repositorio (1 página)**

- Inicialización local del repositorio
- Comandos ejecutados:
  * `git init`
  * `git config`
- Archivos iniciales:
  * README.md
  * .gitignore
- Primer commit
- **Código 6.1:** Comandos de inicialización

**6.2 Estructura de Ramas y Git Flow (2-3 páginas)**

Subsección 6.2.1: Flujo de Git Flow Implementado
- Descripción de Git Flow
- Ramas principales:
  * main: Producción
  * develop: Desarrollo
- Ramas de soporte:
  * feature/*: Nuevas funcionalidades
  * bugfix/*: Corrección de bugs
  * release/*: Preparación de versiones
  * hotfix/*: Parches urgentes
- **Figura 6.1:** Diagrama de flujo de Git Flow (INSERTAR DIAGRAMA)

Subsección 6.2.2: Creación de Ramas de Feature
- feature/dashboard-improvements
- feature/kanban-filters
- feature/notifications
- Comandos utilizados
- **Captura 6.1:** `git branch -a` mostrando todas las ramas
- **Código 6.2:** Ejemplo de commit de feature

Subsección 6.2.3: Merge de Features a Develop
- Proceso de merge
- Uso de `--no-ff` para preservar historial
- **Captura 6.2:** `git log --graph` mostrando historial
- Resolución de conflictos (si hubo)

Subsección 6.2.4: Ramas de Release y Tags
- Creación de release/v2.0
- Actualización de package.json (versión 2.0.0)
- Creación de CHANGELOG.md
- Merge a main y develop
- Creación de tag v2.0.0
- **Código 6.3:** Comando de creación de tag anotado
- **Captura 6.3:** `git tag -l` mostrando tags

Subsección 6.2.5: Hotfix (Parche Urgente)
- Escenario: Parche de seguridad crítico
- Creación de hotfix/critical-security-patch
- Merge a main y develop
- Tag v2.0.1
- Proceso completo

**6.3 Repositorio Remoto en GitHub (1 página)**

- Creación del repositorio en GitHub
- **Captura 6.4:** Repositorio en GitHub (página principal)
- Comandos de push:
  * `git remote add origin`
  * `git push -u origin main`
  * `git push origin --tags`
- Estructura del repositorio
- **Captura 6.5:** Estructura de carpetas en GitHub

**6.4 Recuperación de Versiones Anteriores (1 página)**

- Escenarios de recuperación:
  * Ver historial de un archivo específico
  * Restaurar archivo a versión anterior
  * Revertir commit (git revert)
  * Crear rama desde versión anterior
- Comandos utilizados
- **Código 6.4:** Ejemplo de git revert
- **Captura 6.6:** `git log` mostrando commit revertido

**6.5 Convenciones de Commits (1 página)**

- Conventional Commits implementado
- Formato: `<type>(<scope>): <subject>`
- **Tabla 6.1:** Tipos de commits (feat, fix, docs, style, etc.)
- Ejemplos de buenos commits:
  * Feature: `feat(notifications): Implement real-time push notifications`
  * Bugfix: `fix(kanban): Prevent task duplication on drag`
  * Docs: `docs(api): Add JSDoc comments`
- **Captura 6.7:** `git log --oneline` mostrando commits con convención

**6.6 Resumen de Comandos Git (media página)**

- **Tabla 6.2:** Comandos Git más utilizados (20 comandos)
- Alias configurados
- Flujo de trabajo diario

### Capturas de pantalla a incluir:

20. **Captura 6.1:** Terminal con `git branch -a`
21. **Captura 6.2:** Terminal con `git log --graph --oneline --all`
22. **Captura 6.3:** Terminal con `git tag -l`
23. **Captura 6.4:** Página principal del repositorio en GitHub
24. **Captura 6.5:** Estructura de carpetas en GitHub
25. **Captura 6.6:** Terminal mostrando git revert
26. **Captura 6.7:** Terminal con git log mostrando Conventional Commits
27. **Captura 6.8:** GitHub mostrando commits y contributors
28. **Diagrama 6.1:** Diagrama de Git Flow (crear con draw.io o similar)

---

## 7. Conclusiones (1-2 páginas)

### Qué incluir:

```
7.1 Resumen de Actividades Realizadas
- Hardware seleccionado: Dell PowerEdge R450
  * Justificación completa de especificaciones
  * Licitación con 3 proveedores
- Monitoreo implementado: Prometheus, Netdata, Uptime Kuma
  * 7 capas de seguridad configuradas
- Pruebas ejecutadas:
  * 5 pruebas manuales (100% exitosas)
  * 13 pruebas automatizadas (100% pasando)
- Metodología Scrum:
  * 3 sprints completados
  * 17 historias de usuario implementadas
  * Velocidad promedio: 49.67 Story Points
- Control de versiones:
  * Git Flow implementado
  * Repositorio público en GitHub
  * Conventional Commits aplicados

7.2 Objetivos Cumplidos
- ✅ Selección adecuada de hardware con justificación técnica
- ✅ Implementación de herramientas de monitoreo robustas
- ✅ Configuración de seguridad en múltiples capas
- ✅ Ejecución exitosa de pruebas manuales y automatizadas
- ✅ Aplicación efectiva de metodología Scrum
- ✅ Control de versiones completo con Git

7.3 Aprendizajes Clave
- Importancia de la planificación en la selección de hardware
- Monitoreo proactivo evita problemas en producción
- Pruebas automatizadas ahorran tiempo y garantizan calidad
- Scrum mejora la colaboración y entrega continua de valor
- Git Flow proporciona estructura y trazabilidad

7.4 Aplicabilidad Profesional
- Habilidades adquiridas aplicables a entornos empresariales reales
- Capacidad demostrada para gestionar servidores y proyectos
- Preparación para roles de DevOps, SRE, o Project Manager
- Conocimiento de mejores prácticas de la industria

7.5 Trabajo Futuro
- Migración a cloud (AWS/Azure/GCP)
- Implementación de Kubernetes para orquestación
- Mejora continua con feedback de usuarios
- Expansión del Product Backlog para v3.0
```

---

## 8. Referencias (1 página)

### Formato APA 7ma edición:

```
[1] Dell Technologies. (2026). PowerEdge R450 Rack Server. 
    https://www.dell.com/en-us/work/shop/servers/poweredge-r450

[2] Ubuntu. (2024). Ubuntu Server 24.04 LTS Documentation. 
    https://ubuntu.com/server/docs

[3] Supabase. (2026). PostgreSQL Database Documentation. 
    https://supabase.com/docs

[4] Prometheus. (2026). Prometheus Monitoring Documentation. 
    https://prometheus.io/docs/

[5] Grafana Labs. (2026). Grafana Visualization Platform. 
    https://grafana.com/docs/

[6] Schwaber, K., & Sutherland, J. (2020). The Scrum Guide. 
    Scrum.org. https://scrumguides.org/

[7] Chacon, S., & Straub, B. (2014). Pro Git (2nd ed.). 
    Apress. https://git-scm.com/book/en/v2

[8] Let's Encrypt. (2026). Free SSL/TLS Certificates. 
    https://letsencrypt.org/docs/

[9] React Testing Library. (2026). Testing React Applications. 
    https://testing-library.com/react

[10] Conventional Commits. (2024). Conventional Commits Specification. 
     https://www.conventionalcommits.org/

[11] PostgreSQL Global Development Group. (2024). PostgreSQL 16 Documentation. 
     https://www.postgresql.org/docs/16/

[12] Vitest. (2026). Vitest Testing Framework. 
     https://vitest.dev/

[13] Mozilla Developer Network. (2026). Web Security Best Practices. 
     https://developer.mozilla.org/en-US/docs/Web/Security

[14] OWASP. (2025). OWASP Top Ten Security Risks. 
     https://owasp.org/www-project-top-ten/

[15] GitHub. (2026). Git Flow Workflow. 
     https://docs.github.com/en/get-started/quickstart/github-flow
```

---

## Anexos

### Anexo A: Código Fuente Destacado

```
A.1 Configuración de Vitest (vitest.config.ts)
A.2 Ejemplo de Prueba Unitaria (Button.test.tsx)
A.3 Configuración de Nginx con SSL
A.4 Script de Backup Automatizado
A.5 Configuración de Prometheus
```

### Anexo B: Diagramas Adicionales

```
B.1 Diagrama de Arquitectura Completa del Sistema
B.2 Diagrama de Flujo de Datos
B.3 Diagrama de Despliegue (Deployment Diagram)
B.4 Modelo Entidad-Relación de la Base de Datos
```

### Anexo C: Documentación Extendida

```
C.1 Manual de Usuario de la Aplicación
C.2 Guía de Instalación del Servidor
C.3 Procedimientos de Respaldo y Recuperación
C.4 Políticas de Seguridad
```

### Anexo D: Enlaces Importantes

```
D.1 Repositorio en GitHub: https://github.com/tu-usuario/techprojects-app
D.2 Video de Presentación: [Enlace a YouTube/Drive]
D.3 Documentación en Línea: [Si aplica]
D.4 Demo en Vivo: [Si está desplegada]
```

---

## Formato y Estilo del Documento

### Estilos de Texto

```
Título del Reporte: Arial 18pt, Negrita, Centrado
Títulos de Capítulo (1, 2, 3...): Arial 16pt, Negrita, Azul oscuro
Títulos de Sección (1.1, 2.1...): Arial 14pt, Negrita
Títulos de Subsección (1.1.1...): Arial 12pt, Negrita
Texto Normal: Arial 12pt, Interlineado 1.5
Código: Courier New 10pt, Fondo gris claro
Tablas: Arial 11pt, Bordes simples
Figuras: Centradas, con pie de figura Arial 10pt Itálica
```

### Numeración

- Páginas: Número en pie de página, centrado
- Capítulos: Numeración arábiga (1, 2, 3...)
- Secciones: Numeración decimal (1.1, 1.2, 2.1...)
- Tablas: Tabla X.Y (X = capítulo, Y = número de tabla)
- Figuras: Figura X.Y
- Código: Código X.Y
- Capturas: Captura X.Y

### Tablas

- Título encima de la tabla
- Bordes simples, sin líneas verticales internas
- Fila de encabezado con fondo gris claro
- Texto centrado en encabezados, alineado a la izquierda en celdas

### Figuras y Capturas

- Centradas en la página
- Pie de figura debajo de la imagen
- Formato: "Figura X.Y: Descripción de la figura"
- Resolución mínima: 1280×720 para capturas de pantalla
- Si es necesario, recortar para mostrar solo lo relevante

### Código

- Fuente monoespaciada (Courier New 10pt)
- Fondo gris claro (#F5F5F5)
- Bordes con línea fina
- Números de línea opcionales pero recomendados
- Sintaxis destacada si es posible

---

## Checklist Final del Reporte

### Contenido

- [ ] Portada con toda la información requerida
- [ ] Índice generado automáticamente
- [ ] Introducción clara y concisa
- [ ] Los 6 capítulos principales completos
- [ ] Conclusiones resumiendo todo el trabajo
- [ ] Referencias en formato APA
- [ ] Anexos con información relevante

### Elementos Visuales

- [ ] Mínimo 28 capturas de pantalla incluidas
- [ ] Todas las capturas con pie de figura
- [ ] Tablas numeradas y referenciadas en el texto
- [ ] Gráficas creadas (burndown, velocidad, proveedores)
- [ ] Diagramas de arquitectura y flujo de Git

### Código

- [ ] Fragmentos de código incluidos donde sea relevante
- [ ] Código formateado correctamente
- [ ] Comandos de terminal mostrados con salida esperada
- [ ] Scripts importantes en anexos

### Enlaces

- [ ] Enlace al repositorio de GitHub incluido
- [ ] Enlace al video de presentación incluido
- [ ] Todos los enlaces verificados y funcionando

### Formato

- [ ] Fuente Arial 12pt, interlineado 1.5
- [ ] Márgenes de 2.5 cm
- [ ] Páginas numeradas
- [ ] Títulos con estilos consistentes
- [ ] Sin errores de ortografía (usar corrector)

### Calidad

- [ ] Todas las secciones completas (no hay "Lorem ipsum")
- [ ] Justificaciones técnicas sólidas
- [ ] Datos reales y verificables
- [ ] Capturas de pantalla legibles
- [ ] Documento revisado al menos 2 veces

---

## Tiempo Estimado de Elaboración

| Sección | Tiempo Estimado |
|---------|-----------------|
| Portada e índice | 30 minutos |
| Introducción | 1 hora |
| Capítulo 2 (Hardware) | 3 horas |
| Capítulo 3 (Monitoreo/Seguridad) | 3 horas |
| Capítulo 4 (Pruebas) | 2 horas |
| Capítulo 5 (Scrum) | 3 horas |
| Capítulo 6 (Git) | 2 horas |
| Conclusiones | 1 hora |
| Referencias y Anexos | 1 hora |
| Capturas de pantalla | 2 horas |
| Gráficas y diagramas | 2 horas |
| Revisión y formato final | 2 horas |
| **TOTAL** | **22-24 horas** |

**Recomendación:** Distribuir en 3-4 días de trabajo, 6 horas por día.

---

## Tips para un Reporte Excelente

### Contenido

✅ **Hacer:**
- Ser específico y técnico (incluir números, versiones, especificaciones)
- Justificar todas las decisiones
- Incluir datos reales de tu proyecto
- Referenciar fuentes confiables
- Usar terminología correcta

❌ **Evitar:**
- Texto genérico sin profundidad
- Afirmaciones sin respaldo
- Copiar-pegar sin adaptar
- Información desactualizada
- Errores técnicos

### Visuales

✅ **Hacer:**
- Capturas de pantalla claras y legibles
- Recortar para mostrar solo lo relevante
- Agregar flechas o resaltados si es necesario
- Pies de figura descriptivos
- Gráficas profesionales

❌ **Evitar:**
- Capturas borrosas o pixeladas
- Imágenes demasiado pequeñas
- Pantallas completas con información irrelevante
- Capturas con información sensible

### Estilo

✅ **Hacer:**
- Redacción en tercera persona o primera persona plural
- Párrafos de 4-6 líneas máximo
- Uso de listas y bullets para claridad
- Transiciones entre secciones
- Lenguaje formal pero accesible

❌ **Evitar:**
- Lenguaje demasiado coloquial
- Párrafos de una sola oración
- Texto en mayúsculas (excepto acrónimos)
- Emojis (excepto en tablas si mejora claridad)
- Errores de ortografía y gramática

---

¡Éxito con tu reporte! 📄✅

**Documento elaborado por:**  
Equipo de Documentación  
TechProjects Management Solutions  
Fecha: 02 de febrero de 2026
