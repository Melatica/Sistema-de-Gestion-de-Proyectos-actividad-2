# Guía Completa para Capturas de Pantalla

## 📸 TODAS LAS CAPTURAS NECESARIAS PARA EL REPORTE

Esta guía te indica exactamente qué capturar, cómo hacerlo, y dónde usar cada captura en tu reporte de Word.

---

## 🛠️ Herramientas para Capturar Pantalla

### Windows
- **Windows + Shift + S:** Captura de área seleccionada (Recomendado)
- **Snipping Tool:** Herramienta nativa
- **Lightshot:** https://app.prnt.sc/ (Gratuito, muy bueno)

### Mac
- **Cmd + Shift + 4:** Captura de área seleccionada
- **Cmd + Shift + 3:** Captura de pantalla completa
- **Cmd + Shift + 5:** Herramienta de captura

### Linux
- **Flameshot:** `sudo apt install flameshot` (Recomendado)
- **Shutter:** Captura con anotaciones
- **Print Screen:** Captura nativa

---

## 📋 CAPTURAS REQUERIDAS POR SECCIÓN

### SECCIÓN 1: HARDWARE Y LICITACIÓN (Capítulo 2 del Reporte)

#### Captura 1.1: Diagrama de Topología de Red
**Qué capturar:**
- El diagrama que está en el documento `1_SELECCION_HARDWARE.md`
- Sección "Topología de Red"

**Cómo hacerlo:**
1. Abre `docs/1_SELECCION_HARDWARE.md` en Visual Studio Code o cualquier editor
2. Scroll hasta la sección "Diagrama de Red"
3. Captura el diagrama ASCII completo

**Alternativa:** Crear diagrama visual con:
- **Draw.io:** https://app.diagrams.net/ (Gratis, online)
- **Lucidchart:** https://www.lucidchart.com/
- **Microsoft Visio:** Si tienes licencia

**Elementos del diagrama:**
```
- Internet
- Firewall
- Router Principal
- Switch Core y Switch Backup
- 3 VLANs (Servidores, Aplicaciones, Administración)
- Servidores en cada VLAN
```

**Guardar como:** `Captura_1.1_Topologia_Red.png`  
**Usar en reporte:** Capítulo 2, Sección 2.2.3 (Topología de Red)

---

#### Captura 1.2: Tabla Comparativa de Proveedores
**Qué capturar:**
- La tabla de comparación de los 3 proveedores
- Del documento `2_LICITACION_PROVEEDORES.md`

**Cómo hacerlo:**
1. Abre `docs/2_LICITACION_PROVEEDORES.md`
2. Scroll hasta "Tabla Comparativa Resumida"
3. Captura la tabla completa con las puntuaciones

**Tip:** Si se ve mejor, puedes recrear la tabla en Excel y capturarla:

| Criterio | Dell | HPE | Supermicro |
|----------|------|-----|------------|
| Núcleos CPU | 32 | 24 | 32 |
| RAM | 64 GB DDR4 | 64 GB DDR5 | 128 GB DDR4 |
| Precio | $7,800 | $6,800 | $7,950 |
| Puntuación | **9.2/10** | 7.7/10 | 8.7/10 |

**Guardar como:** `Captura_1.2_Comparativa_Proveedores.png`  
**Usar en reporte:** Capítulo 2, Sección 2.3 (Licitación)

---

#### Captura 1.3: Gráfica de Puntuación de Proveedores
**Qué capturar:**
- Gráfica de barras con puntuación

**Cómo crearla:**
1. Abre Excel o Google Sheets
2. Crea tabla:
   ```
   Proveedor    | Puntuación
   Dell         | 9.2
   Supermicro   | 8.7
   HPE          | 7.7
   ```
3. Selecciona datos → Insertar → Gráfico de barras horizontales
4. Título: "Puntuación de Proveedores"
5. Agrega etiquetas de datos
6. Colorea la barra de Dell en verde (ganador)

**Guardar como:** `Captura_1.3_Grafica_Proveedores.png`  
**Usar en reporte:** Capítulo 2, Sección 2.3 (Licitación)

---

### SECCIÓN 2: MONITOREO Y SEGURIDAD (Capítulo 3 del Reporte)

#### Captura 2.1: Dashboard de Grafana (SIMULADA)
**Qué capturar:**
- Dashboard de ejemplo de Grafana

**Cómo obtenerla:**
1. Ve a https://play.grafana.org/
2. Login como "viewer" (sin password)
3. Explora → Dashboards → "Node Exporter Full"
4. Captura el dashboard mostrando gráficos de CPU, RAM, Disco

**Alternativa:** Buscar en Google Images "Grafana dashboard system monitoring"

**Guardar como:** `Captura_2.1_Dashboard_Grafana.png`  
**Usar en reporte:** Capítulo 3, Sección 3.1.1 (Prometheus + Grafana)

---

#### Captura 2.2: Netdata Dashboard (SIMULADA)
**Qué capturar:**
- Dashboard de Netdata

**Cómo obtenerla:**
1. Ve a https://www.netdata.cloud/
2. Click en "Try the Demo"
3. O busca "Netdata dashboard screenshot" en Google Images
4. Captura mostrando métricas en tiempo real

**Guardar como:** `Captura_2.2_Dashboard_Netdata.png`  
**Usar en reporte:** Capítulo 3, Sección 3.1.2 (Netdata)

---

#### Captura 2.3: Uptime Kuma (SIMULADA)
**Qué capturar:**
- Status page de Uptime Kuma

**Cómo obtenerla:**
1. Busca "Uptime Kuma demo" en Google
2. O usa https://demo.uptime.kuma.pet/
3. Captura mostrando servicios monitoreados (verde = UP)

**Guardar como:** `Captura_2.3_Uptime_Kuma.png`  
**Usar en reporte:** Capítulo 3, Sección 3.1.3 (Uptime Kuma)

---

#### Captura 2.4: Diagrama de Arquitectura de Monitoreo
**Qué capturar:**
- Diagrama del documento `3_MONITOREO_Y_SEGURIDAD.md`

**Cómo hacerlo:**
1. Abre `docs/3_MONITOREO_Y_SEGURIDAD.md`
2. Busca "Arquitectura de Monitoreo Completa"
3. Captura el diagrama ASCII

**Alternativa:** Crear diagrama visual con Draw.io mostrando:
```
Usuarios → Nginx → Node.js API → PostgreSQL
                ↓          ↓           ↓
         Uptime Kuma  Prometheus  postgres_exporter
                         ↓
                     Grafana (Visualización)
```

**Guardar como:** `Captura_2.4_Arquitectura_Monitoreo.png`  
**Usar en reporte:** Capítulo 3, Sección 3.1.4 (Arquitectura)

---

#### Captura 2.5: Configuración de Nginx con SSL
**Qué capturar:**
- Fragmento de configuración de Nginx del documento

**Cómo hacerlo:**
1. Abre `docs/3_MONITOREO_Y_SEGURIDAD.md`
2. Busca "Configuración Nginx con SSL/TLS"
3. Captura el bloque de código de configuración

**Guardar como:** `Captura_2.5_Nginx_SSL.png`  
**Usar en reporte:** Capítulo 3, Sección 3.2.3 (SSL/TLS)

---

#### Captura 2.6: SSLLabs A+ Rating (SIMULADA)
**Qué capturar:**
- Resultado de prueba de SSLLabs

**Cómo obtenerla:**
1. Ve a https://www.ssllabs.com/ssltest/
2. Prueba un sitio conocido (ejemplo: github.com)
3. Captura el resultado mostrando calificación A o A+

**Alternativa:** Buscar "SSLLabs A+ rating screenshot" en Google Images

**Guardar como:** `Captura_2.6_SSLLabs_Rating.png`  
**Usar en reporte:** Capítulo 3, Sección 3.2.3 (SSL/TLS)

---

### SECCIÓN 3: PRUEBAS DEL SISTEMA (Capítulo 4 del Reporte)

#### Captura 3.1: Pantalla de Login de la Aplicación
**Qué capturar:**
- Tu aplicación ejecutándose mostrando login

**Cómo hacerlo:**
1. Ejecuta tu aplicación: `npm run dev`
2. Abre http://localhost:5173
3. Navega a la página de login
4. Captura la pantalla mostrando el formulario de login

**Guardar como:** `Captura_3.1_Login_App.png`  
**Usar en reporte:** Capítulo 4, Sección 4.1.1 (Prueba Manual - Paso 1)

---

#### Captura 3.2: Formulario de Creación de Proyecto
**Qué capturar:**
- Modal o página de crear proyecto

**Cómo hacerlo:**
1. Inicia sesión en tu aplicación
2. Ve a la sección de Proyectos
3. Click en "Nuevo Proyecto" o "+New Project"
4. Captura el modal/formulario abierto

**Guardar como:** `Captura_3.2_Crear_Proyecto.png`  
**Usar en reporte:** Capítulo 4, Sección 4.1.2 (Prueba Manual - Paso 2)

---

#### Captura 3.3: Lista de Proyectos
**Qué capturar:**
- Vista de proyectos mostrando proyectos creados

**Cómo hacerlo:**
1. Después de crear un proyecto
2. Captura la vista de lista de proyectos
3. Asegúrate de que se vea el proyecto recién creado

**Guardar como:** `Captura_3.3_Lista_Proyectos.png`  
**Usar en reporte:** Capítulo 4, Sección 4.1.2 (Prueba Manual - Paso 2)

---

#### Captura 3.4: Tablero Kanban con Tareas
**Qué capturar:**
- Tablero Kanban mostrando las 4 columnas y tareas

**Cómo hacerlo:**
1. Entra a un proyecto
2. Navega al tablero Kanban
3. Asegúrate de tener tareas en diferentes columnas
4. Captura mostrando: Pendiente, En Progreso, En Revisión, Completado

**Tip:** Si no tienes tareas, crea 3-4 tareas de prueba antes de capturar

**Guardar como:** `Captura_3.4_Kanban_Board.png`  
**Usar en reporte:** Capítulo 4, Sección 4.1.3 (Prueba Manual - Paso 3)

---

#### Captura 3.5: Modal de Edición de Tarea
**Qué capturar:**
- Modal mostrando detalles de una tarea

**Cómo hacerlo:**
1. En el Kanban, haz click en una tarea
2. Captura el modal/sidebar mostrando:
   - Título de la tarea
   - Descripción
   - Prioridad
   - Estado
   - Usuario asignado

**Guardar como:** `Captura_3.5_Editar_Tarea.png`  
**Usar en reporte:** Capítulo 4, Sección 4.1.3 (Prueba Manual - Paso 3)

---

#### Captura 3.6: Lista de Miembros del Equipo
**Qué capturar:**
- Página de Team mostrando miembros

**Cómo hacerlo:**
1. Navega a la sección "Team" o "Equipo"
2. Captura mostrando lista de miembros
3. Asegúrate de tener al menos 2-3 miembros visibles

**Guardar como:** `Captura_3.6_Team_Members.png`  
**Usar en reporte:** Capítulo 4, Sección 4.1.4 (Prueba Manual - Paso 4)

---

#### Captura 3.7: Dashboard con Estadísticas
**Qué capturar:**
- Dashboard mostrando gráficos y estadísticas

**Cómo hacerlo:**
1. Navega al Dashboard principal
2. Captura mostrando:
   - Cards de estadísticas (proyectos, tareas, miembros)
   - Gráficos (si los implementaste)
   - Actividad reciente

**Guardar como:** `Captura_3.7_Dashboard_Stats.png`  
**Usar en reporte:** Capítulo 4, Sección 4.1.5 (Prueba Manual - Paso 5)

---

#### Captura 3.8: Terminal - Ejecutando Tests
**Qué capturar:**
- Terminal mostrando `npm run test:run`

**Cómo hacerlo:**
1. Abre terminal
2. Ejecuta: `npm run test:run`
3. Espera a que terminen las pruebas
4. Captura mostrando:
   - ✓ Tests pasando
   - Test Files: 3 passed
   - Tests: 13 passed
   - Duration

**Guardar como:** `Captura_3.8_Tests_Running.png`  
**Usar en reporte:** Capítulo 4, Sección 4.2.4 (Prueba Automatizada 3)

---

#### Captura 3.9: Tests Completados
**Qué capturar:**
- Resultado final de todas las pruebas

**Cómo hacerlo:**
1. Después de ejecutar `npm run test:run`
2. Captura el resumen final mostrando:
   - All tests passed
   - Total de tests: 13
   - Duración total

**Guardar como:** `Captura_3.9_All_Tests_Passed.png`  
**Usar en reporte:** Capítulo 4, Sección 4.2.5 (Resumen Pruebas)

---

#### Captura 3.10: Cobertura de Tests (Opcional)
**Qué capturar:**
- Reporte de cobertura

**Cómo hacerlo:**
1. Ejecuta: `npm run test:coverage`
2. Captura la tabla mostrando porcentajes de cobertura
3. Statements, Branches, Functions, Lines

**Guardar como:** `Captura_3.10_Test_Coverage.png`  
**Usar en reporte:** Capítulo 4, Sección 4.2.5 (Resumen Pruebas)

---

### SECCIÓN 4: METODOLOGÍA SCRUM (Capítulo 5 del Reporte)

#### Captura 4.1: Dashboard con Gráficos Implementados
**Qué capturar:**
- Dashboard mostrando los gráficos del Sprint 1

**Cómo hacerlo:**
1. Si implementaste gráficos, captura el dashboard
2. Muestra gráfico de "Proyectos por Estado"
3. Muestra gráfico de "Tareas por Prioridad"

**Alternativa:** Si no implementaste gráficos aún, captura mockup o diseño

**Guardar como:** `Captura_4.1_Dashboard_Graphs.png`  
**Usar en reporte:** Capítulo 5, Sección 5.2.4 (Sprint 1 Review)

---

#### Captura 4.2: Sistema de Notificaciones (Mockup)
**Qué capturar:**
- Componente de notificaciones

**Cómo hacerlo:**
1. Si implementaste notificaciones, captura el centro de notificaciones
2. Si no, busca "notification center UI design" en Dribbble o Behance
3. Usa como referencia visual

**Guardar como:** `Captura_4.2_Notifications.png`  
**Usar en reporte:** Capítulo 5, Sección 5.2.6 (Sprint 3 Review)

---

#### Captura 4.3: Tablero Kanban con Filtros
**Qué capturar:**
- Kanban mostrando componente de filtros

**Cómo hacerlo:**
1. Si implementaste filtros, captura el componente
2. Muestra dropdowns de filtrado
3. Si no, captura diseño conceptual

**Guardar como:** `Captura_4.3_Kanban_Filters.png`  
**Usar en reporte:** Capítulo 5, Sección 5.2.5 (Sprint 2 Review)

---

#### Captura 4.4: Aplicación en Modo Móvil
**Qué capturar:**
- Aplicación en responsive móvil

**Cómo hacerlo:**
1. Abre tu aplicación
2. Presiona F12 (DevTools)
3. Click en icono de "Toggle device toolbar" (Ctrl+Shift+M)
4. Selecciona "iPhone 12 Pro" o similar
5. Captura mostrando responsive design

**Guardar como:** `Captura_4.4_Mobile_Responsive.png`  
**Usar en reporte:** Capítulo 5, Sección 5.2.5 (Sprint 2 - US-12)

---

#### Captura 4.5: Gráfica de Burndown Chart
**Qué capturar:**
- Gráfica de burndown del proyecto

**Cómo crearla:**
1. Abre Excel o Google Sheets
2. Crea tabla basada en documento `5_METODOLOGIA_SCRUM.md`
3. Datos del burndown chart (Story Points vs Días)
4. Crea gráfico de líneas
5. Dos líneas: Ideal vs Real

**Datos:**
```
Día   | Ideal | Real
S1-D1 | 147   | 147
S1-D5 | 129   | 130
S1-D10| 108   | 108
S2-D1 | 92    | 92
S2-D5 | 74    | 75
S2-D10| 53    | 53
S3-D1 | 37    | 37
S3-D5 | 19    | 20
S3-D10| 0     | 0
```

**Guardar como:** `Captura_4.5_Burndown_Chart.png`  
**Usar en reporte:** Capítulo 5, Sección 5.3.1 (Métricas)

---

#### Captura 4.6: Gráfica de Velocidad por Sprint
**Qué capturar:**
- Gráfica de barras con velocidad

**Cómo crearla:**
1. Excel o Google Sheets
2. Datos:
   ```
   Sprint | Story Points
   1      | 39
   2      | 55
   3      | 55
   ```
3. Gráfico de barras vertical
4. Agrega línea promedio (49.67)

**Guardar como:** `Captura_4.6_Velocity_Chart.png`  
**Usar en reporte:** Capítulo 5, Sección 5.3.1 (Métricas)

---

### SECCIÓN 5: GIT Y CONTROL DE VERSIONES (Capítulo 6 del Reporte)

#### Captura 5.1: Terminal - git branch -a
**Qué capturar:**
- Terminal mostrando todas las ramas

**Cómo hacerlo:**
1. Abre terminal en tu proyecto
2. Ejecuta: `git branch -a`
3. Captura mostrando:
   - main
   - develop
   - feature/*
   - bugfix/*
   - release/*
   - hotfix/*
   - remotes/origin/*

**Guardar como:** `Captura_5.1_Git_Branches.png`  
**Usar en reporte:** Capítulo 6, Sección 6.2.2 (Creación de Ramas)

---

#### Captura 5.2: Terminal - git log --graph
**Qué capturar:**
- Historial gráfico de commits

**Cómo hacerlo:**
1. Ejecuta: `git log --graph --oneline --all --decorate -15`
2. Captura mostrando estructura de Git Flow
3. Debe verse merges, features, branches

**Guardar como:** `Captura_5.2_Git_Log_Graph.png`  
**Usar en reporte:** Capítulo 6, Sección 6.2.3 (Merge de Features)

---

#### Captura 5.3: Terminal - git tag -l
**Qué capturar:**
- Lista de tags

**Cómo hacerlo:**
1. Ejecuta: `git tag -l`
2. Captura mostrando:
   - v2.0.0
   - v2.0.1

**Guardar como:** `Captura_5.3_Git_Tags.png`  
**Usar en reporte:** Capítulo 6, Sección 6.2.4 (Release y Tags)

---

#### Captura 5.4: GitHub - Página Principal del Repo
**Qué capturar:**
- Página principal de tu repositorio en GitHub

**Cómo hacerlo:**
1. Abre tu repo en GitHub: `https://github.com/TU-USUARIO/techprojects-app`
2. Captura mostrando:
   - Nombre del repositorio
   - README.md visible
   - Número de commits
   - Ramas
   - Último commit

**Guardar como:** `Captura_5.4_GitHub_Repo_Main.png`  
**Usar en reporte:** Capítulo 6, Sección 6.3 (Repositorio Remoto)

---

#### Captura 5.5: GitHub - Pestaña de Branches
**Qué capturar:**
- Vista de todas las ramas en GitHub

**Cómo hacerlo:**
1. En tu repo de GitHub
2. Click en dropdown que dice "main" (arriba a la izquierda)
3. Click en "View all branches"
4. Captura mostrando todas las ramas

**Guardar como:** `Captura_5.5_GitHub_Branches.png`  
**Usar en reporte:** Capítulo 6, Sección 6.3 (Repositorio Remoto)

---

#### Captura 5.6: GitHub - Tags/Releases
**Qué capturar:**
- Sección de Releases con tags

**Cómo hacerlo:**
1. En tu repo de GitHub
2. Click en pestaña "Releases" (a la derecha)
3. Captura mostrando v2.0.0 y v2.0.1
4. Con descripciones de cada release

**Guardar como:** `Captura_5.6_GitHub_Releases.png`  
**Usar en reporte:** Capítulo 6, Sección 6.2.4 (Release y Tags)

---

#### Captura 5.7: GitHub - Network Graph
**Qué capturar:**
- Gráfico de red mostrando Git Flow visual

**Cómo hacerlo:**
1. En tu repo de GitHub
2. Insights → Network (o /network)
3. Captura mostrando:
   - Líneas de ramas (main, develop, features)
   - Merges visuales
   - Flujo de Git Flow

**Guardar como:** `Captura_5.7_GitHub_Network.png`  
**Usar en reporte:** Capítulo 6, Sección 6.2.1 (Git Flow)

---

#### Captura 5.8: Terminal - git diff --stat
**Qué capturar:**
- Diferencias entre versiones

**Cómo hacerlo:**
1. Ejecuta: `git diff v2.0.0..v2.0.1 --stat`
2. Captura mostrando archivos cambiados
3. Número de líneas agregadas/eliminadas

**Guardar como:** `Captura_5.8_Git_Diff_Stat.png`  
**Usar en reporte:** Capítulo 6, Sección 6.4 (Recuperación de Versiones)

---

#### Captura 5.9: Terminal - git show v2.0.0
**Qué capturar:**
- Detalles de un tag

**Cómo hacerlo:**
1. Ejecuta: `git show v2.0.0`
2. Captura mostrando:
   - Mensaje del tag
   - Autor
   - Fecha
   - Commit asociado

**Guardar como:** `Captura_5.9_Git_Show_Tag.png`  
**Usar en reporte:** Capítulo 6, Sección 6.2.4 (Release y Tags)

---

#### Captura 5.10: GitHub - Commits con Conventional Commits
**Qué capturar:**
- Lista de commits mostrando formato

**Cómo hacerlo:**
1. En GitHub, pestaña "Commits"
2. Captura mostrando commits con formato:
   - `feat(dashboard): ...`
   - `fix(kanban): ...`
   - `docs(readme): ...`

**Guardar como:** `Captura_5.10_GitHub_Commits.png`  
**Usar en reporte:** Capítulo 6, Sección 6.5 (Conventional Commits)

---

## 🎨 TIPS PARA CAPTURAS PROFESIONALES

### Calidad de Imagen
- ✅ Resolución mínima: 1280×720
- ✅ Formato: PNG (mejor calidad que JPG para capturas)
- ✅ No redimensionar después de capturar (pierde calidad)

### Limpieza
- ✅ Cierra tabs innecesarios del navegador
- ✅ Oculta información personal (emails, nombres reales si prefieres)
- ✅ Limpia el escritorio de iconos
- ✅ Usa tema claro (más legible en impresión)

### Visibilidad
- ✅ Aumenta tamaño de fuente en terminal si es muy pequeño
- ✅ Usa zoom si el texto es muy pequeño
- ✅ Asegúrate de que TODO el texto sea legible
- ✅ No captures ventanas cortadas

### Anotaciones (Opcional)
Puedes agregar anotaciones con:
- **Arrows (flechas):** Señalar elementos importantes
- **Boxes (cuadros):** Resaltar secciones
- **Text:** Agregar explicaciones breves

Herramientas:
- **Windows:** Snipping Tool tiene herramientas básicas
- **Mac:** Preview → Tools → Annotate
- **Online:** Photopea.com (como Photoshop gratis)

---

## 📁 ORGANIZACIÓN DE CAPTURAS

### Estructura de Carpetas Recomendada

```
techprojects-app/
├── capturas/
│   ├── 1_hardware/
│   │   ├── Captura_1.1_Topologia_Red.png
│   │   ├── Captura_1.2_Comparativa_Proveedores.png
│   │   └── Captura_1.3_Grafica_Proveedores.png
│   ├── 2_monitoreo/
│   │   ├── Captura_2.1_Dashboard_Grafana.png
│   │   ├── Captura_2.2_Dashboard_Netdata.png
│   │   ├── Captura_2.3_Uptime_Kuma.png
│   │   ├── Captura_2.4_Arquitectura_Monitoreo.png
│   │   ├── Captura_2.5_Nginx_SSL.png
│   │   └── Captura_2.6_SSLLabs_Rating.png
│   ├── 3_pruebas/
│   │   ├── Captura_3.1_Login_App.png
│   │   ├── Captura_3.2_Crear_Proyecto.png
│   │   ├── Captura_3.3_Lista_Proyectos.png
│   │   ├── Captura_3.4_Kanban_Board.png
│   │   ├── Captura_3.5_Editar_Tarea.png
│   │   ├── Captura_3.6_Team_Members.png
│   │   ├── Captura_3.7_Dashboard_Stats.png
│   │   ├── Captura_3.8_Tests_Running.png
│   │   ├── Captura_3.9_All_Tests_Passed.png
│   │   └── Captura_3.10_Test_Coverage.png
│   ├── 4_scrum/
│   │   ├── Captura_4.1_Dashboard_Graphs.png
│   │   ├── Captura_4.2_Notifications.png
│   │   ├── Captura_4.3_Kanban_Filters.png
│   │   ├── Captura_4.4_Mobile_Responsive.png
│   │   ├── Captura_4.5_Burndown_Chart.png
│   │   └── Captura_4.6_Velocity_Chart.png
│   └── 5_git/
│       ├── Captura_5.1_Git_Branches.png
│       ├── Captura_5.2_Git_Log_Graph.png
│       ├── Captura_5.3_Git_Tags.png
│       ├── Captura_5.4_GitHub_Repo_Main.png
│       ├── Captura_5.5_GitHub_Branches.png
│       ├── Captura_5.6_GitHub_Releases.png
│       ├── Captura_5.7_GitHub_Network.png
│       ├── Captura_5.8_Git_Diff_Stat.png
│       ├── Captura_5.9_Git_Show_Tag.png
│       └── Captura_5.10_GitHub_Commits.png
```

---

## ✅ CHECKLIST DE CAPTURAS

### Hardware y Licitación (3 capturas)
- [ ] Captura_1.1_Topologia_Red.png
- [ ] Captura_1.2_Comparativa_Proveedores.png
- [ ] Captura_1.3_Grafica_Proveedores.png

### Monitoreo y Seguridad (6 capturas)
- [ ] Captura_2.1_Dashboard_Grafana.png
- [ ] Captura_2.2_Dashboard_Netdata.png
- [ ] Captura_2.3_Uptime_Kuma.png
- [ ] Captura_2.4_Arquitectura_Monitoreo.png
- [ ] Captura_2.5_Nginx_SSL.png
- [ ] Captura_2.6_SSLLabs_Rating.png

### Pruebas del Sistema (10 capturas)
- [ ] Captura_3.1_Login_App.png
- [ ] Captura_3.2_Crear_Proyecto.png
- [ ] Captura_3.3_Lista_Proyectos.png
- [ ] Captura_3.4_Kanban_Board.png
- [ ] Captura_3.5_Editar_Tarea.png
- [ ] Captura_3.6_Team_Members.png
- [ ] Captura_3.7_Dashboard_Stats.png
- [ ] Captura_3.8_Tests_Running.png
- [ ] Captura_3.9_All_Tests_Passed.png
- [ ] Captura_3.10_Test_Coverage.png

### Metodología Scrum (6 capturas)
- [ ] Captura_4.1_Dashboard_Graphs.png
- [ ] Captura_4.2_Notifications.png
- [ ] Captura_4.3_Kanban_Filters.png
- [ ] Captura_4.4_Mobile_Responsive.png
- [ ] Captura_4.5_Burndown_Chart.png (crear en Excel)
- [ ] Captura_4.6_Velocity_Chart.png (crear en Excel)

### Git y Control de Versiones (10 capturas)
- [ ] Captura_5.1_Git_Branches.png
- [ ] Captura_5.2_Git_Log_Graph.png
- [ ] Captura_5.3_Git_Tags.png
- [ ] Captura_5.4_GitHub_Repo_Main.png
- [ ] Captura_5.5_GitHub_Branches.png
- [ ] Captura_5.6_GitHub_Releases.png
- [ ] Captura_5.7_GitHub_Network.png
- [ ] Captura_5.8_Git_Diff_Stat.png
- [ ] Captura_5.9_Git_Show_Tag.png
- [ ] Captura_5.10_GitHub_Commits.png

**TOTAL: 35 capturas**

---

## 🎬 CAPTURAS PARA EL VIDEO

Adicionalmente, para el video necesitarás grabar:

1. **Navegación completa de la aplicación** (login → dashboard → proyectos → kanban)
2. **Terminal ejecutando tests** (en vivo)
3. **Terminal con comandos Git** (git log --graph, git branch, etc.)
4. **GitHub abierto** mostrando el repositorio

---

¡Con esta guía tendrás todas las capturas necesarias para tu reporte y video!

**Documento elaborado por:**  
Equipo de Documentación  
Fecha: 02 de febrero de 2026
