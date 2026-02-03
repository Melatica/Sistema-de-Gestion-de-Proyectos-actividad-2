# Selección de Hardware del Servidor

## Decisión: Servidor PC de Alto Rendimiento

Para el proyecto de gestión de proyectos basado en Supabase (PostgreSQL), se ha optado por un **servidor PC de tipo rack** en lugar de un mainframe, debido a las siguientes razones:

### Justificación de la Elección

#### 1. Naturaleza del Sistema
- Base de datos: **PostgreSQL (NoSQL/Relacional híbrido vía Supabase)**
- Arquitectura: Aplicación web con API REST
- Usuarios concurrentes estimados: 100-500 usuarios
- Escalabilidad horizontal mediante servicios en la nube

#### 2. Ventajas sobre Mainframe
- **Costo-beneficio**: Un servidor PC de alto rendimiento cuesta entre $3,000-$8,000 USD vs $100,000+ de un mainframe
- **Flexibilidad**: Fácil actualización y mantenimiento
- **Compatibilidad**: Soporte completo para Docker, Node.js, PostgreSQL
- **Escalabilidad moderna**: Arquitectura cloud-ready con posibilidad de migrar a AWS/Azure/GCP

---

## Especificaciones del Servidor Seleccionado

### 1. Tamaño de Disco Duro

**Configuración elegida:** 2 TB SSD NVMe (RAID 1) + 4 TB HDD (RAID 5) para respaldos

#### Justificación:
- **SSD NVMe (2 TB en RAID 1):**
  - Sistema operativo: 100 GB
  - Base de datos PostgreSQL: 500 GB inicial (capacidad de crecimiento)
  - Archivos de la aplicación: 50 GB
  - Logs y monitoreo: 100 GB
  - Espacio libre para caché: 250 GB
  - **Total utilizado estimado:** 1 TB, dejando 1 TB de margen de crecimiento
  - **RAID 1:** Redundancia para protección de datos críticos

- **HDD (4 TB en RAID 5):**
  - Respaldos automáticos diarios
  - Archivos históricos y auditoría
  - Snapshots de base de datos

#### Cálculo de Crecimiento:
```
Proyectos estimados: 1,000 proyectos/año
Tareas por proyecto: 100 tareas promedio
Datos por tarea: ~10 KB
Crecimiento anual: 1,000 × 100 × 10 KB = 1 GB/año (datos puros)
Con índices y relaciones: ~5 GB/año
Capacidad suficiente para 10+ años de operación
```

---

### 2. Capacidad de Memoria RAM

**Configuración elegida:** 64 GB DDR5 ECC (4 módulos de 16 GB)

#### Justificación:

**Distribución de memoria:**
```
Sistema Operativo (Ubuntu Server): 4 GB
PostgreSQL Database:                32 GB
  - Shared buffers: 16 GB (25% RAM)
  - Effective cache: 48 GB (75% RAM)
Node.js API Server:                 8 GB
Nginx Reverse Proxy:                2 GB
Servicios de monitoreo:             4 GB
Docker containers:                  8 GB
Buffer del sistema:                 6 GB
-------------------------------------------
TOTAL:                              64 GB
```

**Parámetros PostgreSQL optimizados:**
```sql
shared_buffers = 16GB              # Caché de datos
effective_cache_size = 48GB        # Memoria disponible para caché del SO
work_mem = 256MB                   # Memoria por operación de ordenamiento
maintenance_work_mem = 2GB         # Memoria para VACUUM, CREATE INDEX
max_connections = 200              # Conexiones simultáneas
```

**Cálculo de conexiones concurrentes:**
- Usuarios simultáneos: 500
- Conexiones pooling ratio: 1:5
- Conexiones reales necesarias: 100
- Margen de seguridad: 200 conexiones configuradas

---

### 3. Topología de Red

**Configuración elegida:** Topología Estrella con Segmentación por VLANs

#### Diagrama de Red:

```
                    Internet
                       |
                  [Firewall]
                       |
              [Router Principal]
                       |
        +----------------------------+
        |                            |
   [Switch Core]              [Switch Backup]
   (VLAN Trunk)               (Failover)
        |
        +-------------------+-------------------+
        |                   |                   |
    [VLAN 10]           [VLAN 20]           [VLAN 30]
    Servidores          Aplicaciones        Administración
        |                   |                   |
  [Server DB]         [App Servers]       [Admin Stations]
  [Backup Server]     [API Gateway]       [Monitoring]
```

#### Justificación:

**a) Topología Estrella:**
- **Ventajas:**
  - Fácil diagnóstico de problemas
  - Aislamiento de fallos (un nodo caído no afecta a otros)
  - Fácil expansión agregando switches
  - Mejor para entornos empresariales

**b) Segmentación por VLANs:**
- **VLAN 10 (Servidores):** 10.0.10.0/24
  - Servidor de base de datos principal
  - Servidor de respaldo
  - Acceso restringido
  
- **VLAN 20 (Aplicaciones):** 10.0.20.0/24
  - Servidores de aplicaciones Node.js
  - API Gateway
  - Load balancers
  
- **VLAN 30 (Administración):** 10.0.30.0/24
  - Estaciones de administración
  - Herramientas de monitoreo
  - Jump servers para acceso seguro

**c) Especificaciones de red:**
- **Tarjetas de red:** 2 × 10 Gbps (bonding para redundancia)
- **Switch Core:** 48 puertos 10 Gbps con capacidad de 480 Gbps
- **Ancho de banda Internet:** 1 Gbps simétrico dedicado
- **Latencia esperada:** <2ms interna, <50ms a clientes

**d) Conexión con máquinas cliente:**
```
Cliente Web/Móvil
       ↓
   Internet
       ↓
   Firewall (WAF)
       ↓
   Load Balancer (Nginx)
       ↓
   API Servers (VLAN 20)
       ↓
   Database Server (VLAN 10)
```

**Protocolos utilizados:**
- HTTPS (443) - Comunicación cliente-servidor
- WSS (WebSocket Secure) - Actualizaciones en tiempo real
- SSH (22) - Administración (solo VLAN 30)
- PostgreSQL (5432) - Base de datos (solo interno)

---

### 4. Sistema Operativo

**Sistema elegido:** Ubuntu Server 24.04 LTS (Long Term Support)

#### Justificación Técnica:

**a) Por qué Ubuntu Server:**
1. **Soporte a largo plazo:**
   - 5 años de actualizaciones de seguridad
   - 10 años con Ubuntu Pro (gratuito para uso personal)
   - Estabilidad probada en entornos de producción

2. **Compatibilidad con el stack tecnológico:**
   - PostgreSQL 16: Soporte nativo excelente
   - Node.js: Instalación simple vía nvm o NodeSource
   - Docker: Integración oficial y optimizada
   - Nginx: Paquetes oficiales actualizados

3. **Rendimiento:**
   - Kernel Linux 6.8 optimizado para servidores
   - Bajo consumo de recursos (< 500 MB RAM en idle)
   - Excelente gestión de memoria para bases de datos

4. **Seguridad:**
   - UFW (Uncomplicated Firewall) preinstalado
   - AppArmor para control de acceso obligatorio
   - Actualizaciones automáticas de seguridad (unattended-upgrades)
   - Auditoría con auditd

5. **Herramientas de administración:**
   - systemd para gestión de servicios
   - APT para gestión de paquetes
   - Gran comunidad y documentación

**b) Alternativas consideradas:**

| Sistema Operativo | Ventajas | Desventajas | Puntuación |
|-------------------|----------|-------------|------------|
| **Ubuntu Server 24.04 LTS** ✅ | Soporte LTS, gran comunidad, fácil administración | Algunas actualizaciones frecuentes | 9/10 |
| Red Hat Enterprise Linux | Soporte empresarial, muy estable | Costoso, menos flexible | 7/10 |
| Debian 12 | Muy estable, lightweight | Paquetes más antiguos, menos recursos | 8/10 |
| CentOS Stream | Compatible con RHEL, gratuito | Rolling release (menos estable) | 6/10 |
| Windows Server 2022 | Interfaz gráfica, familiar | Costos de licencia, más recursos | 5/10 |

**c) Configuración del sistema:**

```bash
# Versión del kernel
Kernel: Linux 6.8.0-LTS

# Servicios principales
- PostgreSQL 16.x
- Node.js 20.x LTS
- Nginx 1.24.x
- Docker 24.x
- Redis 7.x (para caché)

# Seguridad
- UFW (Firewall)
- Fail2ban (Protección contra fuerza bruta)
- ClamAV (Antivirus)
- AIDE (Detección de intrusiones)

# Monitoreo
- Prometheus + Grafana
- Netdata
- PostgreSQL monitoring extensions
```

**d) Particionamiento del disco:**

```
/boot       - 1 GB    (EXT4)     - Arranque del sistema
/           - 50 GB   (EXT4)     - Sistema operativo
/var        - 100 GB  (EXT4)     - Logs y servicios
/var/lib/postgresql - 1.5 TB (XFS) - Base de datos (en SSD)
/home       - 20 GB   (EXT4)     - Usuarios
/tmp        - 10 GB   (tmpfs)    - Archivos temporales (en RAM)
swap        - 16 GB              - Memoria de intercambio
/backup     - 3.5 TB  (EXT4)     - Respaldos (en HDD RAID 5)
```

---

## Resumen de Configuración del Servidor

### Servidor Dell PowerEdge R450 (Ejemplo de Servidor PC de Rack)

| Componente | Especificación | Justificación |
|------------|----------------|---------------|
| **Procesador** | Intel Xeon Gold 6338 (32 núcleos, 2.0 GHz) | Procesamiento paralelo para múltiples conexiones |
| **RAM** | 64 GB DDR5 ECC | Suficiente para DB caché y servicios |
| **Almacenamiento SSD** | 2 TB NVMe (RAID 1) | Velocidad para DB y aplicación |
| **Almacenamiento HDD** | 4 TB SATA (RAID 5) | Respaldos y archivos históricos |
| **Red** | 2 × 10 GbE (bonding) | Alta velocidad y redundancia |
| **Fuente de poder** | Redundante 800W | Disponibilidad continua |
| **Sistema Operativo** | Ubuntu Server 24.04 LTS | Estabilidad, soporte y compatibilidad |

### Costo Estimado: $7,500 USD

---

## Conclusión

La elección de un servidor PC de alto rendimiento con las especificaciones mencionadas proporciona:

1. ✅ **Capacidad suficiente** para almacenar y procesar datos de miles de proyectos
2. ✅ **Rendimiento óptimo** con 64 GB RAM para PostgreSQL y servicios
3. ✅ **Red escalable** con topología estrella y segmentación por VLANs
4. ✅ **Sistema operativo robusto** con Ubuntu Server 24.04 LTS
5. ✅ **Relación costo-beneficio** superior a un mainframe
6. ✅ **Escalabilidad futura** para migración a cloud si es necesario

Este servidor cumple con todos los requisitos técnicos para soportar la aplicación de gestión de proyectos durante los próximos 5-7 años, con capacidad de crecimiento y actualización modular.
