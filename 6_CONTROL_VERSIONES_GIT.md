# Sistema de Control de Versiones con Git

## Información del Repositorio

**Nombre del Proyecto:** TechProjects Management App  
**Repositorio:** https://github.com/tu-usuario/techprojects-app  
**Metodología de branching:** Git Flow  
**Fecha de creación:** 02 de febrero de 2026  

---

## 1. Creación del Repositorio

### Paso 1.1: Inicialización Local

```bash
# Crear directorio del proyecto (si no existe)
mkdir techprojects-app
cd techprojects-app

# Inicializar repositorio Git
git init

# Configurar información del usuario
git config user.name "Tu Nombre"
git config user.email "tu-email@ejemplo.com"

# Ver configuración
git config --list
```

### Paso 1.2: Crear Archivo README.md

```bash
# Crear README
cat > README.md << 'EOF'
# TechProjects Management App

## Descripción
Aplicación web full stack de gestión de proyectos para equipos de desarrollo de software.

## Tecnologías
- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Backend:** Node.js, Supabase (PostgreSQL)
- **Testing:** Vitest, React Testing Library
- **Deployment:** Vercel / Netlify

## Instalación
```bash
npm install
npm run dev
```

## Scripts Disponibles
- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm test` - Ejecutar pruebas
- `npm run test:coverage` - Reporte de cobertura

## Contribución
Ver [CONTRIBUTING.md](CONTRIBUTING.md) para guía de contribución.

## Licencia
MIT
EOF
```

### Paso 1.3: Crear .gitignore

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
lerna-debug.log*

# Editor directories and files
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS
Thumbs.db
EOF
```

### Paso 1.4: Primer Commit

```bash
# Agregar archivos al staging area
git add .

# Hacer el primer commit
git commit -m "Initial commit: Setup project structure"

# Ver el log
git log --oneline
```

**Salida esperada:**
```
a1b2c3d (HEAD -> main) Initial commit: Setup project structure
```

---

## 2. Creación de Ramas y Flujo de Trabajo (Git Flow)

### 2.1 Estructura de Ramas

```
main (producción)
  │
  ├── develop (desarrollo)
  │     │
  │     ├── feature/dashboard-improvements
  │     ├── feature/kanban-filters
  │     ├── feature/notifications
  │     │
  │     ├── bugfix/date-filter-error
  │     ├── bugfix/mobile-responsive
  │     │
  │     └── release/v2.0
  │
  └── hotfix/critical-security-patch
```

### 2.2: Crear Rama de Desarrollo

```bash
# Crear y cambiar a rama develop
git checkout -b develop

# Verificar rama actual
git branch
```

**Salida:**
```
* develop
  main
```

### 2.3: Crear Ramas de Feature (Funcionalidades)

#### Feature 1: Mejoras del Dashboard

```bash
# Crear rama de feature desde develop
git checkout develop
git checkout -b feature/dashboard-improvements

# Trabajar en el feature...
# (Hacer cambios en archivos)

# Agregar cambios
git add src/app/pages/Dashboard.tsx
git add src/app/components/ui/chart.tsx

# Commit con mensaje descriptivo
git commit -m "feat(dashboard): Add interactive charts with recharts

- Implemented projects by status chart
- Added tasks by priority chart
- Interactive tooltips for better UX
- Responsive design for mobile

Closes #US-01"

# Ver cambios
git log --oneline -3
```

#### Feature 2: Filtros en Kanban

```bash
# Volver a develop
git checkout develop

# Crear nueva rama de feature
git checkout -b feature/kanban-filters

# Hacer cambios...
git add src/app/pages/ProjectDetails.tsx
git add src/app/components/KanbanFilters.tsx

git commit -m "feat(kanban): Add filtering system for tasks

- Filter by status, priority, assigned user
- Text search functionality
- Clear all filters button
- Persist filters in URL params

Closes #US-08"
```

#### Feature 3: Sistema de Notificaciones

```bash
git checkout develop
git checkout -b feature/notifications

# Implementar notificaciones...
git add src/app/components/NotificationCenter.tsx
git add src/app/hooks/useNotifications.ts

git commit -m "feat(notifications): Implement real-time notification system

- Real-time notifications with Supabase subscriptions
- Toast notifications for immediate feedback
- Notification center with history
- Mark as read/unread functionality
- Notification preferences

Closes #US-15, #US-16"
```

### 2.4: Merge de Features a Develop

```bash
# Volver a develop
git checkout develop

# Mergear feature/dashboard-improvements
git merge feature/dashboard-improvements --no-ff -m "Merge feature/dashboard-improvements into develop"

# Mergear feature/kanban-filters
git merge feature/kanban-filters --no-ff -m "Merge feature/kanban-filters into develop"

# Mergear feature/notifications
git merge feature/notifications --no-ff -m "Merge feature/notifications into develop"

# Ver historial con gráfico
git log --graph --oneline --all -10
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
* 7e8f9a0 Initial commit: Setup project structure
```

### 2.5: Crear Ramas de Bugfix

```bash
# Crear rama de bugfix
git checkout develop
git checkout -b bugfix/date-filter-error

# Corregir bug...
git add src/app/components/KanbanFilters.tsx

git commit -m "fix(kanban): Correct date filter comparison logic

The date filter was comparing strings instead of Date objects,
causing incorrect filtering results.

- Convert string dates to Date objects before comparison
- Add unit tests for date filtering
- Update documentation

Fixes #BUG-123"

# Mergear a develop
git checkout develop
git merge bugfix/date-filter-error --no-ff -m "Merge bugfix/date-filter-error into develop"
```

### 2.6: Crear Rama de Release

```bash
# Crear rama de release desde develop
git checkout develop
git checkout -b release/v2.0

# Actualizar versión en package.json
nano package.json  # Cambiar version a "2.0.0"

git add package.json
git commit -m "chore(release): Bump version to 2.0.0"

# Actualizar CHANGELOG
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

# Mergear release a main
git checkout main
git merge release/v2.0 --no-ff -m "Merge release/v2.0 into main"

# Crear tag de versión
git tag -a v2.0.0 -m "Release version 2.0.0

Major UI/UX improvements including:
- Interactive dashboard with charts
- Advanced filtering system
- Real-time notifications
- Full mobile support
- Dark mode"

# Mergear release a develop también
git checkout develop
git merge release/v2.0 --no-ff -m "Merge release/v2.0 into develop"

# Ver tags
git tag -l
```

**Salida:**
```
v1.0.0
v2.0.0
```

### 2.7: Crear Hotfix (Parche Urgente)

```bash
# Crear hotfix directamente desde main
git checkout main
git checkout -b hotfix/critical-security-patch

# Aplicar parche de seguridad...
git add src/lib/security.ts

git commit -m "fix(security): Patch XSS vulnerability in user input

CRITICAL SECURITY PATCH

- Sanitize all user inputs before rendering
- Add DOMPurify library for HTML sanitization
- Update Content Security Policy headers
- Add security tests

CVE-2026-12345"

# Mergear a main
git checkout main
git merge hotfix/critical-security-patch --no-ff -m "Merge hotfix/critical-security-patch into main"

# Crear tag de parche
git tag -a v2.0.1 -m "Security patch v2.0.1 - Fix XSS vulnerability"

# Mergear también a develop
git checkout develop
git merge hotfix/critical-security-patch --no-ff -m "Merge hotfix/critical-security-patch into develop"
```

---

## 3. Repositorio Remoto en GitHub

### 3.1: Crear Repositorio en GitHub

```bash
# Método 1: Usando GitHub CLI
gh repo create techprojects-app --public --source=. --remote=origin

# Método 2: Manualmente
# 1. Ir a https://github.com/new
# 2. Nombre: techprojects-app
# 3. Descripción: "Full stack project management application"
# 4. Public
# 5. NO inicializar con README (ya lo tenemos)
# 6. Create repository
```

### 3.2: Agregar Remoto y Push

```bash
# Agregar remote (si creaste manualmente)
git remote add origin https://github.com/tu-usuario/techprojects-app.git

# Verificar remote
git remote -v

# Push de todas las ramas
git push -u origin main
git push -u origin develop

# Push de todas las ramas de features
git push origin feature/dashboard-improvements
git push origin feature/kanban-filters
git push origin feature/notifications

# Push de tags
git push origin --tags

# Ver todas las ramas (locales y remotas)
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
  hotfix/critical-security-patch
  remotes/origin/main
  remotes/origin/develop
  remotes/origin/feature/dashboard-improvements
  remotes/origin/feature/kanban-filters
  remotes/origin/feature/notifications
```

---

## 4. Recuperación de Versiones Anteriores

### 4.1: Ver Historial de Commits

```bash
# Ver historial completo
git log --oneline --graph --all --decorate

# Ver historial de un archivo específico
git log --oneline -- src/app/pages/Dashboard.tsx

# Ver cambios de un commit específico
git show a1b2c3d

# Ver diferencias entre dos commits
git diff v1.0.0 v2.0.0
```

### 4.2: Recuperar Archivo de Versión Anterior

```bash
# Ver versión anterior de un archivo
git show v1.0.0:src/app/pages/Dashboard.tsx

# Restaurar archivo a versión específica (mantiene historial)
git checkout v1.0.0 -- src/app/pages/Dashboard.tsx
git commit -m "revert(dashboard): Restore dashboard to v1.0.0 version"

# Ver diferencia
git diff HEAD~1
```

### 4.3: Revertir Commit (Crear Commit Inverso)

```bash
# Revertir último commit (crea nuevo commit)
git revert HEAD

# Revertir commit específico
git revert a1b2c3d

# Revertir múltiples commits
git revert HEAD~3..HEAD

# Ver resultado
git log --oneline -5
```

**Ejemplo de salida:**
```
e6f7g8h (HEAD -> develop) Revert "feat(notifications): Implement real-time notification system"
d4e5f6g feat(notifications): Implement real-time notification system
c3d4e5f feat(kanban): Add filtering system for tasks
b2c3d4e feat(dashboard): Add interactive charts
a1b2c3d Initial commit
```

### 4.4: Regresar a Estado Anterior (Hard Reset)

```bash
# ⚠️ CUIDADO: Esto borra cambios permanentemente

# Ver estado antes de reset
git log --oneline -5

# Regresar a commit específico (DESTRUYE cambios posteriores)
git reset --hard a1b2c3d

# Recuperar estado anterior del reset (si fue reciente)
git reflog  # Ver historial de cambios de HEAD
git reset --hard HEAD@{1}  # Regresar al estado antes del reset
```

### 4.5: Crear Rama desde Versión Anterior

```bash
# Crear rama desde tag específico
git checkout -b restore-v1.0 v1.0.0

# Hacer cambios si es necesario
git add .
git commit -m "fix: Apply critical fix to v1.0"

# Crear nuevo tag
git tag -a v1.0.1 -m "Patch for v1.0 branch"

# Push
git push origin restore-v1.0
git push origin v1.0.1
```

### 4.6: Comparar Versiones

```bash
# Comparar dos tags
git diff v1.0.0..v2.0.0

# Comparar solo archivos cambiados
git diff --name-only v1.0.0 v2.0.0

# Comparar estadísticas de cambios
git diff --stat v1.0.0 v2.0.0
```

**Salida esperada:**
```
CHANGELOG.md                                  | 20 +++++++
package.json                                  |  2 +-
src/app/pages/Dashboard.tsx                   | 150 +++++++++++++++++++++++++++++++++
src/app/components/NotificationCenter.tsx     | 95 ++++++++++++++++++++++
src/app/components/ui/chart.tsx               | 68 ++++++++++++++++
5 files changed, 334 insertions(+), 1 deletion(-)
```

---

## 5. Flujo de Trabajo Diario

### 5.1: Comenzar Nuevo Feature

```bash
# 1. Actualizar develop
git checkout develop
git pull origin develop

# 2. Crear rama de feature
git checkout -b feature/nueva-funcionalidad

# 3. Trabajar en el código...
# (editar archivos)

# 4. Commits frecuentes
git add .
git commit -m "feat(modulo): Descripción del cambio"

# 5. Push a remoto regularmente
git push -u origin feature/nueva-funcionalidad
```

### 5.2: Actualizar Feature con Cambios de Develop

```bash
# Estando en tu feature branch
git checkout feature/nueva-funcionalidad

# Opción 1: Rebase (historial más limpio)
git fetch origin
git rebase origin/develop

# Opción 2: Merge (preserva historial completo)
git merge origin/develop

# Resolver conflictos si existen...
git add .
git rebase --continue  # si usaste rebase
# o
git commit  # si usaste merge

# Push (puede requerir force si usaste rebase)
git push origin feature/nueva-funcionalidad --force-with-lease
```

### 5.3: Crear Pull Request

```bash
# Push final
git push origin feature/nueva-funcionalidad

# Usando GitHub CLI
gh pr create \
  --title "feat(modulo): Nueva funcionalidad" \
  --body "## Descripción
  
Esta PR implementa [descripción de la funcionalidad].

## Cambios
- Item 1
- Item 2
- Item 3

## Testing
- [x] Pruebas unitarias pasando
- [x] Pruebas de integración pasando
- [x] Verificado en Chrome, Firefox, Safari

## Screenshots
[Adjuntar capturas de pantalla]

Closes #US-XX" \
  --base develop \
  --head feature/nueva-funcionalidad
```

### 5.4: Code Review y Merge

```bash
# Revisar PR en GitHub
# Después de aprobación, mergear (en GitHub)

# Localmente, limpiar rama merged
git checkout develop
git pull origin develop
git branch -d feature/nueva-funcionalidad
git push origin --delete feature/nueva-funcionalidad
```

---

## 6. Convenciones de Commits (Conventional Commits)

### 6.1: Formato de Mensaje de Commit

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 6.2: Types (Tipos)

| Type | Descripción | Ejemplo |
|------|-------------|---------|
| **feat** | Nueva funcionalidad | `feat(auth): Add password reset feature` |
| **fix** | Corrección de bug | `fix(kanban): Resolve drag & drop issue` |
| **docs** | Cambios en documentación | `docs(readme): Update installation guide` |
| **style** | Formato, punto y coma, etc (no cambia código) | `style(dashboard): Format with Prettier` |
| **refactor** | Refactorización de código | `refactor(api): Simplify data fetching logic` |
| **perf** | Mejora de rendimiento | `perf(dashboard): Optimize chart rendering` |
| **test** | Agregar o modificar pruebas | `test(auth): Add unit tests for login` |
| **chore** | Mantenimiento, deps, etc | `chore(deps): Update React to 18.3.1` |
| **ci** | Cambios en CI/CD | `ci(github): Add automated testing workflow` |
| **build** | Cambios en build system | `build(vite): Update vite config` |
| **revert** | Revertir commit anterior | `revert: Revert "feat(notifications)"` |

### 6.3: Ejemplos de Buenos Commits

```bash
# Feature nuevo
git commit -m "feat(notifications): Implement real-time push notifications

- Add Supabase real-time subscriptions
- Create NotificationCenter component
- Add notification preferences page
- Implement toast notifications with sonner

Closes #US-15"

# Bugfix
git commit -m "fix(kanban): Prevent task duplication on drag

When dragging tasks quickly, duplicate items were being created
due to race condition in state update.

- Add debounce to drag handler
- Implement optimistic updates with rollback
- Add integration test for drag behavior

Fixes #BUG-456"

# Documentación
git commit -m "docs(api): Add JSDoc comments to all API functions

Improves developer experience by providing inline documentation
for all exported API functions."

# Performance
git commit -m "perf(dashboard): Lazy load chart components

- Use React.lazy for chart imports
- Add Suspense boundaries
- Reduce initial bundle size by 150KB
- Improve First Contentful Paint by 0.8s"

# Test
git commit -m "test(auth): Add comprehensive authentication tests

- Unit tests for login/logout/signup
- Integration tests for auth flow
- Mock Supabase client
- Achieve 95% coverage in auth module"
```

---

## 7. Comandos Git Útiles

### 7.1: Información y Estado

```bash
# Ver estado actual
git status

# Ver cambios no staged
git diff

# Ver cambios staged
git diff --staged

# Ver historial
git log --oneline --graph --all --decorate -20

# Ver quien modificó cada línea
git blame src/app/App.tsx

# Buscar en commits
git log --grep="notification"

# Buscar en código
git grep "useState" src/
```

### 7.2: Stash (Guardar Cambios Temporalmente)

```bash
# Guardar cambios sin commit
git stash

# Guardar con mensaje descriptivo
git stash save "WIP: Working on notifications"

# Listar stashes
git stash list

# Aplicar último stash
git stash apply

# Aplicar y eliminar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{2}

# Eliminar stash
git stash drop stash@{0}

# Ver contenido de stash
git stash show -p stash@{0}
```

### 7.3: Limpieza

```bash
# Ver archivos que serían eliminados
git clean -n

# Eliminar archivos no trackeados
git clean -f

# Eliminar directorios también
git clean -fd

# Eliminar archivos ignorados también
git clean -fX

# Eliminar TODO (cuidado)
git clean -fdx
```

### 7.4: Alias Útiles

```bash
# Configurar alias globales
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --oneline --graph --all --decorate'
git config --global alias.amend 'commit --amend --no-edit'

# Usar alias
git st
git visual
git last
```

---

## 8. GitHub Actions (CI/CD)

### 8.1: Workflow de Testing Automático

Crear archivo `.github/workflows/test.yml`:

```yaml
name: Run Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test:run
      
      - name: Generate coverage report
        run: npm run test:coverage
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
```

---

## 9. Estructura Final del Repositorio

```
techprojects-app/
├── .github/
│   └── workflows/
│       ├── test.yml
│       └── deploy.yml
├── docs/
│   ├── 1_SELECCION_HARDWARE.md
│   ├── 2_LICITACION_PROVEEDORES.md
│   ├── 3_MONITOREO_Y_SEGURIDAD.md
│   ├── 4_PRUEBAS_SISTEMA.md
│   ├── 5_METODOLOGIA_SCRUM.md
│   └── 6_CONTROL_VERSIONES_GIT.md
├── src/
│   ├── app/
│   ├── tests/
│   ├── lib/
│   └── styles/
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── README.md
├── package.json
├── vitest.config.ts
└── vite.config.ts
```

---

## 10. Resumen de Comandos Clave

### Comandos Más Usados

```bash
# Inicialización
git init
git clone <url>

# Ramas
git branch                      # Listar ramas
git branch <name>               # Crear rama
git checkout <name>             # Cambiar a rama
git checkout -b <name>          # Crear y cambiar
git merge <branch>              # Mergear rama
git branch -d <name>            # Eliminar rama

# Cambios
git status                      # Ver estado
git add <file>                  # Agregar archivo
git add .                       # Agregar todos
git commit -m "message"         # Commit
git commit --amend              # Modificar último commit

# Sincronización
git fetch origin                # Obtener cambios remotos
git pull origin <branch>        # Fetch + Merge
git push origin <branch>        # Enviar cambios

# Historial
git log                         # Ver commits
git log --oneline --graph       # Vista gráfica
git diff                        # Ver diferencias
git show <commit>               # Ver commit específico

# Deshacer cambios
git checkout -- <file>          # Descartar cambios
git reset HEAD <file>           # Unstage archivo
git revert <commit>             # Revertir commit
git reset --hard <commit>       # ⚠️ Eliminar historial
```

---

## Conclusión

El sistema de control de versiones con Git implementado para este proyecto proporciona:

- ✅ **Trazabilidad completa** de todos los cambios
- ✅ **Colaboración eficiente** entre miembros del equipo
- ✅ **Gestión de versiones** clara con tags semánticos
- ✅ **Flujo de trabajo estructurado** con Git Flow
- ✅ **Recuperación fácil** de versiones anteriores
- ✅ **Integración continua** con GitHub Actions
- ✅ **Documentación clara** de cambios con Conventional Commits

**Repositorio público:** https://github.com/tu-usuario/techprojects-app

---

**Documento elaborado por:**  
Equipo de DevOps  
TechProjects Management Solutions  
Fecha: 02 de febrero de 2026
