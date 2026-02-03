# 🌳 Git Flow - Guía Visual

## 📊 Diagrama del Flujo de Trabajo

```
┌─────────────────────────────────────────────────────────────────┐
│                         RAMA MAIN (PRODUCCIÓN)                   │
│  ●─────────●─────────────────────────────●──────────●           │
│  │         │                             │          │           │
│  │         │                             │          │           │
│  │    v1.0.0                        v1.0.1         │           │
│  │         │                             │          │           │
└──┼─────────┼─────────────────────────────┼──────────┼───────────┘
   │         │                             │          │
   │         │                             │          │
┌──┼─────────┼─────────────────────────────┼──────────┼───────────┐
│  │         │                             │          │           │
│  │         │    RAMA DEVELOP (DESARROLLO)│          │           │
│  ●─────────●─────●───────●───────────────●──────────●           │
│  │         │     │       │               │          │           │
│  │         │     │       │               │          │           │
│  │         │     │       │               │      Hotfix          │
│  │         │     │       │               │          │           │
│  │         │  ┌──┴───┐ ┌─┴────┐          │          │           │
│  │         │  │      │ │      │          │          │           │
│  │         │  │ feat │ │ feat │          │          │           │
│  │         │  │login │ │dash  │          │          │           │
│  │         │  │      │ │      │          │          │           │
│  │         │  └──────┘ └──────┘          │          │           │
│  │         │                             │          │           │
└──┴─────────┴─────────────────────────────┴──────────┴───────────┘
   
   Initial    Merge      Merge           Release   Hotfix
   Commit     Features   to Main         v1.0.0    v1.0.1
```

---

## 🔄 Ciclo de Vida de una Feature

```
1. CREAR FEATURE
   develop ──────┐
                 │
                 ● feature/nueva-funcionalidad
                 │
                 │ ← Commits de desarrollo
                 │
                 ●
                 
2. DESARROLLO
   feature/nueva-funcionalidad
   │
   ├─ ● Commit 1: Agregar componente
   ├─ ● Commit 2: Agregar estilos
   ├─ ● Commit 3: Agregar tests
   └─ ● Commit 4: Documentación

3. MERGE A DEVELOP
   develop ───────●
                  ╱
                 ● feature/nueva-funcionalidad
                 
4. ELIMINAR FEATURE (opcional)
   git branch -d feature/nueva-funcionalidad
```

---

## 🚨 Flujo de Hotfix

```
PROBLEMA CRÍTICO EN PRODUCCIÓN
        │
        ▼
main ───●───────────●
        │           │
        │      ┌────┘
        │      │
        │   hotfix/fix-bug
        │      │
        │      ● Commit: Fix bug
        │      │
        ├──────┤ Merge a main
        │      │
develop ├──────┘ Merge a develop
        │
        ▼
   Hotfix aplicado en ambas ramas
```

---

## 📋 Estados de los Archivos en Git

```
┌──────────────┐    git add    ┌──────────────┐    git commit    ┌──────────────┐
│              │  ──────────>   │              │  ──────────────> │              │
│  Working     │                │   Staging    │                  │  Repository  │
│  Directory   │  <──────────   │     Area     │                  │   (Commits)  │
│              │    git reset   │              │                  │              │
└──────────────┘                └──────────────┘                  └──────────────┘
      │                               │                                 │
      │                               │                                 │
  Archivos sin                   Archivos listos                   Archivos
   trackear                       para commit                      commiteados
```

---

## 🎯 Comandos por Situación

### 1️⃣ Crear Nueva Feature

```bash
# Desde develop
git checkout develop
git pull origin develop
git checkout -b feature/nombre-feature

# Trabajar en la feature
# ... hacer cambios ...

git add .
git commit -m "feat: Descripción de la feature"
```

### 2️⃣ Finalizar Feature

```bash
# Asegurarse de tener últimos cambios de develop
git checkout develop
git pull origin develop

# Cambiar a tu feature
git checkout feature/nombre-feature

# Hacer rebase con develop (opcional pero recomendado)
git rebase develop

# Volver a develop y hacer merge
git checkout develop
git merge feature/nombre-feature --no-ff

# Push a GitHub
git push origin develop

# Eliminar rama local (opcional)
git branch -d feature/nombre-feature

# Eliminar rama remota (opcional)
git push origin --delete feature/nombre-feature
```

### 3️⃣ Crear Release (Versión)

```bash
# Desde develop
git checkout main
git merge develop --no-ff -m "Release v1.0.0"

# Crear tag
git tag -a v1.0.0 -m "Versión 1.0.0"

# Push
git push origin main
git push origin v1.0.0
```

### 4️⃣ Hotfix Urgente

```bash
# Desde main
git checkout main
git checkout -b hotfix/nombre-fix

# Hacer fix
# ... cambios ...

git add .
git commit -m "hotfix: Descripción del fix"

# Merge a main
git checkout main
git merge hotfix/nombre-fix --no-ff
git tag -a v1.0.1 -m "Hotfix v1.0.1"

# Merge también a develop
git checkout develop
git merge hotfix/nombre-fix --no-ff

# Push todo
git push origin main
git push origin develop
git push origin v1.0.1

# Eliminar rama hotfix
git branch -d hotfix/nombre-fix
```

---

## 🏷️ Convenciones de Nombres

### Ramas:
- `main` - Producción
- `develop` - Desarrollo
- `feature/nombre-descriptivo` - Nueva funcionalidad
- `bugfix/nombre-bug` - Corrección de bug
- `hotfix/nombre-fix` - Corrección urgente
- `release/v1.0.0` - Preparación de release

### Commits (Conventional Commits):
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Documentación
- `style:` - Formato (sin cambio de código)
- `refactor:` - Refactorización
- `test:` - Agregar tests
- `chore:` - Mantenimiento

**Ejemplos:**
```bash
git commit -m "feat: Agregar sistema de notificaciones"
git commit -m "fix: Corregir error en login"
git commit -m "docs: Actualizar README con instrucciones"
git commit -m "test: Agregar tests para componente Button"
```

---

## 📊 Visualización de Log

### Comando completo para ver gráfico bonito:

```bash
git log --oneline --graph --all --decorate --color
```

**Alias recomendado:**

```bash
# Agregar alias permanente
git config --global alias.lg "log --oneline --graph --all --decorate --color"

# Usar:
git lg
```

**Ejemplo de output:**
```
* 4e8a9b2 (HEAD -> main, tag: v1.0.1, origin/main) Hotfix: Corrección crítica
*   3d7f6c1 (tag: v1.0.0) Release v1.0.0
|\  
| * 2a5e8f3 (origin/develop, develop) Merge feature/dashboard
| |\  
| | * 1c4d7b9 feat: Implementar dashboard
| |/  
| * 9f3a2e1 Merge feature/login
| |\  
| | * 8e2b1c4 feat: Implementar login
| |/  
|/  
* 7d1f5a2 Initial commit
```

---

## 🔍 Comandos Útiles de Consulta

```bash
# Ver estado actual
git status

# Ver diferencias no commiteadas
git diff

# Ver diferencias en staging
git diff --staged

# Ver archivos modificados
git status --short

# Ver ramas locales
git branch

# Ver ramas remotas
git branch -r

# Ver todas las ramas
git branch -a

# Ver último commit de cada rama
git branch -v

# Ver ramas ya mergeadas a main
git branch --merged main

# Ver tags
git tag

# Ver commits de un autor
git log --author="Tu Nombre"

# Ver commits con palabra clave
git log --grep="login"

# Ver quién modificó cada línea de un archivo
git blame archivo.txt

# Ver commits de un archivo específico
git log -- archivo.txt
```

---

## 🛡️ Comandos de Emergencia

### Deshacer cambios NO commiteados:

```bash
# Descartar cambios en un archivo
git checkout -- archivo.txt

# Descartar TODOS los cambios
git checkout -- .

# Limpiar archivos no trackeados
git clean -fd
```

### Deshacer ADD (sacar de staging):

```bash
# Sacar un archivo de staging
git reset HEAD archivo.txt

# Sacar todos los archivos de staging
git reset HEAD
```

### Deshacer último COMMIT (sin perder cambios):

```bash
# Deshacer commit pero mantener cambios
git reset --soft HEAD~1

# Deshacer commit y sacar de staging (mantener en working)
git reset --mixed HEAD~1

# Deshacer commit y ELIMINAR cambios (PELIGROSO)
git reset --hard HEAD~1
```

### Modificar último commit:

```bash
# Agregar cambios al último commit
git add archivo-olvidado.txt
git commit --amend --no-edit

# Cambiar mensaje del último commit
git commit --amend -m "Nuevo mensaje"
```

### Recuperar commit eliminado:

```bash
# Ver historial de referencias
git reflog

# Recuperar commit eliminado
git cherry-pick <hash-del-commit>
```

---

## 🌐 Trabajo con GitHub

### Clonar repositorio:

```bash
git clone https://github.com/usuario/repo.git
cd repo
```

### Actualizar con cambios remotos:

```bash
# Obtener cambios sin merge
git fetch origin

# Obtener y merge automático
git pull origin main

# Ver diferencias con remoto
git diff main origin/main
```

### Sincronizar fork:

```bash
# Agregar upstream (repositorio original)
git remote add upstream https://github.com/original/repo.git

# Obtener cambios del upstream
git fetch upstream

# Merge con tu main
git checkout main
git merge upstream/main

# Push a tu fork
git push origin main
```

---

## 📈 Estadísticas del Repositorio

```bash
# Número de commits por autor
git shortlog -sn

# Número de líneas por autor
git log --author="Tu Nombre" --pretty=tformat: --numstat \
  | awk '{ add += $1; subs += $2; loc += $1 - $2 } END \
  { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }'

# Archivos más modificados
git log --pretty=format: --name-only \
  | sort | uniq -c | sort -rg | head -10

# Actividad en el último mes
git log --since="1 month ago" --oneline

# Commits por día de la semana
git log --format=%ad --date=format:%A | sort | uniq -c
```

---

## 🎨 Configuración Recomendada

```bash
# Editor predeterminado (VSCode)
git config --global core.editor "code --wait"

# Colores en terminal
git config --global color.ui auto

# Alias útiles
git config --global alias.st "status"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.ci "commit"
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
git config --global alias.lg "log --oneline --graph --all --decorate"

# Auto-correct de comandos
git config --global help.autocorrect 1

# Recordar credenciales
git config --global credential.helper cache
git config --global credential.helper 'cache --timeout=3600'
```

---

## ✅ Checklist Pre-Push

Antes de hacer push, verifica:

```bash
# 1. Tests pasan
npm run test

# 2. Build funciona
npm run build

# 3. No hay archivos sensibles
git status

# 4. Commits tienen buenos mensajes
git log -3

# 5. Rama correcta
git branch

# 6. Remote correcto
git remote -v

# 7. Pull antes de push
git pull origin $(git branch --show-current)

# 8. Push
git push origin $(git branch --show-current)
```

---

## 🎯 Mejores Prácticas

### ✅ DO (Hacer):
- ✅ Commits pequeños y frecuentes
- ✅ Mensajes de commit descriptivos
- ✅ Usar ramas para cada feature
- ✅ Pull antes de push
- ✅ Hacer rebase de develop antes de merge
- ✅ Eliminar ramas después de merge
- ✅ Usar tags para versiones
- ✅ Revisar cambios antes de commit (`git diff`)

### ❌ DON'T (No hacer):
- ❌ Commit de archivos grandes (usar .gitignore)
- ❌ Commit de secretos/passwords
- ❌ Commit directo a main sin PR
- ❌ Force push a ramas compartidas
- ❌ Commit de node_modules o build
- ❌ Mensajes vagos ("fix", "update", ".")
- ❌ Reescribir historia pública (rebase/reset en main)
- ❌ Mezclar cambios no relacionados en un commit

---

## 📚 Recursos Adicionales

### Documentación oficial:
- Git: https://git-scm.com/doc
- GitHub: https://docs.github.com

### Cheat sheets:
- https://education.github.com/git-cheat-sheet-education.pdf
- https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet

### Tutoriales interactivos:
- Learn Git Branching: https://learngitbranching.js.org/
- Git Immersion: https://gitimmersion.com/

### Visualizadores:
- GitHub Desktop: https://desktop.github.com/
- GitKraken: https://www.gitkraken.com/
- SourceTree: https://www.sourcetreeapp.com/

---

**¡Domina Git y serás un developer más eficiente!** 🚀

**Última actualización:** 02 de febrero de 2026
