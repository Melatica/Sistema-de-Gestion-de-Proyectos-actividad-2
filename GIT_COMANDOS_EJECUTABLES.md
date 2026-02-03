# Guía Práctica: Comandos Git para Ejecutar

## INSTRUCCIONES: Copia y pega estos comandos en tu terminal

**IMPORTANTE:** Ejecuta estos comandos en el orden indicado. Cada sección tiene los comandos exactos que debes copiar.

---

## PARTE 1: Configuración Inicial de Git

### Paso 1: Verificar si Git está instalado

```bash
git --version
```

**Salida esperada:** `git version 2.x.x`

Si no está instalado:
- **Windows:** Descarga de https://git-scm.com/download/win
- **Mac:** `brew install git`
- **Linux:** `sudo apt install git`

---

### Paso 2: Configurar tu identidad

```bash
# Reemplaza con TU nombre y email
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@ejemplo.com"
```

**Ejemplo real:**
```bash
git config --global user.name "María García"
git config --global user.email "maria.garcia@gmail.com"
```

### Paso 3: Verificar configuración

```bash
git config --list
```

---

## PARTE 2: Inicializar Repositorio Local

### Paso 4: Navegar a tu proyecto

```bash
# Navega a la carpeta de tu proyecto
cd /ruta/a/tu/proyecto/techprojects-app

# Verifica que estás en la carpeta correcta
pwd
ls
```

### Paso 5: Inicializar Git

```bash
git init
```

**Salida esperada:** `Initialized empty Git repository in /ruta/.../.git/`

---

## PARTE 3: Primer Commit

### Paso 6: Ver archivos del proyecto

```bash
git status
```

**Verás muchos archivos en rojo** (untracked files)

### Paso 7: Crear .gitignore (si no existe)

```bash
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/dist
/build

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea
.DS_Store

# OS
Thumbs.db
EOF
```

### Paso 8: Agregar todos los archivos

```bash
git add .
```

### Paso 9: Verificar archivos en staging

```bash
git status
```

**Verás archivos en verde** (ready to be committed)

### Paso 10: Hacer el primer commit

```bash
git commit -m "Initial commit: Complete TechProjects Management App

- Full stack application with React + TypeScript
- Supabase backend integration
- Complete UI with Tailwind CSS
- Testing suite with Vitest
- Documentation in /docs folder"
```

### Paso 11: Ver el commit

```bash
git log --oneline
```

**Salida esperada:**
```
a1b2c3d (HEAD -> main) Initial commit: Complete TechProjects Management App
```

---

## PARTE 4: Crear Ramas (Git Flow)

### Paso 12: Crear rama develop

```bash
# Crear y cambiar a develop
git checkout -b develop

# Verificar que estás en develop
git branch
```

**Salida esperada:**
```
* develop
  main
```

### Paso 13: Crear ramas de features (Sprint 1)

```bash
# Feature 1: Dashboard improvements
git checkout develop
git checkout -b feature/dashboard-improvements

# Simular trabajo en el feature
echo "// Dashboard improvements" >> src/app/pages/Dashboard.tsx
git add src/app/pages/Dashboard.tsx
git commit -m "feat(dashboard): Add interactive charts with recharts

- Implemented projects by status chart
- Added tasks by priority chart
- Interactive tooltips for better UX
- Responsive design for mobile

Closes #US-01"

# Volver a develop
git checkout develop
```

```bash
# Feature 2: Kanban filters
git checkout -b feature/kanban-filters

# Simular trabajo
echo "// Kanban filters" >> src/app/pages/ProjectDetails.tsx
git add src/app/pages/ProjectDetails.tsx
git commit -m "feat(kanban): Add filtering system for tasks

- Filter by status, priority, assigned user
- Text search functionality
- Clear all filters button
- Persist filters in URL params

Closes #US-08"

# Volver a develop
git checkout develop
```

```bash
# Feature 3: Notifications
git checkout -b feature/notifications

# Simular trabajo
touch src/app/components/NotificationCenter.tsx
git add src/app/components/NotificationCenter.tsx
git commit -m "feat(notifications): Implement real-time notification system

- Real-time notifications with Supabase subscriptions
- Toast notifications for immediate feedback
- Notification center with history
- Mark as read/unread functionality

Closes #US-15"

# Volver a develop
git checkout develop
```

### Paso 14: Mergear features a develop

```bash
# Mergear feature/dashboard-improvements
git merge feature/dashboard-improvements --no-ff -m "Merge feature/dashboard-improvements into develop

Sprint 1 - US-01: Interactive charts implemented successfully"

# Mergear feature/kanban-filters
git merge feature/kanban-filters --no-ff -m "Merge feature/kanban-filters into develop

Sprint 1 - US-08: Filtering system implemented"

# Mergear feature/notifications  
git merge feature/notifications --no-ff -m "Merge feature/notifications into develop

Sprint 3 - US-15: Real-time notifications implemented"
```

### Paso 15: Ver historial gráfico

```bash
git log --graph --oneline --all --decorate -10
```

**Salida esperada:**
```
*   d4e5f6g (HEAD -> develop) Merge feature/notifications into develop
|\  
| * c3d4e5f (feature/notifications) feat(notifications): Implement real-time notification system
|/  
*   b2c3d4e Merge feature/kanban-filters into develop
|\  
| * a1b2c3d (feature/kanban-filters) feat(kanban): Add filtering system for tasks
|/  
*   9a0b1c2 Merge feature/dashboard-improvements into develop
|\  
| * 8f9a0b1 (feature/dashboard-improvements) feat(dashboard): Add interactive charts
|/  
* 7e8f9a0 (main) Initial commit: Complete TechProjects Management App
```

---

## PARTE 5: Crear Bugfix

### Paso 16: Bugfix de fecha

```bash
# Crear rama de bugfix desde develop
git checkout develop
git checkout -b bugfix/date-filter-error

# Simular corrección
echo "// Fixed date filter comparison" >> src/app/components/Filters.tsx
git add src/app/components/Filters.tsx
git commit -m "fix(filters): Correct date filter comparison logic

The date filter was comparing strings instead of Date objects,
causing incorrect filtering results.

- Convert string dates to Date objects before comparison
- Add unit tests for date filtering
- Update documentation

Fixes #BUG-123"

# Mergear a develop
git checkout develop
git merge bugfix/date-filter-error --no-ff -m "Merge bugfix/date-filter-error into develop

Fixed critical bug in date filtering"
```

---

## PARTE 6: Crear Release

### Paso 17: Rama de release

```bash
# Crear release desde develop
git checkout develop
git checkout -b release/v2.0
```

### Paso 18: Actualizar versión en package.json

**Abre `package.json` y cambia la versión:**

```json
{
  "version": "2.0.0"
}
```

Luego:

```bash
git add package.json
git commit -m "chore(release): Bump version to 2.0.0"
```

### Paso 19: Crear CHANGELOG

```bash
cat > CHANGELOG.md << 'EOF'
# Changelog

## [2.0.0] - 2026-03-17

### Added
- Interactive charts in dashboard (US-01)
- Project filtering system (US-02)
- Animated statistics cards (US-03)
- Kanban task filters (US-08)
- Real-time notifications (US-15, US-16)
- Notification preferences (US-17)
- Dark mode support (US-14)
- Mobile responsive design (US-12)
- Breadcrumb navigation (US-13)

### Fixed
- Date filter comparison bug (BUG-123)
- Mobile layout on iPhone SE (BUG-124)

### Changed
- Improved drag & drop animations in Kanban
- Enhanced UI/UX across all pages
- Optimized performance (Lighthouse score >90)

## [1.0.0] - 2026-02-01
- Initial release
EOF

git add CHANGELOG.md
git commit -m "docs(changelog): Update changelog for v2.0.0"
```

### Paso 20: Mergear release a main

```bash
# Mergear a main
git checkout main
git merge release/v2.0 --no-ff -m "Merge release/v2.0 into main

Release version 2.0.0 with major UI/UX improvements"
```

### Paso 21: Crear tag

```bash
git tag -a v2.0.0 -m "Release version 2.0.0

Major UI/UX improvements including:
- Interactive dashboard with charts
- Advanced filtering system
- Real-time notifications
- Full mobile support
- Dark mode

Total: 17 user stories completed across 3 sprints"
```

### Paso 22: Mergear release a develop también

```bash
git checkout develop
git merge release/v2.0 --no-ff -m "Merge release/v2.0 back into develop"
```

---

## PARTE 7: Crear Hotfix

### Paso 23: Hotfix desde main

```bash
# Crear hotfix desde main
git checkout main
git checkout -b hotfix/security-patch

# Simular parche
echo "// Security patch: XSS prevention" >> src/lib/security.ts
git add src/lib/security.ts
git commit -m "fix(security): Patch XSS vulnerability in user input

CRITICAL SECURITY PATCH

- Sanitize all user inputs before rendering
- Add DOMPurify library for HTML sanitization
- Update Content Security Policy headers
- Add security tests

CVE-2026-12345"
```

### Paso 24: Mergear hotfix a main

```bash
git checkout main
git merge hotfix/security-patch --no-ff -m "Merge hotfix/security-patch into main

Critical security patch for XSS vulnerability"
```

### Paso 25: Crear tag de parche

```bash
git tag -a v2.0.1 -m "Security patch v2.0.1

Fix XSS vulnerability (CVE-2026-12345)"
```

### Paso 26: Mergear hotfix a develop

```bash
git checkout develop
git merge hotfix/security-patch --no-ff -m "Merge hotfix/security-patch into develop"
```

---

## PARTE 8: Ver Todas las Ramas y Tags

### Paso 27: Ver todas las ramas

```bash
git branch -a
```

**Salida esperada:**
```
* develop
  main
  feature/dashboard-improvements
  feature/kanban-filters
  feature/notifications
  bugfix/date-filter-error
  release/v2.0
  hotfix/security-patch
```

### Paso 28: Ver todos los tags

```bash
git tag -l
```

**Salida esperada:**
```
v2.0.0
v2.0.1
```

### Paso 29: Ver detalles de un tag

```bash
git show v2.0.0
```

---

## PARTE 9: Crear Repositorio en GitHub

### Opción A: Usando GitHub CLI (Recomendado)

#### Paso 30: Instalar GitHub CLI

- **Windows:** `winget install --id GitHub.cli`
- **Mac:** `brew install gh`
- **Linux:** `sudo apt install gh`

#### Paso 31: Autenticarse

```bash
gh auth login
```

Sigue las instrucciones:
1. Selecciona "GitHub.com"
2. Selecciona "HTTPS"
3. Selecciona "Login with a web browser"
4. Copia el código que aparece
5. Presiona Enter
6. Pega el código en tu navegador

#### Paso 32: Crear repositorio

```bash
gh repo create techprojects-app \
  --public \
  --source=. \
  --remote=origin \
  --description="Full stack project management application with React, TypeScript, and Supabase"
```

#### Paso 33: Push a GitHub

```bash
# Push de main
git push -u origin main

# Push de develop
git push -u origin develop

# Push de todas las ramas de features
git push origin feature/dashboard-improvements
git push origin feature/kanban-filters
git push origin feature/notifications
git push origin bugfix/date-filter-error
git push origin release/v2.0
git push origin hotfix/security-patch

# Push de tags
git push origin --tags
```

---

### Opción B: Manualmente desde GitHub Web

#### Paso 30: Crear repo en GitHub.com

1. Ve a https://github.com/new
2. **Repository name:** `techprojects-app`
3. **Description:** "Full stack project management application with React, TypeScript, and Supabase"
4. **Visibility:** Public
5. **NO** marcar "Initialize this repository with a README"
6. Click "Create repository"

#### Paso 31: Agregar remote

```bash
# Reemplaza TU-USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/techprojects-app.git

# Verificar
git remote -v
```

**Salida esperada:**
```
origin  https://github.com/TU-USUARIO/techprojects-app.git (fetch)
origin  https://github.com/TU-USUARIO/techprojects-app.git (push)
```

#### Paso 32: Push a GitHub

```bash
# Push de main
git branch -M main
git push -u origin main

# Push de develop
git push -u origin develop

# Push de features
git push origin feature/dashboard-improvements
git push origin feature/kanban-filters
git push origin feature/notifications

# Push de bugfix, release, hotfix
git push origin bugfix/date-filter-error
git push origin release/v2.0
git push origin hotfix/security-patch

# Push de todos los tags
git push origin --tags
```

---

## PARTE 10: Verificar en GitHub

### Paso 33: Abrir repositorio en navegador

```bash
# Con GitHub CLI
gh repo view --web

# O manualmente
# Abre: https://github.com/TU-USUARIO/techprojects-app
```

### Paso 34: Verificar que todo está subido

En GitHub, verifica:
- ✅ Rama `main` está visible
- ✅ Rama `develop` está visible
- ✅ Todas las ramas de features están
- ✅ Tags v2.0.0 y v2.0.1 aparecen en "Releases"
- ✅ Commits se ven con mensajes completos
- ✅ Gráfico de red muestra Git Flow

---

## PARTE 11: Recuperación de Versiones

### Escenario 1: Ver archivo en versión anterior

```bash
# Ver cómo era Dashboard.tsx en v2.0.0
git show v2.0.0:src/app/pages/Dashboard.tsx
```

### Escenario 2: Restaurar archivo a versión anterior

```bash
# Restaurar Dashboard.tsx a versión v2.0.0
git checkout v2.0.0 -- src/app/pages/Dashboard.tsx

# Hacer commit del cambio
git add src/app/pages/Dashboard.tsx
git commit -m "revert(dashboard): Restore Dashboard to v2.0.0 version

Reverting recent changes that caused issues"
```

### Escenario 3: Ver diferencias entre versiones

```bash
# Comparar v2.0.0 con v2.0.1
git diff v2.0.0..v2.0.1

# Comparar solo archivos cambiados
git diff --name-only v2.0.0 v2.0.1

# Estadísticas de cambios
git diff --stat v2.0.0 v2.0.1
```

### Escenario 4: Revertir un commit específico

```bash
# Ver historial
git log --oneline -5

# Revertir commit específico (crea commit inverso)
git revert abc123d

# Ver que se creó commit de revert
git log --oneline -3
```

### Escenario 5: Crear rama desde versión anterior

```bash
# Crear rama desde v2.0.0 para mantenerla
git checkout -b maintenance/v2.0 v2.0.0

# Hacer cambios si es necesario
git add .
git commit -m "fix: Critical patch for v2.0 branch"

# Crear tag de parche
git tag -a v2.0.2 -m "Patch for v2.0 maintenance branch"

# Push
git push origin maintenance/v2.0
git push origin v2.0.2
```

### Escenario 6: Ver historial de un archivo

```bash
# Ver todos los commits que modificaron un archivo
git log --oneline -- src/app/pages/Dashboard.tsx

# Ver cambios detallados
git log -p -- src/app/pages/Dashboard.tsx
```

---

## PARTE 12: Comandos Útiles para el Día a Día

### Ver estado actual

```bash
git status
```

### Ver cambios no guardados

```bash
# Cambios en archivos
git diff

# Cambios en staging
git diff --staged
```

### Guardar cambios temporalmente (stash)

```bash
# Guardar cambios
git stash save "WIP: Working on notifications"

# Ver stashes
git stash list

# Aplicar último stash
git stash pop

# Ver contenido de stash
git stash show -p stash@{0}
```

### Deshacer cambios

```bash
# Descartar cambios en un archivo
git checkout -- archivo.txt

# Quitar archivo de staging
git reset HEAD archivo.txt

# Modificar último commit
git commit --amend --no-edit
```

### Ver quién modificó cada línea

```bash
git blame src/app/App.tsx
```

### Buscar en commits

```bash
# Buscar commits por mensaje
git log --grep="notification"

# Buscar en código
git grep "useState" src/
```

---

## PARTE 13: Crear README.md del Proyecto

```bash
cat > README.md << 'EOF'
# TechProjects Management App

![Version](https://img.shields.io/badge/version-2.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Full stack project management application for software development teams.

## 🚀 Features

- **Interactive Dashboard** with charts and statistics
- **Kanban Board** with drag & drop functionality
- **Team Management** with member assignments
- **Real-time Notifications** via Supabase
- **Project Filtering** and search
- **Dark Mode** support
- **Mobile Responsive** design

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL)
- **Testing:** Vitest, React Testing Library
- **State Management:** React Context + Hooks
- **Routing:** React Router v7

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/TU-USUARIO/techprojects-app.git
cd techprojects-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Run development server
npm run dev
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🏗️ Project Structure

```
techprojects-app/
├── src/
│   ├── app/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable components
│   │   └── routes.tsx      # Routing configuration
│   ├── lib/                # Utilities and libraries
│   ├── tests/              # Test files
│   └── styles/             # Global styles
├── docs/                   # Documentation
└── supabase/              # Backend functions
```

## 📖 Documentation

Full documentation available in `/docs` folder:
- [Hardware Selection](./docs/1_SELECCION_HARDWARE.md)
- [Monitoring & Security](./docs/3_MONITOREO_Y_SEGURIDAD.md)
- [Testing](./docs/4_PRUEBAS_SISTEMA.md)
- [Scrum Methodology](./docs/5_METODOLOGIA_SCRUM.md)
- [Git Workflow](./docs/6_CONTROL_VERSIONES_GIT.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Team

- **Product Owner:** [Tu Nombre]
- **Scrum Master:** Ana López
- **Development Team:** Carlos Martínez, María García, Juan Pérez, Laura Sánchez, Roberto López

## 📊 Project Statistics

- **Sprint Completed:** 3
- **User Stories:** 17
- **Story Points:** 149
- **Test Coverage:** >80%
- **Lighthouse Score:** >90
EOF

git add README.md
git commit -m "docs(readme): Add comprehensive README

- Project overview and features
- Installation instructions
- Testing commands
- Project structure
- Team information"

git push origin main
```

---

## 🎯 CHECKLIST FINAL

### Verificación Local

- [ ] `git --version` funciona
- [ ] Git configurado con tu nombre y email
- [ ] Repositorio inicializado (`git init`)
- [ ] Primer commit creado
- [ ] Rama `develop` creada
- [ ] 3 ramas de `feature/*` creadas y mergeadas
- [ ] 1 rama de `bugfix/*` creada y mergeada
- [ ] 1 rama de `release/*` creada y mergeada
- [ ] 1 rama de `hotfix/*` creada y mergeada
- [ ] Tags `v2.0.0` y `v2.0.1` creados
- [ ] `git log --graph` muestra estructura Git Flow
- [ ] CHANGELOG.md creado
- [ ] README.md creado

### Verificación en GitHub

- [ ] Repositorio creado en GitHub
- [ ] Rama `main` visible en GitHub
- [ ] Rama `develop` visible en GitHub
- [ ] Todas las ramas de features visibles
- [ ] Tags aparecen en sección "Releases"
- [ ] Commits se ven con mensajes completos
- [ ] README.md se muestra en página principal
- [ ] Gráfico de network muestra Git Flow correctamente

### Comandos de Recuperación Probados

- [ ] `git show v2.0.0:archivo` funciona
- [ ] `git diff v2.0.0..v2.0.1` muestra diferencias
- [ ] `git checkout v2.0.0 -- archivo` restaura archivo
- [ ] `git revert` crea commit inverso correctamente

---

## 📸 CAPTURAS DE PANTALLA REQUERIDAS

### Para el Reporte en Word

Toma las siguientes capturas:

1. **Terminal con `git log --graph --oneline --all --decorate`** (mostrando Git Flow)
2. **Terminal con `git branch -a`** (mostrando todas las ramas)
3. **Terminal con `git tag -l`** (mostrando tags)
4. **GitHub: Página principal del repositorio** (con README visible)
5. **GitHub: Pestaña de branches** (mostrando todas las ramas)
6. **GitHub: Pestaña de tags/releases** (mostrando v2.0.0 y v2.0.1)
7. **GitHub: Network graph** (Graph tab, mostrando Git Flow visualmente)
8. **Terminal con `git diff v2.0.0..v2.0.1 --stat`** (diferencias entre versiones)
9. **Terminal con `git show v2.0.0`** (detalles del tag)
10. **GitHub: Commits page** (mostrando Conventional Commits)

---

## 🆘 Solución de Problemas

### Problema: "git: command not found"

**Solución:** Instala Git desde https://git-scm.com/downloads

### Problema: "Permission denied (publickey)"

**Solución:**
```bash
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu.email@ejemplo.com"

# Agregar a ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copiar clave pública
cat ~/.ssh/id_ed25519.pub

# Ir a GitHub Settings > SSH Keys > New SSH Key
# Pegar la clave pública
```

### Problema: "fatal: not a git repository"

**Solución:** Asegúrate de estar en la carpeta correcta con `pwd` y ejecuta `git init`

### Problema: "error: failed to push some refs"

**Solución:**
```bash
# Hacer pull primero
git pull origin main --rebase

# Luego push
git push origin main
```

---

## ✅ ENLACE DEL REPOSITORIO

**Una vez creado tu repositorio, el enlace será:**

```
https://github.com/TU-USUARIO/techprojects-app
```

**Reemplaza `TU-USUARIO` con tu usuario real de GitHub.**

**Ejemplo:**
```
https://github.com/mariagarcia/techprojects-app
```

**Este enlace debe incluirse en:**
- ✅ Tu reporte en Word
- ✅ Tu presentación de video
- ✅ La entrega final de la actividad

---

**¡Listo! Tu repositorio Git está completamente configurado y en GitHub.**

**Documento elaborado por:**  
Equipo de DevOps  
Fecha: 02 de febrero de 2026
