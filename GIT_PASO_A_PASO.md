# 🔧 Git - Guía Paso a Paso Ejecutable

## 🎯 Objetivo

Implementar un sistema de control de versiones completo con Git, incluyendo:
- ✅ Creación de repositorio
- ✅ Creación de ramas y flujo de trabajo (Git Flow)
- ✅ Recuperación de versión anterior
- ✅ Repositorio público en GitHub

---

## 📋 ANTES DE EMPEZAR

### ✅ Verificar que Git está instalado:

```bash
git --version
```

**Resultado esperado:**
```
git version 2.40.0 (o superior)
```

**Si no está instalado:**
- Windows: https://git-scm.com/download/win
- Mac: `brew install git`
- Linux: `sudo apt-get install git`

### ✅ Configurar Git (primera vez):

```bash
# Tu nombre (reemplaza con tu nombre real)
git config --global user.name "Tu Nombre Completo"

# Tu email
git config --global user.email "tu.email@ejemplo.com"

# Verificar configuración
git config --list
```

**💾 CAPTURA 5.1:** Terminal mostrando `git config --list`

---

## 🚀 PASO 1: CREAR REPOSITORIO LOCAL

### 1.1. Navegar a tu proyecto

```bash
# Navega a la carpeta de tu proyecto
cd /ruta/a/tu/proyecto

# Ejemplo en Windows:
# cd C:\Users\TuUsuario\Proyectos\gestion-proyectos

# Ejemplo en Mac/Linux:
# cd ~/Proyectos/gestion-proyectos
```

### 1.2. Inicializar repositorio Git

```bash
# Inicializar repositorio
git init

# Verificar que se creó la carpeta .git
ls -la
```

**Resultado esperado:**
```
Initialized empty Git repository in /ruta/a/tu/proyecto/.git/
```

**💾 CAPTURA 5.2:** Terminal mostrando `git init` exitoso

### 1.3. Crear archivo .gitignore

```bash
# Crear .gitignore para ignorar archivos innecesarios
cat > .gitignore << EOL
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
/coverage

# Production
/build
/dist

# Misc
.DS_Store
.env
.env.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
Thumbs.db
EOL

# Ver contenido
cat .gitignore
```

### 1.4. Primer commit (Initial commit)

```bash
# Agregar todos los archivos
git add .

# Ver estado
git status

# Hacer primer commit
git commit -m "Initial commit: Configuración inicial del proyecto"

# Ver historial
git log --oneline
```

**💾 CAPTURA 5.3:** Terminal mostrando:
- `git status` (archivos agregados)
- `git commit` exitoso
- `git log --oneline` con el commit inicial

---

## 🌳 PASO 2: CREAR RAMAS Y FLUJO DE TRABAJO (GIT FLOW)

### 2.1. Estructura de ramas Git Flow

```
main (producción)
  └── develop (desarrollo)
       ├── feature/login (nueva funcionalidad)
       ├── feature/dashboard (nueva funcionalidad)
       └── hotfix/fix-bug (corrección urgente)
```

### 2.2. Crear rama develop

```bash
# Crear y cambiar a rama develop
git checkout -b develop

# Verificar ramas existentes
git branch
```

**Resultado esperado:**
```
* develop
  main
```

**💾 CAPTURA 5.4:** Terminal mostrando `git branch` con develop activa (*)

### 2.3. Crear rama feature/login

```bash
# Desde develop, crear rama feature
git checkout -b feature/login

# Verificar rama actual
git branch
```

### 2.4. Hacer cambios en feature/login

```bash
# Crear un archivo de ejemplo para simular trabajo
cat > CHANGELOG_LOGIN.md << EOL
# Feature: Sistema de Login

## Cambios implementados:
- Formulario de login con validación
- Integración con Supabase Auth
- Manejo de errores
- Redirección después de login exitoso

Fecha: $(date)
Autor: Tu Nombre
EOL

# Agregar y commitear
git add CHANGELOG_LOGIN.md
git commit -m "feat: Implementar sistema de login con validación"

# Ver log
git log --oneline --graph --all
```

**💾 CAPTURA 5.5:** Terminal mostrando:
- Creación de archivo
- `git log --oneline --graph --all` (gráfico de ramas)

### 2.5. Crear otra rama: feature/dashboard

```bash
# Volver a develop
git checkout develop

# Crear nueva feature
git checkout -b feature/dashboard

# Crear archivo de trabajo
cat > CHANGELOG_DASHBOARD.md << EOL
# Feature: Dashboard Interactivo

## Cambios implementados:
- Gráficos de Recharts
- Cards de estadísticas
- Filtros dinámicos
- Responsive design

Fecha: $(date)
Autor: Tu Nombre
EOL

# Agregar y commitear
git add CHANGELOG_DASHBOARD.md
git commit -m "feat: Implementar dashboard con gráficos interactivos"

# Ver log con todas las ramas
git log --oneline --graph --all --decorate
```

**💾 CAPTURA 5.6:** Terminal mostrando gráfico de ramas con:
- main
- develop
- feature/login
- feature/dashboard

### 2.6. Merge de feature/login a develop

```bash
# Cambiar a develop
git checkout develop

# Hacer merge de feature/login
git merge feature/login --no-ff -m "Merge feature/login into develop"

# Ver estado
git log --oneline --graph --all --decorate
```

**💾 CAPTURA 5.7:** Terminal mostrando merge exitoso

### 2.7. Merge de feature/dashboard a develop

```bash
# En develop
git merge feature/dashboard --no-ff -m "Merge feature/dashboard into develop"

# Ver log completo
git log --oneline --graph --all
```

### 2.8. Merge de develop a main (release)

```bash
# Cambiar a main
git checkout main

# Hacer merge de develop
git merge develop --no-ff -m "Release v1.0.0: Primera versión estable"

# Crear tag para la versión
git tag -a v1.0.0 -m "Versión 1.0.0 - Primera versión estable"

# Ver tags
git tag

# Ver log completo con tags
git log --oneline --graph --all --decorate
```

**💾 CAPTURA 5.8:** Terminal mostrando:
- Merge a main
- Tag v1.0.0 creado
- Gráfico completo de ramas

---

## ⏪ PASO 3: RECUPERACIÓN DE VERSIÓN ANTERIOR

### 3.1. Ver historial completo

```bash
# Ver todos los commits
git log --oneline

# Ver commits con detalles
git log --pretty=format:"%h - %an, %ar : %s"
```

**Ejemplo de output:**
```
a1b2c3d - Tu Nombre, 2 hours ago : Release v1.0.0
e4f5g6h - Tu Nombre, 3 hours ago : Merge feature/dashboard
i7j8k9l - Tu Nombre, 4 hours ago : feat: Implementar dashboard
```

### 3.2. Crear commit adicional (para luego revertir)

```bash
# Asegúrate de estar en main
git checkout main

# Crear archivo temporal
echo "Este archivo será revertido" > temporal.txt

# Commitear
git add temporal.txt
git commit -m "test: Agregar archivo temporal para demostrar revert"

# Ver log
git log --oneline
```

**💾 CAPTURA 5.9:** Terminal mostrando commit del archivo temporal

### 3.3. Método 1: Revert (recomendado para historial público)

```bash
# Obtener hash del último commit
git log --oneline -n 3

# Revertir el último commit (crear nuevo commit que deshace cambios)
git revert HEAD

# En el editor que se abre, guardar el mensaje predeterminado
# (Presiona :wq en vim, o Ctrl+X en nano)

# Ver que se creó un nuevo commit de revert
git log --oneline -n 5
```

**💾 CAPTURA 5.10:** Terminal mostrando:
- Commit original
- Commit de revert
- Archivo temporal eliminado

### 3.4. Método 2: Checkout de versión específica

```bash
# Ver tags disponibles
git tag

# Ver commit del tag v1.0.0
git log v1.0.0 -1

# Hacer checkout temporal de esa versión
git checkout v1.0.0

# Ver archivos en esa versión
ls -la

# Ver en qué estado estamos
git status
```

**💾 CAPTURA 5.11:** Terminal mostrando checkout de versión anterior

```bash
# Volver a main
git checkout main
```

### 3.5. Método 3: Reset (CUIDADO: solo para commits locales)

```bash
# Crear rama de prueba para demostrar reset
git checkout -b test-reset

# Crear commit de prueba
echo "Test reset" > test-reset.txt
git add test-reset.txt
git commit -m "test: Commit para demostrar reset"

# Ver log
git log --oneline -n 3

# Hacer reset HARD al commit anterior
git reset --hard HEAD~1

# Ver que el commit desapareció
git log --oneline -n 3

# Volver a main
git checkout main

# Eliminar rama de prueba
git branch -D test-reset
```

**💾 CAPTURA 5.12:** Terminal mostrando reset en acción

---

## 🔄 PASO 4: FLUJO DE TRABAJO COMPLETO (GIT FLOW)

### 4.1. Simular ciclo completo de desarrollo

```bash
# 1. Crear hotfix desde main
git checkout main
git checkout -b hotfix/fix-critical-bug

# Hacer cambios
cat > HOTFIX.md << EOL
# Hotfix: Corrección de bug crítico

## Problema:
Error en autenticación que impedía login

## Solución:
- Corregir validación de tokens
- Agregar manejo de errores

Fecha: $(date)
EOL

git add HOTFIX.md
git commit -m "hotfix: Corregir bug crítico en autenticación"

# 2. Merge a main
git checkout main
git merge hotfix/fix-critical-bug --no-ff -m "Hotfix: Corrección crítica v1.0.1"
git tag -a v1.0.1 -m "Versión 1.0.1 - Hotfix crítico"

# 3. Merge también a develop
git checkout develop
git merge hotfix/fix-critical-bug --no-ff -m "Merge hotfix into develop"

# 4. Ver estado final
git log --oneline --graph --all --decorate
```

**💾 CAPTURA 5.13:** Gráfico completo mostrando:
- main
- develop
- features mergeadas
- hotfix aplicado

---

## 🌐 PASO 5: CREAR REPOSITORIO EN GITHUB

### 5.1. Crear cuenta en GitHub (si no tienes)

1. Ve a: https://github.com/signup
2. Crea tu cuenta con email
3. Verifica tu email

### 5.2. Crear repositorio remoto

**En GitHub:**
1. Click en "+" arriba a la derecha
2. Click en "New repository"
3. Completa:
   - **Repository name:** `gestion-proyectos-scrum`
   - **Description:** "Sistema de gestión de proyectos con metodología Scrum"
   - **Visibility:** ✅ **Public** (importante)
   - ⚠️ **NO** marques "Initialize with README" (ya tenemos código)
4. Click "Create repository"

**💾 CAPTURA 5.14:** Página de GitHub mostrando formulario de creación

**💾 CAPTURA 5.15:** Página de instrucciones después de crear repo

### 5.3. Conectar repositorio local con GitHub

```bash
# Copiar URL del repositorio de GitHub
# Ejemplo: https://github.com/tu-usuario/gestion-proyectos-scrum.git

# Agregar remote origin
git remote add origin https://github.com/tu-usuario/gestion-proyectos-scrum.git

# Verificar
git remote -v
```

**Resultado esperado:**
```
origin  https://github.com/tu-usuario/gestion-proyectos-scrum.git (fetch)
origin  https://github.com/tu-usuario/gestion-proyectos-scrum.git (push)
```

**💾 CAPTURA 5.16:** Terminal mostrando `git remote -v`

### 5.4. Push a GitHub

```bash
# Push de main
git push -u origin main

# Push de develop
git push -u origin develop

# Push de todas las ramas
git push --all origin

# Push de tags
git push --tags origin

# Ver todas las ramas (locales y remotas)
git branch -a
```

**💾 CAPTURA 5.17:** Terminal mostrando push exitoso

### 5.5. Verificar en GitHub

**En el navegador:**
1. Recarga la página de tu repositorio en GitHub
2. Verás:
   - Archivos del proyecto
   - Ramas (main, develop, features)
   - Commits
   - Tags (v1.0.0, v1.0.1)

**💾 CAPTURA 5.18:** Página principal del repo en GitHub mostrando:
- Archivos
- README (si tienes)
- Último commit
- Número de commits

**💾 CAPTURA 5.19:** Pestaña "Branches" mostrando todas las ramas

**💾 CAPTURA 5.20:** Pestaña "Tags" mostrando versiones

**💾 CAPTURA 5.21:** Network graph (Insights > Network) mostrando:
- Gráfico visual de ramas
- Merges
- Flujo de trabajo completo

---

## 📊 PASO 6: CREAR README PROFESIONAL

### 6.1. Crear README.md

```bash
# Asegúrate de estar en main
git checkout main

# Crear README
cat > README.md << 'EOL'
# 🚀 Sistema de Gestión de Proyectos con Metodología Scrum

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

## 📋 Descripción

Sistema completo de gestión de proyectos desarrollado con React, TypeScript y Tailwind CSS, implementando la metodología ágil Scrum para el desarrollo frontend.

## ✨ Características

- 🔐 **Autenticación**: Sistema completo con Supabase Auth
- 📊 **Dashboard Interactivo**: Gráficos y estadísticas en tiempo real
- 📋 **Kanban Board**: Sistema de arrastrar y soltar para gestión de tareas
- 👥 **Gestión de Equipos**: Administración de miembros y roles
- 🎯 **Scrum Board**: Visualización completa de metodología Scrum
- 📈 **Métricas**: Burndown charts, velocity, y KPIs del proyecto

## 🛠️ Tecnologías

- **Frontend**: React 18, TypeScript, Tailwind CSS v4
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Routing**: React Router v7
- **Estado**: React Hooks
- **Gráficos**: Recharts
- **Drag & Drop**: react-dnd
- **Testing**: Vitest, React Testing Library

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/gestion-proyectos-scrum.git

# Entrar al directorio
cd gestion-proyectos-scrum

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🚀 Uso

1. Accede a `http://localhost:5173`
2. Regístrate o inicia sesión
3. Explora las funcionalidades:
   - Dashboard con estadísticas
   - Proyectos y tareas Kanban
   - Gestión de equipo
   - Scrum Board con sprints

## 📸 Capturas de Pantalla

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Kanban Board
![Kanban](docs/screenshots/kanban.png)

### Scrum Board
![Scrum](docs/screenshots/scrum.png)

## 🧪 Tests

```bash
# Ejecutar tests
npm run test

# Tests con cobertura
npm run test:coverage
```

## 🌳 Git Flow

Este proyecto utiliza Git Flow:

- `main`: Rama de producción
- `develop`: Rama de desarrollo
- `feature/*`: Nuevas funcionalidades
- `hotfix/*`: Correcciones urgentes

## 📚 Documentación

Documentación completa disponible en `/docs`:

- [Pruebas del Sistema](docs/4_PRUEBAS_SISTEMA.md)
- [Metodología Scrum](docs/5_METODOLOGIA_SCRUM.md)
- [Control de Versiones Git](docs/6_CONTROL_VERSIONES_GIT.md)

## 👥 Equipo Scrum

- **Product Owner**: Tu Nombre
- **Scrum Master**: Ana López
- **Developers**: Carlos Martínez, María García, Juan Pérez, Laura Sánchez, Roberto López

## 📈 Métricas del Proyecto

- **Story Points Completados**: 149
- **Velocidad Promedio**: 49.7 pts/sprint
- **Sprints Completados**: 1
- **Satisfacción del Equipo**: 9.2/10

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

Tu Nombre - [tu.email@ejemplo.com](mailto:tu.email@ejemplo.com)

Proyecto Link: [https://github.com/tu-usuario/gestion-proyectos-scrum](https://github.com/tu-usuario/gestion-proyectos-scrum)

---

⭐ ¡No olvides darle una estrella al proyecto si te fue útil!
EOL

# Agregar y commitear
git add README.md
git commit -m "docs: Agregar README completo con documentación"

# Push a GitHub
git push origin main
```

**💾 CAPTURA 5.22:** README renderizado en GitHub (con formato bonito)

---

## 📊 RESUMEN DE COMANDOS EJECUTADOS

### Tabla de referencia:

| Comando | Propósito |
|---------|-----------|
| `git init` | Inicializar repositorio |
| `git add .` | Agregar archivos al staging |
| `git commit -m "mensaje"` | Crear commit |
| `git checkout -b rama` | Crear y cambiar a rama |
| `git branch` | Ver ramas |
| `git merge rama` | Fusionar rama |
| `git log --oneline --graph --all` | Ver historial gráfico |
| `git revert HEAD` | Revertir último commit |
| `git reset --hard HEAD~1` | Eliminar último commit (peligroso) |
| `git tag -a v1.0.0 -m "msg"` | Crear tag |
| `git remote add origin URL` | Conectar con GitHub |
| `git push origin rama` | Subir rama a GitHub |
| `git push --tags` | Subir tags a GitHub |

---

## 📸 CHECKLIST DE CAPTURAS (22 CAPTURAS)

### Configuración y Setup (3):
- [ ] **5.1** - `git config --list`
- [ ] **5.2** - `git init` exitoso
- [ ] **5.3** - Primer commit y log

### Ramas y Git Flow (5):
- [ ] **5.4** - Ramas (develop activa)
- [ ] **5.5** - Log con gráfico de ramas
- [ ] **5.6** - Gráfico con múltiples features
- [ ] **5.7** - Merge de feature a develop
- [ ] **5.8** - Merge a main con tag v1.0.0

### Recuperación de Versiones (4):
- [ ] **5.9** - Commit temporal
- [ ] **5.10** - Git revert en acción
- [ ] **5.11** - Checkout de versión anterior
- [ ] **5.12** - Git reset (demostración)

### Git Flow Completo (1):
- [ ] **5.13** - Gráfico final con hotfix

### GitHub (9):
- [ ] **5.14** - Formulario crear repositorio
- [ ] **5.15** - Instrucciones post-creación
- [ ] **5.16** - `git remote -v`
- [ ] **5.17** - Push exitoso
- [ ] **5.18** - Página principal del repo
- [ ] **5.19** - Pestaña Branches
- [ ] **5.20** - Pestaña Tags
- [ ] **5.21** - Network graph (Insights)
- [ ] **5.22** - README renderizado

**Total: 22 capturas**

---

## ⏱️ TIEMPO ESTIMADO

- **Configuración inicial**: 10 min
- **Commits y ramas**: 20 min
- **Git Flow completo**: 15 min
- **Recuperación de versiones**: 15 min
- **GitHub setup**: 10 min
- **Capturas**: 30 min
- **README**: 10 min

**Total: ~2 horas**

---

## ✅ VERIFICACIÓN FINAL

Antes de terminar, ejecuta:

```bash
# Ver todas las ramas
git branch -a

# Ver todos los tags
git tag

# Ver configuración de remotes
git remote -v

# Ver último log con todo
git log --oneline --graph --all --decorate -10
```

**Deberías ver:**
- ✅ Rama main
- ✅ Rama develop
- ✅ Ramas feature (feature/login, feature/dashboard)
- ✅ Rama hotfix
- ✅ Tags (v1.0.0, v1.0.1)
- ✅ Remote origin apuntando a GitHub

---

## 🎯 PRÓXIMOS PASOS

1. ✅ Ejecuta todos los comandos en orden
2. ✅ Toma las 22 capturas
3. ✅ Verifica que el repo esté público en GitHub
4. ✅ Copia la URL del repo para el reporte
5. ✅ Inserta capturas en reporte Word

---

**¡Listo! Ahora tienes un sistema completo de control de versiones con Git y GitHub.** 🎉

**Última actualización:** 02 de febrero de 2026
