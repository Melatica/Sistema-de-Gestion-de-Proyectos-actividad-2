#!/bin/bash

# 🔧 Script de Automatización - Git Flow Setup
# Este script automatiza la creación del flujo de trabajo Git
# para la actividad académica

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir con color
print_step() {
    echo -e "${BLUE}==>${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Banner
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║         GIT FLOW SETUP - Automatización                   ║"
echo "║         Sistema de Control de Versiones                   ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Verificar que estamos en un proyecto
if [ ! -f "package.json" ]; then
    print_error "No se encontró package.json. ¿Estás en la carpeta del proyecto?"
    exit 1
fi

# Verificar que Git está instalado
if ! command -v git &> /dev/null; then
    print_error "Git no está instalado. Por favor instálalo primero."
    exit 1
fi

print_success "Git encontrado: $(git --version)"

# Verificar si ya existe un repositorio Git
if [ -d ".git" ]; then
    print_warning "Ya existe un repositorio Git en esta carpeta."
    read -p "¿Quieres continuar? Esto puede sobrescribir algunas ramas. (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "Operación cancelada."
        exit 1
    fi
else
    print_step "Inicializando repositorio Git..."
    git init
    print_success "Repositorio inicializado"
fi

# Crear .gitignore si no existe
if [ ! -f ".gitignore" ]; then
    print_step "Creando .gitignore..."
    cat > .gitignore << 'EOF'
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
EOF
    print_success ".gitignore creado"
fi

# Verificar rama actual
CURRENT_BRANCH=$(git branch --show-current)

if [ -z "$CURRENT_BRANCH" ]; then
    # No hay commits aún, hacer primer commit
    print_step "Realizando primer commit..."
    git add .
    git commit -m "Initial commit: Configuración inicial del proyecto" --quiet
    print_success "Commit inicial realizado"
    
    # Renombrar master a main si es necesario
    DEFAULT_BRANCH=$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@')
    if [ "$DEFAULT_BRANCH" = "master" ] || [ -z "$DEFAULT_BRANCH" ]; then
        git branch -M main
        print_success "Rama renombrada a 'main'"
    fi
fi

# Asegurarse de estar en main
print_step "Cambiando a rama main..."
git checkout main 2>/dev/null || git checkout -b main
print_success "En rama main"

# Crear rama develop
print_step "Creando rama develop..."
git checkout -b develop 2>/dev/null || git checkout develop
print_success "Rama develop creada/seleccionada"

# Crear feature/login
print_step "Creando feature/login..."
git checkout -b feature/login 2>/dev/null || git checkout feature/login

# Simular trabajo en feature/login
cat > CHANGELOG_LOGIN.md << EOF
# Feature: Sistema de Login

## Cambios implementados:
- Formulario de login con validación
- Integración con Supabase Auth
- Manejo de errores
- Redirección después de login exitoso

Fecha: $(date)
Autor: Sistema Automatizado
EOF

git add CHANGELOG_LOGIN.md
git commit -m "feat: Implementar sistema de login con validación" --quiet
print_success "Feature login implementada"

# Volver a develop
git checkout develop

# Crear feature/dashboard
print_step "Creando feature/dashboard..."
git checkout -b feature/dashboard 2>/dev/null || git checkout feature/dashboard

# Simular trabajo en feature/dashboard
cat > CHANGELOG_DASHBOARD.md << EOF
# Feature: Dashboard Interactivo

## Cambios implementados:
- Gráficos de Recharts
- Cards de estadísticas
- Filtros dinámicos
- Responsive design

Fecha: $(date)
Autor: Sistema Automatizado
EOF

git add CHANGELOG_DASHBOARD.md
git commit -m "feat: Implementar dashboard con gráficos interactivos" --quiet
print_success "Feature dashboard implementada"

# Merge de feature/login a develop
print_step "Mergeando feature/login a develop..."
git checkout develop
git merge feature/login --no-ff -m "Merge feature/login into develop" --quiet
print_success "Feature login mergeada a develop"

# Merge de feature/dashboard a develop
print_step "Mergeando feature/dashboard a develop..."
git merge feature/dashboard --no-ff -m "Merge feature/dashboard into develop" --quiet
print_success "Feature dashboard mergeada a develop"

# Merge de develop a main (Release)
print_step "Creando release v1.0.0..."
git checkout main
git merge develop --no-ff -m "Release v1.0.0: Primera versión estable" --quiet
git tag -a v1.0.0 -m "Versión 1.0.0 - Primera versión estable"
print_success "Release v1.0.0 creada"

# Crear hotfix
print_step "Creando hotfix..."
git checkout -b hotfix/fix-critical-bug 2>/dev/null || git checkout hotfix/fix-critical-bug

cat > HOTFIX.md << EOF
# Hotfix: Corrección de bug crítico

## Problema:
Error en autenticación que impedía login

## Solución:
- Corregir validación de tokens
- Agregar manejo de errores

Fecha: $(date)
Autor: Sistema Automatizado
EOF

git add HOTFIX.md
git commit -m "hotfix: Corregir bug crítico en autenticación" --quiet
print_success "Hotfix implementado"

# Merge hotfix a main
print_step "Aplicando hotfix a main..."
git checkout main
git merge hotfix/fix-critical-bug --no-ff -m "Hotfix: Corrección crítica v1.0.1" --quiet
git tag -a v1.0.1 -m "Versión 1.0.1 - Hotfix crítico"
print_success "Hotfix aplicado a main"

# Merge hotfix a develop
print_step "Aplicando hotfix a develop..."
git checkout develop
git merge hotfix/fix-critical-bug --no-ff -m "Merge hotfix into develop" --quiet
print_success "Hotfix aplicado a develop"

# Volver a main
git checkout main

# Mostrar resumen
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║                  ✓ Setup Completado                        ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

print_success "Repositorio Git Flow configurado exitosamente!"
echo ""

# Mostrar gráfico
print_step "Estructura de ramas creada:"
git log --oneline --graph --all --decorate -15

echo ""
print_step "Ramas creadas:"
git branch

echo ""
print_step "Tags creados:"
git tag

echo ""
print_step "Siguiente paso:"
echo "  1. Toma las capturas de pantalla según la guía"
echo "  2. Crea un repositorio en GitHub"
echo "  3. Ejecuta: git remote add origin <URL-de-tu-repo>"
echo "  4. Ejecuta: git push -u origin --all"
echo "  5. Ejecuta: git push --tags"
echo ""

print_success "¡Listo para GitHub!"
