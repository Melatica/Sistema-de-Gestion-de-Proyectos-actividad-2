@echo off
REM 🔧 Script de Automatización - Git Flow Setup (Windows)
REM Este script automatiza la creación del flujo de trabajo Git
REM para la actividad académica

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║         GIT FLOW SETUP - Automatización (Windows)         ║
echo ║         Sistema de Control de Versiones                   ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Verificar que estamos en un proyecto
if not exist "package.json" (
    echo [ERROR] No se encontró package.json. ¿Estás en la carpeta del proyecto?
    pause
    exit /b 1
)

REM Verificar que Git está instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git no está instalado. Por favor instálalo primero.
    pause
    exit /b 1
)

echo [OK] Git encontrado
git --version
echo.

REM Verificar si ya existe un repositorio Git
if exist ".git" (
    echo [ADVERTENCIA] Ya existe un repositorio Git en esta carpeta.
    set /p REPLY="¿Quieres continuar? (Y/N): "
    if /i not "!REPLY!"=="Y" (
        echo [ERROR] Operación cancelada.
        pause
        exit /b 1
    )
) else (
    echo [PASO 1] Inicializando repositorio Git...
    git init
    echo [OK] Repositorio inicializado
)

REM Crear .gitignore si no existe
if not exist ".gitignore" (
    echo [PASO 2] Creando .gitignore...
    (
        echo # Dependencies
        echo node_modules/
        echo .pnp
        echo .pnp.js
        echo.
        echo # Testing
        echo /coverage
        echo.
        echo # Production
        echo /build
        echo /dist
        echo.
        echo # Misc
        echo .DS_Store
        echo .env
        echo .env.local
        echo .env.production.local
        echo npm-debug.log*
        echo yarn-debug.log*
        echo yarn-error.log*
        echo.
        echo # IDE
        echo .vscode/
        echo .idea/
        echo *.swp
        echo *.swo
        echo *~
        echo.
        echo # OS
        echo Thumbs.db
    ) > .gitignore
    echo [OK] .gitignore creado
)

REM Hacer primer commit si no hay commits
git rev-parse HEAD >nul 2>nul
if %errorlevel% neq 0 (
    echo [PASO 3] Realizando primer commit...
    git add .
    git commit -m "Initial commit: Configuración inicial del proyecto" --quiet
    echo [OK] Commit inicial realizado
    
    REM Renombrar a main
    git branch -M main
    echo [OK] Rama renombrada a 'main'
)

REM Asegurarse de estar en main
echo [PASO 4] Cambiando a rama main...
git checkout main 2>nul || git checkout -b main
echo [OK] En rama main

REM Crear rama develop
echo [PASO 5] Creando rama develop...
git checkout -b develop 2>nul || git checkout develop
echo [OK] Rama develop creada/seleccionada

REM Crear feature/login
echo [PASO 6] Creando feature/login...
git checkout -b feature/login 2>nul || git checkout feature/login

(
    echo # Feature: Sistema de Login
    echo.
    echo ## Cambios implementados:
    echo - Formulario de login con validación
    echo - Integración con Supabase Auth
    echo - Manejo de errores
    echo - Redirección después de login exitoso
    echo.
    echo Fecha: %date% %time%
    echo Autor: Sistema Automatizado
) > CHANGELOG_LOGIN.md

git add CHANGELOG_LOGIN.md
git commit -m "feat: Implementar sistema de login con validación" --quiet
echo [OK] Feature login implementada

REM Volver a develop
git checkout develop

REM Crear feature/dashboard
echo [PASO 7] Creando feature/dashboard...
git checkout -b feature/dashboard 2>nul || git checkout feature/dashboard

(
    echo # Feature: Dashboard Interactivo
    echo.
    echo ## Cambios implementados:
    echo - Gráficos de Recharts
    echo - Cards de estadísticas
    echo - Filtros dinámicos
    echo - Responsive design
    echo.
    echo Fecha: %date% %time%
    echo Autor: Sistema Automatizado
) > CHANGELOG_DASHBOARD.md

git add CHANGELOG_DASHBOARD.md
git commit -m "feat: Implementar dashboard con gráficos interactivos" --quiet
echo [OK] Feature dashboard implementada

REM Merge de feature/login a develop
echo [PASO 8] Mergeando feature/login a develop...
git checkout develop
git merge feature/login --no-ff -m "Merge feature/login into develop" --quiet
echo [OK] Feature login mergeada a develop

REM Merge de feature/dashboard a develop
echo [PASO 9] Mergeando feature/dashboard a develop...
git merge feature/dashboard --no-ff -m "Merge feature/dashboard into develop" --quiet
echo [OK] Feature dashboard mergeada a develop

REM Merge de develop a main (Release)
echo [PASO 10] Creando release v1.0.0...
git checkout main
git merge develop --no-ff -m "Release v1.0.0: Primera versión estable" --quiet
git tag -a v1.0.0 -m "Versión 1.0.0 - Primera versión estable"
echo [OK] Release v1.0.0 creada

REM Crear hotfix
echo [PASO 11] Creando hotfix...
git checkout -b hotfix/fix-critical-bug 2>nul || git checkout hotfix/fix-critical-bug

(
    echo # Hotfix: Corrección de bug crítico
    echo.
    echo ## Problema:
    echo Error en autenticación que impedía login
    echo.
    echo ## Solución:
    echo - Corregir validación de tokens
    echo - Agregar manejo de errores
    echo.
    echo Fecha: %date% %time%
    echo Autor: Sistema Automatizado
) > HOTFIX.md

git add HOTFIX.md
git commit -m "hotfix: Corregir bug crítico en autenticación" --quiet
echo [OK] Hotfix implementado

REM Merge hotfix a main
echo [PASO 12] Aplicando hotfix a main...
git checkout main
git merge hotfix/fix-critical-bug --no-ff -m "Hotfix: Corrección crítica v1.0.1" --quiet
git tag -a v1.0.1 -m "Versión 1.0.1 - Hotfix crítico"
echo [OK] Hotfix aplicado a main

REM Merge hotfix a develop
echo [PASO 13] Aplicando hotfix a develop...
git checkout develop
git merge hotfix/fix-critical-bug --no-ff -m "Merge hotfix into develop" --quiet
echo [OK] Hotfix aplicado a develop

REM Volver a main
git checkout main

REM Mostrar resumen
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║                  ✓ Setup Completado                        ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

echo [OK] Repositorio Git Flow configurado exitosamente!
echo.

REM Mostrar gráfico
echo [RESUMEN] Estructura de ramas creada:
git log --oneline --graph --all --decorate -15
echo.

echo [RESUMEN] Ramas creadas:
git branch
echo.

echo [RESUMEN] Tags creados:
git tag
echo.

echo [SIGUIENTE PASO]
echo   1. Toma las capturas de pantalla según la guía
echo   2. Crea un repositorio en GitHub
echo   3. Ejecuta: git remote add origin ^<URL-de-tu-repo^>
echo   4. Ejecuta: git push -u origin --all
echo   5. Ejecuta: git push --tags
echo.

echo [OK] ¡Listo para GitHub!
echo.

pause
