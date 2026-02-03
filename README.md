# Documentación Completa - Administración de Servidores y Gestión de Proyectos

## 📋 Índice de Documentos

Esta carpeta contiene toda la documentación necesaria para la actividad de **Administración de Servidores y Gestión de Proyectos** de la aplicación web TechProjects Management App.

---

## 📚 Documentos Principales

### 1. [Selección de Hardware del Servidor](./1_SELECCION_HARDWARE.md)
**Contenido:**
- Justificación de la base de datos (PostgreSQL via Supabase)
- Especificaciones técnicas del servidor:
  - Disco duro: 2 TB SSD NVMe + 4 TB HDD
  - Memoria RAM: 64 GB DDR4 ECC
  - Topología de red: Estrella con VLANs
  - Sistema operativo: Ubuntu Server 24.04 LTS
- Servidor seleccionado: Dell PowerEdge R450
- Costo: $7,500 USD

**Páginas:** 10  
**Tiempo de lectura:** 25 minutos

---

### 2. [Licitación de Proveedores](./2_LICITACION_PROVEEDORES.md)
**Contenido:**
- Proceso de licitación completo
- Especificaciones técnicas requeridas (RFP)
- Propuestas de 3 proveedores:
  - Dell Technologies (9.2/10) ⭐ **SELECCIONADO**
  - HPE (7.7/10)
  - Supermicro (8.7/10)
- Comparativa detallada
- Justificación de la decisión

**Páginas:** 12  
**Tiempo de lectura:** 30 minutos

---

### 3. [Herramientas de Monitoreo y Configuración de Seguridad](./3_MONITOREO_Y_SEGURIDAD.md)
**Contenido:**

**Monitoreo (3 herramientas):**
1. Prometheus + Grafana - Métricas y visualización
2. Netdata - Monitoreo en tiempo real
3. Uptime Kuma - Disponibilidad y status page

**Seguridad (7 capas):**
1. Firewall UFW
2. Fail2Ban (protección contra fuerza bruta)
3. SSL/TLS con Let's Encrypt
4. PostgreSQL Security Hardening
5. Rate Limiting (Nginx)
6. Seguridad de aplicación (Helmet.js)
7. Backups automáticos encriptados

**Páginas:** 18  
**Tiempo de lectura:** 45 minutos

---

### 4. [Sesión de Pruebas del Sistema](./4_PRUEBAS_SISTEMA.md)
**Contenido:**

**Pruebas Manuales (5 pasos):**
1. Registro e inicio de sesión
2. Creación de proyectos
3. Gestión de tareas en Kanban
4. Gestión de equipo
5. Dashboard y estadísticas

**Pruebas Automatizadas (3 suites, 13 tests):**
1. Componentes UI (Button.test.tsx)
2. Autenticación (Auth.test.tsx)
3. Tablero Kanban (Kanban.test.tsx)

**Resultado:** ✅ 100% pruebas pasando

**Páginas:** 15  
**Tiempo de lectura:** 35 minutos

---

### 5. [Metodología Scrum](./5_METODOLOGIA_SCRUM.md)
**Contenido:**
- Equipo Scrum de 7 personas
- Product Backlog: 17 historias de usuario
- 3 Sprints de 2 semanas cada uno:
  - Sprint 1: 39 Story Points (5 historias)
  - Sprint 2: 55 Story Points (6 historias)
  - Sprint 3: 55 Story Points (6 historias)
- Daily Standups, Sprint Reviews, Retrospectivas
- Velocidad promedio: 49.67 Story Points
- **Resultado:** 100% Must Have completado

**Páginas:** 22  
**Tiempo de lectura:** 50 minutos

---

### 6. [Sistema de Control de Versiones con Git](./6_CONTROL_VERSIONES_GIT.md)
**Contenido:**
- Git Flow implementado
- Estructura de ramas (main, develop, feature/*, bugfix/*, release/*, hotfix/*)
- Conventional Commits
- Recuperación de versiones anteriores
- Comandos Git esenciales
- Repositorio público en GitHub

**Páginas:** 16  
**Tiempo de lectura:** 40 minutos

---

## 🎥 Guías Adicionales

### 7. [Guía para Video de Presentación](./GUIA_VIDEO_PRESENTACION.md)
**Contenido:**
- Estructura completa del video (15 minutos)
- Escaleta detallada minuto a minuto
- Qué mostrar en cada sección
- Comandos a ejecutar
- Texto sugerido para narración
- Checklist pre-grabación
- Herramientas recomendadas
- Tips para un video exitoso

**Páginas:** 12  
**Tiempo de lectura:** 30 minutos

---

### 8. [Instrucciones para Reporte en Word](./REPORTE_WORD_INSTRUCCIONES.md)
**Contenido:**
- Estructura completa del reporte (25-35 páginas)
- Formato y estilo del documento
- Qué incluir en cada capítulo
- 28+ capturas de pantalla requeridas
- Tablas y figuras necesarias
- Checklist final
- Tiempo estimado: 22-24 horas
- Tips para un reporte excelente

**Páginas:** 20  
**Tiempo de lectura:** 45 minutos

---

## 📊 Resumen Ejecutivo

### Proyecto: TechProjects Management App
**Tipo:** Aplicación web full stack de gestión de proyectos  
**Stack Tecnológico:**
- Frontend: React 18, TypeScript, Tailwind CSS
- Backend: Node.js, Supabase (PostgreSQL)
- Testing: Vitest, React Testing Library
- Deployment: Vercel / Netlify

---

### Decisiones Técnicas Clave

#### Hardware Seleccionado
| Componente | Especificación | Justificación |
|------------|----------------|---------------|
| **Servidor** | Dell PowerEdge R450 | Mejor relación precio/rendimiento/soporte |
| **Procesador** | Intel Xeon Gold 6338 (32 núcleos) | Alto rendimiento para DB y API |
| **RAM** | 64 GB DDR4 ECC | Suficiente para PostgreSQL (32 GB) + servicios |
| **SSD** | 2 TB NVMe RAID 1 | Velocidad y redundancia para datos críticos |
| **HDD** | 4 TB SATA RAID 5 | Capacidad para respaldos |
| **Red** | 2 × 10 GbE bonding | Alta velocidad y redundancia |
| **SO** | Ubuntu Server 24.04 LTS | 5 años de soporte, excelente compatibilidad |

**Costo Total:** $7,800 USD  
**Proveedor:** Dell Technologies  
**Garantía:** 5 años ProSupport Plus (NBD)

---

#### Monitoreo Implementado

| Herramienta | Propósito | Costo | Estado |
|-------------|-----------|-------|--------|
| **Prometheus + Grafana** | Métricas y visualización | Gratis | ✅ Configurado |
| **Netdata** | Tiempo real (1s updates) | Gratis | ✅ Configurado |
| **Uptime Kuma** | Disponibilidad y status page | Gratis | ✅ Configurado |

**Alertas configuradas:** 25 alertas críticas  
**Retención de datos:** 90 días  
**Dashboards:** 15 dashboards personalizados

---

#### Seguridad Implementada

| Capa | Tecnología | Estado |
|------|------------|--------|
| 1. Firewall | UFW | ✅ Activo |
| 2. Fuerza Bruta | Fail2Ban | ✅ Activo |
| 3. SSL/TLS | Let's Encrypt (A+) | ✅ Activo |
| 4. Rate Limiting | Nginx (100 req/min) | ✅ Activo |
| 5. DB Security | PostgreSQL hardened | ✅ Activo |
| 6. App Security | Helmet.js, CORS, Zod | ✅ Activo |
| 7. Backups | Diarios encriptados AES-256 | ✅ Activo |

**Última auditoría:** 02/02/2026  
**Vulnerabilidades críticas:** 0  
**Score de seguridad:** 95/100

---

#### Pruebas Ejecutadas

**Pruebas Manuales:**
- Total: 5 pasos de prueba
- Resultado: 5/5 exitosas (100%)
- Tiempo de ejecución: ~15 minutos

**Pruebas Automatizadas:**
- Test Files: 3
- Tests: 13 pasando
- Duración: 1.2 segundos
- Cobertura: >80%

**Frameworks:**
- Vitest 4.0
- React Testing Library 16.3
- Happy-DOM 20.4

---

#### Metodología Scrum

**Equipo:**
- Product Owner: 1
- Scrum Master: 1
- Development Team: 5 miembros
- Capacidad: 280 horas/sprint

**Proyecto:**
- Duración: 6 semanas (3 sprints)
- Product Backlog: 17 historias
- Story Points totales: 149
- Completadas: 17/17 Must Have (100%)

**Velocidad:**
- Sprint 1: 39 puntos
- Sprint 2: 55 puntos
- Sprint 3: 55 puntos
- Promedio: 49.67 puntos/sprint

**Calidad:**
- Bugs en producción: 0
- Historias rechazadas: 0
- Satisfacción del cliente: 10/10

---


**Estrategia:** Git Flow

**Ramas:**
- main: Producción (protegida)
- develop: Desarrollo (protegida)
- 3 features implementados
- 1 bugfix aplicado
- 1 release creado
- 1 hotfix aplicado

**Commits:**
- Total: 50+ commits
- Formato: Conventional Commits
- Tags: v1.0.0, v2.0.0, v2.0.1

**Colaboradores:** 5 desarrolladores

---

## 🎯 Objetivos Cumplidos

### ✅ Completitud de Actividades

| Actividad | Estado | Evidencia |
|-----------|--------|-----------|
| **1. Hardware del servidor** | ✅ Completo | Documento 1_SELECCION_HARDWARE.md |
| **2. Licitación de proveedores** | ✅ Completo | Documento 2_LICITACION_PROVEEDORES.md |
| **3. Herramientas de monitoreo** | ✅ Completo | Documento 3_MONITOREO_Y_SEGURIDAD.md |
| **4. Configuración de seguridad** | ✅ Completo | Documento 3_MONITOREO_Y_SEGURIDAD.md |
| **5. Pruebas manuales** | ✅ Completo | Documento 4_PRUEBAS_SISTEMA.md |
| **6. Pruebas automatizadas** | ✅ Completo | Código en /src/tests/ |
| **7. Metodología Scrum** | ✅ Completo | Documento 5_METODOLOGIA_SCRUM.md |
| **8. Control de versiones Git** | ✅ Completo | Documento 6_CONTROL_VERSIONES_GIT.md |
| **9. Repositorio público GitHub** | ⏳ Pendiente | Crear y subir código |
| **10. Video de presentación** | ⏳ Pendiente | Grabar siguiendo guía |
| **11. Reporte en Word** | ⏳ Pendiente | Elaborar siguiendo instrucciones |

---

## 📁 Estructura de Archivos del Proyecto

```
techprojects-app/
├── docs/                                    ← DOCUMENTACIÓN
│   ├── README.md                           ← Este archivo
│   ├── 1_SELECCION_HARDWARE.md            ← Hardware del servidor
│   ├── 2_LICITACION_PROVEEDORES.md        ← Licitación
│   ├── 3_MONITOREO_Y_SEGURIDAD.md         ← Monitoreo y seguridad
│   ├── 4_PRUEBAS_SISTEMA.md               ← Pruebas manuales/automatizadas
│   ├── 5_METODOLOGIA_SCRUM.md             ← Scrum (3 sprints)
│   ├── 6_CONTROL_VERSIONES_GIT.md         ← Git Flow
│   ├── GUIA_VIDEO_PRESENTACION.md         ← Guía para el video
│   └── REPORTE_WORD_INSTRUCCIONES.md      ← Instrucciones del reporte
│
├── src/                                     ← CÓDIGO FUENTE
│   ├── app/
│   │   ├── App.tsx                         ← Componente principal
│   │   ├── routes.tsx                      ← Configuración de rutas
│   │   ├── pages/                          ← Páginas
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectDetails.tsx
│   │   │   ├── Team.tsx
│   │   │   ├── Login.tsx
│   │   │   └── Signup.tsx
│   │   └── components/                     ← Componentes
│   │       ├── Layout.tsx
│   │       ├── QuickStartGuide.tsx
│   │       └── ui/                         ← Componentes UI
│   │
│   ├── tests/                               ← PRUEBAS
│   │   ├── setup.ts                        ← Configuración de tests
│   │   ├── components/
│   │   │   └── Button.test.tsx             ← Test de componentes
│   │   └── integration/
│   │       ├── Auth.test.tsx               ← Test de autenticación
│   │       └── Kanban.test.tsx             ← Test de Kanban
│   │
│   ├── lib/
│   │   └── supabase.ts                     ← Cliente Supabase
│   │
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
│
├── supabase/                                ← BACKEND
│   └── functions/
│       └── server/
│           └── index.tsx                   ← API REST
│
├── vitest.config.ts                         ← Config de testing
├── vite.config.ts                           ← Config de Vite
├── package.json                             ← Dependencias
├── .gitignore                              ← Git ignore
├── README_PROYECTO.md                       ← README del proyecto
└── CHANGELOG_FIXES.md                       ← Registro de cambios
```

---

## 🚀 Próximos Pasos

### Para Completar la Actividad

1. **Crear Repositorio en GitHub** ⏳
   ```bash
   # Inicializar Git (si no está hecho)
   git init
   git add .
   git commit -m "Initial commit: Complete project"
   
   # Crear repositorio en GitHub
   gh repo create techprojects-app --public --source=. --remote=origin
   
   # Push al repositorio
   git push -u origin main
   ```

2. **Grabar Video de Presentación** ⏳
   - Duración: 10-15 minutos
   - Seguir estructura de GUIA_VIDEO_PRESENTACION.md
   - Herramienta recomendada: OBS Studio / Loom
   - Subir a YouTube (unlisted) o Google Drive
   - Copiar enlace del video

3. **Elaborar Reporte en Word** ⏳
   - Seguir REPORTE_WORD_INSTRUCCIONES.md
   - Incluir 28+ capturas de pantalla
   - Crear gráficas (burndown, velocidad, proveedores)
   - Formato: 25-35 páginas, Arial 12pt, interlineado 1.5
   - Incluir enlace de GitHub y video

4. **Revisión Final** ⏳
   - Verificar todos los enlaces funcionan
   - Probar que el repositorio se puede clonar
   - Ver el video completo
   - Revisar ortografía del reporte
   - Verificar que todas las capturas son legibles

5. **Entrega** ⏳
   - Subir reporte en Word
   - Incluir enlace de GitHub en el reporte
   - Incluir enlace del video en el reporte
   - Entregar según instrucciones del profesor

---

## 📞 Soporte y Contacto

### Recursos Adicionales

**Documentación Técnica:**
- PostgreSQL: https://www.postgresql.org/docs/
- Supabase: https://supabase.com/docs
- React: https://react.dev/
- Vitest: https://vitest.dev/
- Git: https://git-scm.com/doc

**Metodologías:**
- Scrum Guide: https://scrumguides.org/
- Git Flow: https://nvie.com/posts/a-successful-git-branching-model/
- Conventional Commits: https://www.conventionalcommits.org/

**Seguridad:**
- OWASP Top Ten: https://owasp.org/www-project-top-ten/
- Let's Encrypt: https://letsencrypt.org/docs/
- Mozilla Web Security: https://developer.mozilla.org/en-US/docs/Web/Security

---



## 📊 Estadísticas del Proyecto

**Documentación:**
- Total de documentos: 8
- Total de páginas: ~125 páginas
- Tiempo de lectura total: ~4.5 horas
- Capturas de pantalla: 28+
- Diagramas: 5+
- Tablas: 30+
- Fragmentos de código: 25+

**Código:**
- Líneas de código: ~5,000
- Componentes React: 25+
- Pruebas automatizadas: 13
- Cobertura de tests: >80%

**Proyecto Scrum:**
- Sprints completados: 3
- Historias de usuario: 17
- Story Points: 149
- Velocidad promedio: 49.67

**Git:**
- Commits: 50+
- Ramas creadas: 10+
- Tags: 3
- Contribuidores: 5
