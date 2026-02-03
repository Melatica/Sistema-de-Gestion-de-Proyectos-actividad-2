# 📸 Guía de Capturas - Control de Versiones Git

## 🎯 Objetivo

Capturar todas las evidencias necesarias para demostrar el dominio del sistema de control de versiones con Git y GitHub, cumpliendo con el requisito 6 de la actividad.

---

## 📋 CAPTURAS REQUERIDAS - PUNTO 6 (Git)

### Total de capturas: **22 capturas mínimas**

**Desglose:**
- Configuración y Setup: 3 capturas
- Ramas y Git Flow: 5 capturas
- Recuperación de versiones: 4 capturas
- Git Flow completo: 1 captura
- GitHub: 9 capturas

---

## 🔧 PREPARACIÓN ANTES DE EMPEZAR

### ✅ Requisitos:
1. ✅ Git instalado (`git --version`)
2. ✅ Terminal/CMD abierto
3. ✅ Cuenta en GitHub creada
4. ✅ Herramienta de capturas lista

### 🎨 Configuración del terminal (recomendado):

**Windows (PowerShell):**
- Fuente: Consolas o Cascadia Code
- Tamaño: 12pt
- Colores: Tema oscuro o claro según preferencia

**Mac/Linux:**
- Terminal integrado o iTerm2
- Tema con buen contraste

### 📸 Herramientas de captura:

- **Windows:** Win + Shift + S (Snipping Tool)
- **Mac:** Cmd + Shift + 4
- **Linux:** Flameshot, Shutter, o Screenshot

---

## 📸 CAPTURA 5.1: Configuración de Git

### 📝 **Qué capturar:**
Terminal mostrando la configuración de Git con tu nombre y email

### 🎬 **Pasos:**

```bash
# Ver configuración completa
git config --list
```

**Deberías ver:**
```
user.name=Tu Nombre Completo
user.email=tu.email@ejemplo.com
core.editor=...
color.ui=auto
...
```

### ✅ **Verificar que se vea:**
- ✅ `user.name` con tu nombre
- ✅ `user.email` con tu email
- ✅ Configuraciones de color
- ✅ Editor configurado (opcional)

### 💾 **Guardar como:**
```
Captura_5.1_Git_Config.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.1:** "Configuración del Entorno Git"

---

## 📸 CAPTURA 5.2: Inicialización del Repositorio

### 📝 **Qué capturar:**
Terminal mostrando `git init` exitoso y creación de la carpeta .git

### 🎬 **Pasos:**

```bash
# Navegar a tu proyecto
cd /ruta/a/tu/proyecto

# Inicializar
git init

# Verificar
ls -la
```

**Output esperado:**
```
Initialized empty Git repository in /ruta/a/tu/proyecto/.git/
```

### ✅ **Verificar que se vea:**
- ✅ Mensaje "Initialized empty Git repository"
- ✅ Carpeta `.git/` en el listado (si haces ls -la)
- ✅ Ruta completa del proyecto

### 💾 **Guardar como:**
```
Captura_5.2_Git_Init.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.2:** "Creación del Repositorio Local"

---

## 📸 CAPTURA 5.3: Primer Commit

### 📝 **Qué capturar:**
Terminal mostrando:
1. `git status` (archivos sin trackear)
2. `git add .` 
3. `git commit` exitoso
4. `git log --oneline` con el commit inicial

### 🎬 **Pasos:**

```bash
# Ver estado
git status

# Agregar todo
git add .

# Ver que está en staging
git status

# Commitear
git commit -m "Initial commit: Configuración inicial del proyecto"

# Ver log
git log --oneline
```

### ✅ **Verificar que se vea:**
- ✅ Lista de archivos agregados (verde)
- ✅ Mensaje de commit exitoso
- ✅ Hash del commit
- ✅ Mensaje "Initial commit: ..."

### 💾 **Guardar como:**
```
Captura_5.3_Primer_Commit.png
```

### 💡 **Tip:**
Si la captura es muy larga, puedes hacer 2 capturas:
- `Captura_5.3a_Git_Status.png` (git status)
- `Captura_5.3b_Git_Log.png` (git log)

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.2:** "Primer Commit del Proyecto"

---

## 📸 CAPTURA 5.4: Creación de Ramas

### 📝 **Qué capturar:**
Terminal mostrando `git branch` con la rama `develop` activa (*)

### 🎬 **Pasos:**

```bash
# Crear rama develop
git checkout -b develop

# Ver ramas
git branch
```

**Output esperado:**
```
* develop
  main
```

### ✅ **Verificar que se vea:**
- ✅ Asterisco (*) en develop
- ✅ Lista de ramas (main y develop)
- ✅ Comando ejecutado arriba

### 💾 **Guardar como:**
```
Captura_5.4_Ramas_Develop.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.3:** "Creación de Ramas (Git Flow)"

---

## 📸 CAPTURA 5.5: Gráfico de Ramas Inicial

### 📝 **Qué capturar:**
Terminal mostrando gráfico de ramas con `git log --oneline --graph --all`

### 🎬 **Pasos:**

```bash
# Crear rama feature
git checkout -b feature/login

# Hacer un commit
echo "Login feature" > login.txt
git add login.txt
git commit -m "feat: Implementar sistema de login"

# Ver gráfico
git log --oneline --graph --all --decorate
```

**Output esperado:**
```
* 3f8a9b2 (HEAD -> feature/login) feat: Implementar sistema de login
* 2d7e1c4 (develop, main) Initial commit: Configuración inicial
```

### ✅ **Verificar que se vea:**
- ✅ Gráfico con asteriscos (*)
- ✅ Commits con mensajes
- ✅ Nombres de ramas en paréntesis
- ✅ HEAD apuntando a la rama actual

### 💾 **Guardar como:**
```
Captura_5.5_Grafico_Ramas.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.3:** "Visualización del Árbol de Ramas"

---

## 📸 CAPTURA 5.6: Múltiples Features

### 📝 **Qué capturar:**
Gráfico mostrando múltiples ramas feature en paralelo

### 🎬 **Pasos:**

```bash
# Volver a develop
git checkout develop

# Crear otra feature
git checkout -b feature/dashboard

# Hacer commit
echo "Dashboard feature" > dashboard.txt
git add dashboard.txt
git commit -m "feat: Implementar dashboard interactivo"

# Ver gráfico completo
git log --oneline --graph --all --decorate
```

**Output esperado:**
```
* 5c9d2a1 (HEAD -> feature/dashboard) feat: Implementar dashboard
| * 3f8a9b2 (feature/login) feat: Implementar sistema de login
|/  
* 2d7e1c4 (develop, main) Initial commit
```

### ✅ **Verificar que se vea:**
- ✅ Ramas divergentes (líneas separadas)
- ✅ Al menos 2 features
- ✅ main y develop en la base
- ✅ Commits en cada rama

### 💾 **Guardar como:**
```
Captura_5.6_Multiples_Features.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.3:** "Trabajo en Paralelo con Múltiples Features"

---

## 📸 CAPTURA 5.7: Merge de Feature

### 📝 **Qué capturar:**
Terminal mostrando el proceso de merge de feature a develop

### 🎬 **Pasos:**

```bash
# Cambiar a develop
git checkout develop

# Merge de feature/login
git merge feature/login --no-ff -m "Merge feature/login into develop"

# Ver resultado
git log --oneline --graph --all --decorate -5
```

### ✅ **Verificar que se vea:**
- ✅ Comando de merge
- ✅ Mensaje "Merge made by..."
- ✅ Gráfico mostrando el merge
- ✅ Líneas convergentes

### 💾 **Guardar como:**
```
Captura_5.7_Merge_Feature.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.3:** "Integración de Features en Develop"

---

## 📸 CAPTURA 5.8: Release y Tag

### 📝 **Qué capturar:**
Gráfico mostrando merge a main con tag v1.0.0

### 🎬 **Pasos:**

```bash
# Merge develop a main
git checkout main
git merge develop --no-ff -m "Release v1.0.0: Primera versión estable"

# Crear tag
git tag -a v1.0.0 -m "Versión 1.0.0 - Primera versión estable"

# Ver gráfico con tag
git log --oneline --graph --all --decorate -10
```

**Output esperado:**
```
*   6e8f3b2 (HEAD -> main, tag: v1.0.0) Release v1.0.0
|\  
| *   4d7a2c1 (develop) Merge feature/login into develop
| |\  
| | * 3f8a9b2 (feature/login) feat: Implementar sistema de login
| |/  
| * 2d7e1c4 Initial commit
```

### ✅ **Verificar que se vea:**
- ✅ Tag "v1.0.0" visible
- ✅ Merge a main
- ✅ Historial de features
- ✅ Estructura completa del flujo

### 💾 **Guardar como:**
```
Captura_5.8_Release_Tag.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.3:** "Creación de Release y Versionado"

---

## 📸 CAPTURA 5.9: Commit para Revertir

### 📝 **Qué capturar:**
Creación de commit temporal que será revertido

### 🎬 **Pasos:**

```bash
# Crear archivo temporal
echo "Este archivo será revertido" > temporal.txt

# Agregar y commitear
git add temporal.txt
git commit -m "test: Agregar archivo temporal para demostrar revert"

# Ver log
git log --oneline -3
```

### ✅ **Verificar que se vea:**
- ✅ Commit temporal en el log
- ✅ Hash del commit
- ✅ Mensaje descriptivo

### 💾 **Guardar como:**
```
Captura_5.9_Commit_Temporal.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.4:** "Preparación para Recuperación de Versión"

---

## 📸 CAPTURA 5.10: Git Revert

### 📝 **Qué capturar:**
Proceso completo de revert mostrando que se deshizo el commit

### 🎬 **Pasos:**

```bash
# Revertir último commit
git revert HEAD --no-edit

# Ver log
git log --oneline -5

# Verificar que temporal.txt ya no existe
ls temporal.txt
```

### ✅ **Verificar que se vea:**
- ✅ Comando `git revert HEAD`
- ✅ Nuevo commit "Revert..."
- ✅ Log mostrando ambos commits (original y revert)
- ✅ Archivo no existe (error "No such file")

### 💾 **Guardar como:**
```
Captura_5.10_Git_Revert.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.4:** "Recuperación de Versión con Git Revert"

---

## 📸 CAPTURA 5.11: Checkout de Versión Anterior

### 📝 **Qué capturar:**
Checkout temporal de un tag anterior

### 🎬 **Pasos:**

```bash
# Ver tags
git tag

# Checkout de versión anterior
git checkout v1.0.0

# Ver mensaje de detached HEAD
git status

# Ver log de esa versión
git log --oneline -3
```

### ✅ **Verificar que se vea:**
- ✅ Mensaje "You are in 'detached HEAD' state"
- ✅ Log de la versión v1.0.0
- ✅ Explicación de qué hacer

### 💾 **Guardar como:**
```
Captura_5.11_Checkout_Version.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.4:** "Navegación entre Versiones"

---

## 📸 CAPTURA 5.12: Git Reset (Demostración)

### 📝 **Qué capturar:**
Demostración de git reset en rama de prueba

### 🎬 **Pasos:**

```bash
# Volver a main
git checkout main

# Crear rama de prueba
git checkout -b test-reset

# Crear commit de prueba
echo "Test" > test.txt
git add test.txt
git commit -m "test: Commit para demostrar reset"

# Ver log
git log --oneline -3

# Reset
git reset --hard HEAD~1

# Ver que desapareció
git log --oneline -3
```

### ✅ **Verificar que se vea:**
- ✅ Log ANTES del reset (con commit test)
- ✅ Comando `git reset --hard HEAD~1`
- ✅ Log DESPUÉS del reset (sin commit test)

### 💾 **Guardar como:**
```
Captura_5.12_Git_Reset.png
```

### 💡 **Tip:**
Puedes hacer 2 capturas:
- Antes del reset
- Después del reset

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.4:** "Métodos de Recuperación: Git Reset"

---

## 📸 CAPTURA 5.13: Git Flow Completo con Hotfix

### 📝 **Qué capturar:**
Gráfico final mostrando todo el flujo incluyendo hotfix

### 🎬 **Pasos:**

```bash
# Volver a main
git checkout main

# Crear hotfix
git checkout -b hotfix/fix-critical-bug

# Hacer cambios
echo "Hotfix aplicado" > hotfix.txt
git add hotfix.txt
git commit -m "hotfix: Corregir bug crítico en autenticación"

# Merge a main
git checkout main
git merge hotfix/fix-critical-bug --no-ff
git tag -a v1.0.1 -m "Versión 1.0.1 - Hotfix crítico"

# Merge a develop también
git checkout develop
git merge hotfix/fix-critical-bug --no-ff

# Ver gráfico COMPLETO
git log --oneline --graph --all --decorate -15
```

### ✅ **Verificar que se vea:**
- ✅ Rama main con tags (v1.0.0, v1.0.1)
- ✅ Rama develop
- ✅ Features mergeadas
- ✅ Hotfix aplicado a ambas ramas
- ✅ Estructura completa del Git Flow

### 💾 **Guardar como:**
```
Captura_5.13_Git_Flow_Completo.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.5:** "Flujo de Trabajo Completo (Git Flow)"

---

## 🌐 CAPTURAS DE GITHUB (9 capturas)

## 📸 CAPTURA 5.14: Crear Repositorio en GitHub

### 📝 **Qué capturar:**
Formulario de creación de repositorio en GitHub

### 🎬 **Pasos:**

1. Abrir https://github.com
2. Click en "+" arriba a la derecha
3. Click en "New repository"
4. **NO COMPLETAR AÚN**, solo capturar el formulario vacío

### ✅ **Verificar que se vea:**
- ✅ Campo "Repository name"
- ✅ Campo "Description"
- ✅ Opciones Public/Private
- ✅ Checkboxes de inicialización
- ✅ Botón "Create repository"

### 💾 **Guardar como:**
```
Captura_5.14_GitHub_Crear_Repo.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.6:** "Creación de Repositorio Público en GitHub"

---

## 📸 CAPTURA 5.15: Instrucciones Post-Creación

### 📝 **Qué capturar:**
Página que GitHub muestra después de crear el repositorio

### 🎬 **Pasos:**

1. Completar formulario:
   - Name: `gestion-proyectos-scrum`
   - Description: "Sistema de gestión con Scrum"
   - ✅ Public
   - ❌ NO marcar "Initialize with README"
2. Click "Create repository"
3. **CAPTURAR** la página de instrucciones

### ✅ **Verificar que se vea:**
- ✅ URL del repositorio
- ✅ Sección "Quick setup"
- ✅ Comandos para push desde terminal
- ✅ Código `git remote add origin`

### 💾 **Guardar como:**
```
Captura_5.15_GitHub_Instrucciones.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.6:** "Configuración del Repositorio Remoto"

---

## 📸 CAPTURA 5.16: Git Remote

### 📝 **Qué capturar:**
Terminal mostrando `git remote -v` con la conexión a GitHub

### 🎬 **Pasos:**

```bash
# Agregar remote (usa TU URL)
git remote add origin https://github.com/tu-usuario/gestion-proyectos-scrum.git

# Verificar
git remote -v
```

**Output esperado:**
```
origin  https://github.com/tu-usuario/gestion-proyectos-scrum.git (fetch)
origin  https://github.com/tu-usuario/gestion-proyectos-scrum.git (push)
```

### ✅ **Verificar que se vea:**
- ✅ Nombre "origin"
- ✅ URL completa de tu repositorio
- ✅ (fetch) y (push) en líneas separadas

### 💾 **Guardar como:**
```
Captura_5.16_Git_Remote.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.6:** "Conexión con Repositorio Remoto"

---

## 📸 CAPTURA 5.17: Push a GitHub

### 📝 **Qué capturar:**
Terminal mostrando push exitoso a GitHub

### 🎬 **Pasos:**

```bash
# Push de main
git push -u origin main

# Push de develop
git push -u origin develop

# Push de tags
git push --tags origin
```

### ✅ **Verificar que se vea:**
- ✅ Barra de progreso (Counting objects, Writing objects)
- ✅ Mensaje "Branch 'main' set up to track..."
- ✅ URL del repositorio
- ✅ Tags pushed

### 💾 **Guardar como:**
```
Captura_5.17_Git_Push.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.6:** "Sincronización con GitHub"

---

## 📸 CAPTURA 5.18: Repositorio en GitHub (Principal)

### 📝 **Qué capturar:**
Página principal del repositorio en GitHub

### 🎬 **Pasos:**

1. Recarga la página de tu repositorio en GitHub
2. **CAPTURAR** la vista principal

### ✅ **Verificar que se vea:**
- ✅ Nombre del repositorio arriba
- ✅ Descripción
- ✅ Lista de archivos/carpetas
- ✅ README renderizado (si existe)
- ✅ Último commit
- ✅ Número de commits, branches, tags
- ✅ Botón "Code" verde

### 💾 **Guardar como:**
```
Captura_5.18_GitHub_Repo_Principal.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.7:** "Repositorio Público en GitHub"

---

## 📸 CAPTURA 5.19: Branches en GitHub

### 📝 **Qué capturar:**
Pestaña "Branches" mostrando todas las ramas

### 🎬 **Pasos:**

1. En tu repositorio de GitHub
2. Click en el botón que dice "main" (desplegable de ramas)
3. Click en "View all branches"
4. **CAPTURAR** la lista de ramas

### ✅ **Verificar que se vea:**
- ✅ Lista de ramas (main, develop, features, hotfix)
- ✅ Rama "Default" marcada (main)
- ✅ Último commit de cada rama
- ✅ Cuándo fue el último update

### 💾 **Guardar como:**
```
Captura_5.19_GitHub_Branches.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.7:** "Ramas del Repositorio"

---

## 📸 CAPTURA 5.20: Tags en GitHub

### 📝 **Qué capturar:**
Pestaña mostrando los tags/releases

### 🎬 **Pasos:**

1. En tu repositorio
2. Click en "Releases" (lado derecho)
3. O click en "tags" (arriba del código)
4. **CAPTURAR** lista de tags

### ✅ **Verificar que se vea:**
- ✅ Tag v1.0.0 con mensaje
- ✅ Tag v1.0.1 con mensaje
- ✅ Fecha de creación
- ✅ Commit asociado
- ✅ Opción de descargar ZIP/TAR

### 💾 **Guardar como:**
```
Captura_5.20_GitHub_Tags.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.7:** "Versionado y Releases"

---

## 📸 CAPTURA 5.21: Network Graph

### 📝 **Qué capturar:**
Gráfico visual del Git Flow en GitHub

### 🎬 **Pasos:**

1. En tu repositorio
2. Click en "Insights" (arriba)
3. Click en "Network" (menú izquierdo)
4. **CAPTURAR** el gráfico visual

### ✅ **Verificar que se vea:**
- ✅ Líneas de tiempo
- ✅ Ramas visuales (main, develop, features)
- ✅ Puntos de merge
- ✅ Nombres de commits
- ✅ Flujo de trabajo completo

### 💾 **Guardar como:**
```
Captura_5.21_GitHub_Network.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.7:** "Visualización del Flujo de Trabajo"

**💡 Tip:** Esta es una de las capturas MÁS IMPORTANTES porque muestra visualmente todo el Git Flow.

---

## 📸 CAPTURA 5.22: README en GitHub

### 📝 **Qué capturar:**
README renderizado con formato en GitHub

### 🎬 **Pasos:**

1. En la página principal del repositorio
2. Scroll para ver el README completo renderizado
3. **CAPTURAR** mostrando:
   - Título con badges
   - Descripción
   - Características
   - Instrucciones de instalación

### ✅ **Verificar que se vea:**
- ✅ Markdown renderizado (títulos, listas, código)
- ✅ Badges de colores (si los agregaste)
- ✅ Enlaces funcionales
- ✅ Formato profesional

### 💾 **Guardar como:**
```
Captura_5.22_GitHub_README.png
```

### 📍 **Usar en reporte:**
**Capítulo 6 - Control de Versiones Git**  
**Sección 6.7:** "Documentación del Proyecto"

---

## ✅ CHECKLIST COMPLETO

### Capturas de Terminal (13):
- [ ] 5.1 - Git config
- [ ] 5.2 - Git init
- [ ] 5.3 - Primer commit
- [ ] 5.4 - Ramas (develop)
- [ ] 5.5 - Gráfico ramas inicial
- [ ] 5.6 - Múltiples features
- [ ] 5.7 - Merge feature
- [ ] 5.8 - Release con tag
- [ ] 5.9 - Commit temporal
- [ ] 5.10 - Git revert
- [ ] 5.11 - Checkout versión
- [ ] 5.12 - Git reset
- [ ] 5.13 - Git Flow completo

### Capturas de GitHub (9):
- [ ] 5.14 - Formulario crear repo
- [ ] 5.15 - Instrucciones post-creación
- [ ] 5.16 - Git remote -v
- [ ] 5.17 - Git push
- [ ] 5.18 - Repo principal
- [ ] 5.19 - Branches
- [ ] 5.20 - Tags
- [ ] 5.21 - Network graph ⭐
- [ ] 5.22 - README

**Total: 22 capturas** ✅

---

## 🎨 TIPS PARA CAPTURAS PROFESIONALES

### Terminal:

1. **Limpia la terminal** antes de cada captura (`clear`)
2. **Usa colores** (Git los tiene por defecto)
3. **Fuente legible** (tamaño 12pt mínimo)
4. **Contraste adecuado** (fondo oscuro con texto claro, o viceversa)
5. **Captura suficiente contexto** (comando + output completo)

### GitHub:

1. **Zoom al 100%** en el navegador (Ctrl + 0)
2. **Modo claro o oscuro** (el que prefieras, consistente)
3. **Sin notificaciones** o elementos distractores
4. **Scroll para mostrar todo** lo importante
5. **Recarga la página** antes de capturar (para asegurar datos frescos)

### General:

- ✅ **PNG**, no JPG (mejor calidad)
- ✅ **Nombres descriptivos** de archivo
- ✅ **Organiza en carpeta** (ej: `Capturas_Git/`)
- ✅ **Verifica legibilidad** antes de guardar
- ✅ **Backups** de todas las capturas

---

## 📁 ORGANIZACIÓN DE ARCHIVOS

```
Capturas_Actividad/
├── Punto_6_Git/
│   ├── Terminal/
│   │   ├── Captura_5.1_Git_Config.png
│   │   ├── Captura_5.2_Git_Init.png
│   │   ├── ...
│   │   └── Captura_5.13_Git_Flow_Completo.png
│   │
│   └── GitHub/
│       ├── Captura_5.14_GitHub_Crear_Repo.png
│       ├── ...
│       └── Captura_5.22_GitHub_README.png
│
└── README.txt (con URLs del repositorio)
```

---

## 📝 DATOS PARA EL REPORTE

### Información a incluir:

**URL del repositorio:**
```
https://github.com/tu-usuario/gestion-proyectos-scrum
```

**Comandos ejecutados:**
```
22 comandos principales de Git
5 ceremonias en GitHub
17 commits realizados
4 ramas creadas (main, develop, 2 features, 1 hotfix)
2 tags (v1.0.0, v1.0.1)
```

**Flujo de trabajo:**
```
Git Flow estándar con:
- Rama main (producción)
- Rama develop (desarrollo)
- Features branches
- Hotfix branch
- Tags para versionado
```

---

## ⏱️ TIEMPO ESTIMADO

**Total para todas las capturas de Git:** ~2 horas

- Configuración Git: 10 min
- Commits y ramas (terminal): 30 min
- Capturas terminal: 30 min
- Setup GitHub: 10 min
- Capturas GitHub: 20 min
- Organización: 10 min
- Verificación: 10 min

---

## 🎯 ORDEN RECOMENDADO DE EJECUCIÓN

1. ✅ **Configura Git** → Captura 5.1
2. ✅ **Inicializa repo** → Captura 5.2
3. ✅ **Primer commit** → Captura 5.3
4. ✅ **Crea develop** → Captura 5.4
5. ✅ **Crea features** → Capturas 5.5, 5.6
6. ✅ **Merge features** → Captura 5.7
7. ✅ **Release y tag** → Captura 5.8
8. ✅ **Demuestra revert** → Capturas 5.9, 5.10
9. ✅ **Demuestra checkout** → Captura 5.11
10. ✅ **Demuestra reset** → Captura 5.12
11. ✅ **Hotfix completo** → Captura 5.13
12. ✅ **Crea repo GitHub** → Capturas 5.14, 5.15
13. ✅ **Conecta y push** → Capturas 5.16, 5.17
14. ✅ **Explora GitHub** → Capturas 5.18-5.22

---

## ✅ VERIFICACIÓN FINAL

Antes de entregar, verifica:

### Contenido:
- [ ] 22 capturas completas
- [ ] Todas son legibles
- [ ] Nombres correctos
- [ ] Formato PNG
- [ ] Organizadas en carpetas

### Repositorio GitHub:
- [ ] Es **PÚBLICO** (muy importante)
- [ ] Tiene README completo
- [ ] Muestra todas las ramas
- [ ] Muestra los tags
- [ ] Network graph es visible

### Documentación:
- [ ] URL del repo anotada
- [ ] Capturas insertadas en Word
- [ ] Pies de figura numerados
- [ ] Explicaciones de cada captura

---

**¡Con estas 22 capturas demuestras dominio completo de Git y GitHub!** 🎉

**Última actualización:** 02 de febrero de 2026
