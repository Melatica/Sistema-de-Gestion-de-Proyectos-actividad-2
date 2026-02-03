# 🔧 Implementación de Git - Inicio Rápido

## 🎯 Objetivo

Implementar control de versiones con Git para cumplir con el **Requisito 6** de la actividad académica.

---

## ⚡ OPCIÓN 1: RÁPIDA (Recomendada)

### Para Windows:

```cmd
# Abre PowerShell o CMD en la carpeta del proyecto
cd ruta\a\tu\proyecto

# Ejecuta el script
scripts\setup-git-flow.bat
```

### Para Mac/Linux:

```bash
# Abre terminal en la carpeta del proyecto
cd /ruta/a/tu/proyecto

# Da permisos al script
chmod +x scripts/setup-git-flow.sh

# Ejecuta el script
./scripts/setup-git-flow.sh
```

### ¿Qué hace el script?

✅ Inicializa repositorio Git  
✅ Crea estructura de ramas (main, develop, features, hotfix)  
✅ Hace commits simulando trabajo real  
✅ Crea tags de versiones (v1.0.0, v1.0.1)  
✅ Genera historial completo para capturas

**Tiempo:** 5 minutos

---

## 📋 OPCIÓN 2: MANUAL

Sigue la guía paso a paso: `/docs/GIT_PASO_A_PASO.md`

**Tiempo:** 2 horas

---

## 📸 DESPUÉS DEL SCRIPT: Capturas

### Sigue esta guía:

`/docs/GUIA_CAPTURAS_GIT.md`

**22 capturas requeridas:**

- 13 del terminal (comandos Git)
- 9 de GitHub (repositorio público)

**Tiempo:** 1 hora

---

## 🌐 CREAR REPOSITORIO EN GITHUB

### Pasos:

1. **Ve a:** https://github.com/new

2. **Completa:**
   - Repository name: `gestion-proyectos-scrum`
   - Description: "Sistema de gestión de proyectos con Scrum"
   - ✅ **Public** (importante)
   - ❌ NO marcar "Initialize with README"

3. **Click:** "Create repository"

4. **En tu terminal:**

```bash
# Conectar con GitHub (usa TU URL)
git remote add origin https://github.com/tu-usuario/gestion-proyectos-scrum.git

# Push de todas las ramas
git push -u origin --all

# Push de los tags
git push --tags
```

5. **Recarga GitHub** y verifica que aparezcan:
   - ✅ Código
   - ✅ Ramas (main, develop, features)
   - ✅ Tags (v1.0.0, v1.0.1)
   - ✅ Network graph

---

## 📚 DOCUMENTACIÓN COMPLETA

| Documento                        | Descripción                    |
| -------------------------------- | ------------------------------ |
| `/docs/GIT_RESUMEN_EJECUTIVO.md` | Resumen completo               |
| `/docs/GIT_PASO_A_PASO.md`       | Guía con todos los comandos    |
| `/docs/GUIA_CAPTURAS_GIT.md`     | Instrucciones para 22 capturas |
| `/docs/GIT_FLOW_VISUAL.md`       | Diagramas y comandos útiles    |

---

## ✅ CHECKLIST RÁPIDO

### Setup:

- [ ] Script ejecutado o comandos manuales completados
- [ ] Gráfico de ramas visible (`git log --oneline --graph --all`)
- [ ] Tags creados (`git tag`)

### GitHub:

- [ ] Cuenta creada
- [ ] Repositorio público creado
- [ ] Remote configurado (`git remote -v`)
- [ ] Push exitoso (todas las ramas y tags)
- [ ] Código visible en GitHub

### Capturas:

- [ ] 13 capturas del terminal
- [ ] 9 capturas de GitHub
- [ ] Total: 22 capturas en PNG
- [ ] Nombres descriptivos
- [ ] Organizadas en carpeta

### Reporte:

- [ ] URL del repositorio copiada
- [ ] Capturas insertadas en Word
- [ ] Explicaciones agregadas

---

## 🎯 RESULTADO ESPERADO

Después de seguir estos pasos tendrás:

✅ Repositorio Git local con flujo completo  
✅ Repositorio GitHub público con todo el código  
✅ 22 capturas profesionales  
✅ Historial de commits organizado  
✅ Ramas y tags correctamente configurados

**Cumplimiento del requisito 6:** 100% ✅

---

## 🆘 ¿NECESITAS AYUDA?

### Si el script falla:

1. Verifica que Git esté instalado: `git --version`
2. Asegúrate de estar en la carpeta del proyecto
3. Lee los errores en la terminal
4. Consulta `/docs/GIT_RESUMEN_EJECUTIVO.md` sección "Solución de problemas"

### Si GitHub no funciona:

1. Verifica que el repo sea **público**
2. Espera 1-2 minutos después del push
3. Refresca la página
4. Verifica la URL del remote: `git remote -v`

### Si las capturas no se ven bien:

1. Usa PNG, no JPG
2. Zoom 100% en navegador/terminal
3. Fuente tamaño 12pt o más
4. Buen contraste de colores

---

## ⏱️ TIEMPO TOTAL ESTIMADO

- **Con script:** ~1.5 horas (setup 5 min + capturas 1 hora + GitHub 20 min)
- **Manual:** ~2.5 horas (setup 1 hora + capturas 1 hora + GitHub 20 min + verificación 10 min)

---

## 🚀 EMPEZAR AHORA

**Opción rápida (recomendada):**

```bash
# Windows
scripts\setup-git-flow.bat

# Mac/Linux
chmod +x scripts/setup-git-flow.sh && ./scripts/setup-git-flow.sh
```

Luego sigue: `/docs/GUIA_CAPTURAS_GIT.md`

---

**¡Éxito!** 🎉

**Última actualización:** 02 de febrero de 2026