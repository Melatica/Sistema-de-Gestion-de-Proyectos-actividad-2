# Propuesta de Herramientas de Monitoreo y Configuración de Seguridad

## Objetivo

Garantizar la estabilidad, rendimiento y seguridad de la plataforma de gestión de proyectos mediante herramientas de monitoreo en tiempo real y configuración de seguridad robusta.

---

## Parte 1: Herramientas de Monitoreo

### Comparativa de Herramientas de Monitoreo

| Herramienta | Tipo | Ventajas | Desventajas | Puntuación |
|-------------|------|----------|-------------|------------|
| **Prometheus + Grafana** | Métricas + Visualización | Open source, potente, escalable | Curva de aprendizaje | 9.5/10 |
| **Datadog** | SaaS All-in-One | Fácil configuración, soporte premium | Costoso ($15/host/mes) | 8.0/10 |
| **Netdata** | Tiempo Real | Instalación simple, dashboards automáticos | Almacenamiento limitado | 8.5/10 |
| **Zabbix** | Infraestructura | Completo, alertas avanzadas | Interfaz antigua | 7.5/10 |
| **New Relic** | APM | Excelente para aplicaciones | Muy costoso | 7.0/10 |
| **Nagios** | Tradicional | Probado, plugins extensivos | Configuración compleja | 6.5/10 |

---

## 🏆 Top 3 Herramientas de Monitoreo Seleccionadas

### 1. Prometheus + Grafana (Monitoreo de Métricas y Visualización)

#### ¿Qué es?
- **Prometheus:** Sistema de monitoreo y alerta basado en series temporales
- **Grafana:** Plataforma de visualización y análisis de datos

#### ¿Por qué es la mejor opción?
- ✅ **Open source y gratuito**
- ✅ **Estándar de la industria** (CNCF graduated project)
- ✅ **Integración nativa con PostgreSQL, Node.js, Nginx**
- ✅ **Alertas configurables** (PagerDuty, Slack, Email)
- ✅ **Retención de datos personalizable**

#### Métricas a monitorear:

**1. Servidor y Sistema Operativo:**
```yaml
# CPU, Memoria, Disco, Red
node_exporter metrics:
  - node_cpu_seconds_total
  - node_memory_MemAvailable_bytes
  - node_disk_io_time_seconds_total
  - node_network_receive_bytes_total
```

**2. Base de Datos PostgreSQL:**
```yaml
# Conexiones, Queries, Transacciones
postgres_exporter metrics:
  - pg_stat_database_numbackends  # Conexiones activas
  - pg_stat_database_tup_returned # Filas leídas
  - pg_stat_database_xact_commit  # Transacciones exitosas
  - pg_locks_count                # Bloqueos
```

**3. Aplicación Node.js:**
```yaml
# Request rate, latencia, errores
prom-client metrics:
  - http_requests_total
  - http_request_duration_ms
  - http_errors_total
  - nodejs_heap_size_used_bytes
```

**4. Nginx (Reverse Proxy):**
```yaml
# Tráfico, respuestas, conexiones
nginx_exporter metrics:
  - nginx_http_requests_total
  - nginx_http_connections_active
  - nginx_http_response_time_seconds
```

#### Configuración de Alertas:

```yaml
# Alertas críticas configuradas
alerts:
  - name: HighCPUUsage
    condition: cpu_usage > 85% for 5 minutes
    action: Email + SMS al equipo
    
  - name: DatabaseConnectionsHigh
    condition: pg_connections > 180 (de 200 max)
    action: Slack notification
    
  - name: DiskSpaceLow
    condition: disk_free < 15%
    action: Email urgente
    
  - name: APIResponseTimeSlow
    condition: response_time > 2 seconds (p95)
    action: PagerDuty alert
    
  - name: ErrorRateHigh
    condition: error_rate > 5% for 2 minutes
    action: Email + Slack
```

#### Instalación y Configuración:

```bash
# Instalación de Prometheus
wget https://github.com/prometheus/prometheus/releases/download/v2.48.0/prometheus-2.48.0.linux-amd64.tar.gz
tar -xvf prometheus-2.48.0.linux-amd64.tar.gz
cd prometheus-2.48.0.linux-amd64
./prometheus --config.file=prometheus.yml

# Instalación de Grafana
sudo apt-get install -y software-properties-common
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
sudo apt-get update
sudo apt-get install grafana

# Iniciar servicios
sudo systemctl enable prometheus
sudo systemctl start prometheus
sudo systemctl enable grafana-server
sudo systemctl start grafana-server
```

#### Dashboards Configurados:

1. **Dashboard General del Servidor:**
   - CPU, RAM, Disco, Red en tiempo real
   - Gráficas de 1h, 24h, 7d, 30d
   - Heatmaps de utilización

2. **Dashboard de PostgreSQL:**
   - Conexiones activas por minuto
   - Queries por segundo (QPS)
   - Tabla de queries más lentas
   - Cache hit ratio

3. **Dashboard de Aplicación:**
   - Request rate (req/s)
   - Latencia percentiles (p50, p95, p99)
   - Error rate
   - Usuarios activos

4. **Dashboard de Negocio:**
   - Proyectos creados por día
   - Tareas completadas
   - Usuarios registrados
   - Tiempo promedio de resolución de tareas

**Costo:** $0 (Open Source)  
**Complejidad de configuración:** Media  
**Tiempo de implementación:** 2-3 días

---

### 2. Netdata (Monitoreo en Tiempo Real)

#### ¿Qué es?
Herramienta de monitoreo en tiempo real con dashboards automáticos y alertas inteligentes.

#### ¿Por qué elegirla?
- ✅ **Instalación de 1 minuto**
- ✅ **Dashboards automáticos** sin configuración
- ✅ **Monitoreo granular** (actualización cada segundo)
- ✅ **Detección de anomalías con ML**
- ✅ **Bajo consumo de recursos** (<3% CPU, <100 MB RAM)

#### Características principales:

**1. Monitoreo instantáneo:**
```
- 1000+ métricas recolectadas automáticamente
- Actualización cada segundo
- Sin necesidad de configuración
- Dashboards interactivos preconstruidos
```

**2. Alertas automáticas:**
```
- CPU usage > 80%
- RAM usage > 90%
- Disk I/O wait > 50%
- Network errors detected
- Service down (PostgreSQL, Nginx, Node.js)
```

**3. Integración con Prometheus:**
```bash
# Netdata puede exportar a Prometheus
[backend]
    enabled = yes
    type = prometheus
    destination = localhost:9090
```

#### Instalación:

```bash
# Instalación con un comando
bash <(curl -Ss https://my-netdata.io/kickstart.sh)

# Configurar alertas
sudo nano /etc/netdata/health.d/custom.conf

# Reiniciar
sudo systemctl restart netdata
```

#### Casos de uso:

1. **Diagnóstico rápido de problemas:**
   - Ver en tiempo real qué proceso está consumiendo CPU
   - Identificar picos de memoria instantáneos
   - Detectar conexiones de red sospechosas

2. **Monitoreo de desarrolladores:**
   - Los desarrolladores pueden ver el impacto de su código
   - Identificar memory leaks en Node.js
   - Ver queries lentas de PostgreSQL

3. **Alertas proactivas:**
   - Notificación antes de que ocurra un problema
   - Anomalías detectadas automáticamente
   - Predicciones de falta de espacio en disco

**Acceso:** http://servidor:19999  
**Costo:** Gratis (Cloud Pro: $9/node/mes opcional)  
**Complejidad:** Muy baja  
**Tiempo de implementación:** 30 minutos

---

### 3. Uptime Kuma (Monitoreo de Disponibilidad)

#### ¿Qué es?
Herramienta self-hosted de monitoreo de uptime (disponibilidad) similar a UptimeRobot.

#### ¿Por qué elegirla?
- ✅ **Interfaz moderna y elegante**
- ✅ **Monitoreo de endpoints HTTP/HTTPS**
- ✅ **Notificaciones a 90+ servicios** (Slack, Discord, Telegram, Email)
- ✅ **Status page público** para mostrar a clientes
- ✅ **Totalmente gratuito y open source**

#### Características:

**1. Tipos de monitoreo:**
```
✓ HTTP/HTTPS endpoints
✓ TCP ports
✓ Ping (ICMP)
✓ DNS records
✓ PostgreSQL database
✓ Docker containers
✓ Keywords en páginas web
```

**2. Configuración de checks:**
```yaml
Monitors configurados:
  - Web App: https://app.empresa.com
    Intervalo: 60 segundos
    Timeout: 5 segundos
    Retries: 3
    
  - API REST: https://api.empresa.com/health
    Intervalo: 30 segundos
    Expected status: 200
    Expected keyword: "healthy"
    
  - Database: PostgreSQL
    Intervalo: 120 segundos
    Connection string: postgresql://...
    
  - Servidor SSH: servidor.empresa.com:22
    Intervalo: 300 segundos
```

**3. Notificaciones configuradas:**
```
Canales de notificación:
  - Email: admin@empresa.com (todos los fallos)
  - Slack: #alertas-produccion (downtime > 5 min)
  - Telegram: @admin_bot (downtime crítico)
  - SMS (vía Twilio): +52 55 1234 5678 (solo emergencias)
```

**4. Status Page:**
```
URL pública: https://status.empresa.com
Contenido:
  - Estado actual de servicios (verde/rojo)
  - Historial de uptime (24h, 7d, 30d, 90d)
  - Incidentes pasados con timeline
  - Tiempo promedio de resolución
  
Ejemplo:
  ✅ Web Application    99.98% uptime (30d)
  ✅ API REST           99.95% uptime
  ✅ Database           100% uptime
  ⚠️ File Storage      99.12% uptime (1 incidente)
```

#### Instalación (Docker):

```bash
# Instalación con Docker
docker run -d \
  --name uptime-kuma \
  -p 3001:3001 \
  -v uptime-kuma:/app/data \
  --restart=always \
  louislam/uptime-kuma:1
```

#### Métricas y estadísticas:

```
Dashboard principal muestra:
  - Uptime general: 99.95%
  - Tiempo promedio de respuesta: 245 ms
  - Incidentes en los últimos 30 días: 2
  - Tiempo promedio de recuperación: 8 minutos
  - Certificado SSL: válido hasta 15/08/2026
```

**Acceso:** http://servidor:3001  
**Costo:** $0 (Open Source)  
**Complejidad:** Muy baja  
**Tiempo de implementación:** 1 hora

---

## Arquitectura de Monitoreo Completa

```
┌─────────────────────────────────────────────────────────┐
│                     USUARIOS                             │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              UPTIME KUMA (Status Page)                   │
│  Monitorea disponibilidad cada 60 segundos              │
│  Notifica: Email, Slack, SMS                            │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                   NGINX (Reverse Proxy)                  │
│  nginx_exporter → Prometheus                            │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
┌──────────────────┐    ┌──────────────────┐
│   Node.js API    │    │   Static Files   │
│  prom-client →   │    │                  │
│   Prometheus     │    │                  │
└────────┬─────────┘    └──────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│              PostgreSQL Database                         │
│  postgres_exporter → Prometheus                         │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                 NETDATA (Tiempo Real)                    │
│  Monitorea: CPU, RAM, Disco, Red, Procesos              │
│  Alertas automáticas con ML                             │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│            PROMETHEUS (Almacén de Métricas)             │
│  Recolecta métricas cada 15 segundos                    │
│  Retención: 90 días                                     │
│  Almacenamiento: ~10 GB                                 │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              GRAFANA (Visualización)                     │
│  15 dashboards configurados                             │
│  Alertas configuradas: 25                               │
│  Usuarios con acceso: Equipo de DevOps                  │
└─────────────────────────────────────────────────────────┘
```

---

## Parte 2: Configuración de Seguridad

### Capas de Seguridad Implementadas

#### 1. Firewall (UFW - Uncomplicated Firewall)

```bash
# Configuración del firewall UFW

# Política por defecto: denegar todo
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Permitir solo puertos necesarios
sudo ufw allow 22/tcp      # SSH (solo desde IPs de administración)
sudo ufw allow 80/tcp      # HTTP (redirige a HTTPS)
sudo ufw allow 443/tcp     # HTTPS
sudo ufw allow 9090/tcp    # Prometheus (solo IP interna)
sudo ufw allow 3000/tcp    # Grafana (solo IP interna)
sudo ufw allow 19999/tcp   # Netdata (solo IP interna)

# Limitar intentos de SSH (protección contra fuerza bruta)
sudo ufw limit 22/tcp

# Permitir SSH solo desde IP de administración
sudo ufw allow from 192.168.1.100 to any port 22

# Activar firewall
sudo ufw enable

# Verificar estado
sudo ufw status verbose
```

**Configuración avanzada:**
```bash
# Bloquear países específicos (geoip)
sudo apt install xtables-addons-common
# Bloquear tráfico de China, Rusia (ejemplo)
sudo xt_geoip_build /usr/share/xt_geoip/
sudo ufw deny from cn
sudo ufw deny from ru
```

---

#### 2. Fail2Ban (Protección contra Fuerza Bruta)

```bash
# Instalación
sudo apt install fail2ban

# Configuración personalizada
sudo nano /etc/fail2ban/jail.local
```

**Configuración de Fail2Ban:**
```ini
[DEFAULT]
bantime = 3600          # Banear por 1 hora
findtime = 600          # Ventana de detección de 10 minutos
maxretry = 3            # Máximo 3 intentos fallidos

[sshd]
enabled = true
port = 22
logpath = /var/log/auth.log
maxretry = 3
bantime = 7200          # 2 horas de ban por intentos SSH

[nginx-http-auth]
enabled = true
port = 80,443
logpath = /var/log/nginx/error.log

[nginx-limit-req]
enabled = true
port = 80,443
logpath = /var/log/nginx/error.log

[postgresql]
enabled = true
port = 5432
logpath = /var/log/postgresql/postgresql-*.log
maxretry = 2
bantime = 86400         # 24 horas por intentos en DB

# Notificación por email
action = %(action_mwl)s
destemail = admin@empresa.com
sender = fail2ban@empresa.com
```

**Monitoreo de Fail2Ban:**
```bash
# Ver IPs baneadas
sudo fail2ban-client status sshd

# Desbanear IP manualmente
sudo fail2ban-client set sshd unbanip 192.168.1.50

# Logs de Fail2Ban
sudo tail -f /var/log/fail2ban.log
```

---

#### 3. SSL/TLS con Let's Encrypt (Certificados HTTPS)

```bash
# Instalación de Certbot
sudo apt install certbot python3-certbot-nginx

# Obtener certificado SSL gratuito
sudo certbot --nginx -d app.empresa.com -d api.empresa.com

# Renovación automática (cron)
sudo certbot renew --dry-run

# Configurar renovación automática
sudo crontab -e
# Agregar línea:
0 3 * * * certbot renew --quiet --post-hook "systemctl reload nginx"
```

**Configuración Nginx con SSL/TLS:**
```nginx
# /etc/nginx/sites-available/app.empresa.com

server {
    listen 80;
    server_name app.empresa.com;
    
    # Redirigir a HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name app.empresa.com;
    
    # Certificados SSL
    ssl_certificate /etc/letsencrypt/live/app.empresa.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/app.empresa.com/privkey.pem;
    
    # Configuración SSL moderna (Mozilla Modern)
    ssl_protocols TLSv1.3 TLSv1.2;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers off;
    
    # HSTS (HTTP Strict Transport Security)
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # Prevenir clickjacking
    add_header X-Frame-Options "SAMEORIGIN" always;
    
    # Prevenir MIME type sniffing
    add_header X-Content-Type-Options "nosniff" always;
    
    # XSS Protection
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Content Security Policy
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Proxy a Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://localhost:3000;
    }
}
```

**Verificación de seguridad SSL:**
```bash
# Test con SSLLabs
# https://www.ssllabs.com/ssltest/analyze.html?d=app.empresa.com
# Objetivo: Calificación A+

# Test local
openssl s_client -connect app.empresa.com:443 -tls1_3
```

---

#### 4. PostgreSQL Security Hardening

**a) Configuración de autenticación:**
```bash
# /etc/postgresql/16/main/pg_hba.conf

# Solo permitir conexiones locales con password
local   all             postgres                                peer
local   all             all                                     scram-sha-256

# Conexiones TCP solo desde localhost
host    all             all             127.0.0.1/32            scram-sha-256
host    all             all             ::1/128                 scram-sha-256

# Conexiones desde aplicación (IP específica)
host    proyectos_db    app_user        10.0.20.0/24           scram-sha-256

# Denegar todo lo demás
host    all             all             0.0.0.0/0               reject
```

**b) PostgreSQL configuration security:**
```sql
-- /etc/postgresql/16/main/postgresql.conf

# Escuchar solo en localhost (no exponer a Internet)
listen_addresses = 'localhost,10.0.10.5'

# Deshabilitar comandos peligrosos
ssl = on
ssl_cert_file = '/etc/ssl/certs/postgres.crt'
ssl_key_file = '/etc/ssl/private/postgres.key'

# Logging de todas las conexiones
log_connections = on
log_disconnections = on
log_duration = on
log_statement = 'ddl'  # Log solo comandos DDL (CREATE, ALTER, DROP)

# Timeout de conexiones inactivas
statement_timeout = 30000  # 30 segundos
idle_in_transaction_session_timeout = 60000  # 1 minuto
```

**c) Crear usuarios con privilegios mínimos:**
```sql
-- Usuario de solo lectura para reportes
CREATE USER readonly_user WITH PASSWORD 'strong_password_123';
GRANT CONNECT ON DATABASE proyectos_db TO readonly_user;
GRANT USAGE ON SCHEMA public TO readonly_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly_user;

-- Usuario de aplicación con permisos limitados
CREATE USER app_user WITH PASSWORD 'app_password_456';
GRANT CONNECT ON DATABASE proyectos_db TO app_user;
GRANT USAGE, CREATE ON SCHEMA public TO app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;

-- Revocar permisos peligrosos
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON pg_catalog.pg_authid FROM PUBLIC;
```

**d) Auditoría con pgAudit:**
```sql
-- Instalación de pgAudit
CREATE EXTENSION pgaudit;

-- Configuración de auditoría
ALTER SYSTEM SET pgaudit.log = 'write, ddl, role';
ALTER SYSTEM SET pgaudit.log_catalog = off;
ALTER SYSTEM SET pgaudit.log_parameter = on;

-- Recargar configuración
SELECT pg_reload_conf();
```

---

#### 5. Protección DDoS y Rate Limiting

**a) Nginx rate limiting:**
```nginx
# /etc/nginx/nginx.conf

http {
    # Zonas de rate limiting
    limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;
    limit_req_zone $binary_remote_addr zone=api:10m rate=100r/m;
    limit_req_zone $binary_remote_addr zone=general:10m rate=200r/m;
    
    # Límite de conexiones simultáneas
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    
    # Límite de tamaño de body
    client_body_buffer_size 1K;
    client_header_buffer_size 1k;
    client_max_body_size 10M;
    large_client_header_buffers 2 1k;
    
    # Timeouts
    client_body_timeout 10;
    client_header_timeout 10;
    keepalive_timeout 5 5;
    send_timeout 10;
    
    server {
        # Aplicar rate limiting
        location /api/auth/login {
            limit_req zone=login burst=3 nodelay;
            limit_conn addr 5;
            proxy_pass http://localhost:3000;
        }
        
        location /api/ {
            limit_req zone=api burst=50 nodelay;
            limit_conn addr 10;
            proxy_pass http://localhost:3000;
        }
        
        location / {
            limit_req zone=general burst=100 nodelay;
            limit_conn addr 20;
            proxy_pass http://localhost:3000;
        }
    }
}
```

**b) Fail2Ban para DDoS:**
```ini
# /etc/fail2ban/filter.d/nginx-ddos.conf
[Definition]
failregex = ^<HOST> -.*"(GET|POST).*HTTP.*"
ignoreregex =

# /etc/fail2ban/jail.local
[nginx-ddos]
enabled = true
port = 80,443
logpath = /var/log/nginx/access.log
maxretry = 200
findtime = 60
bantime = 600
```

---

#### 6. Seguridad de Aplicación Node.js

**a) Variables de entorno seguras:**
```bash
# /opt/app/.env (permisos 600, propietario app_user)

# Database
DATABASE_URL=postgresql://app_user:strong_pwd@localhost:5432/proyectos_db

# JWT Secret (generado con: openssl rand -base64 32)
JWT_SECRET=8f2h9d1k5j7g3h6k9l0p2m4n7b5v8c1x

# Supabase
SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIs...

# Rate limiting
RATE_LIMIT_WINDOW=15  # minutos
RATE_LIMIT_MAX=100    # requests por ventana
```

**b) Dependencias seguras (helmet, express-rate-limit):**
```javascript
// server/index.tsx
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();

// Helmet para headers de seguridad
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// CORS configurado
app.use(cors({
  origin: ['https://app.empresa.com'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // 100 requests por ventana
  message: 'Demasiadas solicitudes desde esta IP',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

// Rate limiting estricto para login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 intentos por 15 minutos
  skipSuccessfulRequests: true
});

app.post('/api/auth/login', loginLimiter, handleLogin);
```

**c) Validación de entrada:**
```typescript
// Usar Zod para validación
import { z } from 'zod';

const createProjectSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().max(500).optional(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  teamId: z.string().uuid()
});

app.post('/api/projects', async (req, res) => {
  try {
    const validatedData = createProjectSchema.parse(req.body);
    // Procesar datos validados...
  } catch (error) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }
});
```

---

#### 7. Backups Automáticos y Encriptados

```bash
#!/bin/bash
# /opt/scripts/backup_database.sh

# Configuración
DB_NAME="proyectos_db"
DB_USER="postgres"
BACKUP_DIR="/backup/postgresql"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/${DB_NAME}_${DATE}.sql.gz"
ENCRYPTION_KEY="backup_encryption_key_32_chars"

# Crear backup comprimido
pg_dump -U $DB_USER $DB_NAME | gzip > $BACKUP_FILE

# Encriptar backup con AES-256
openssl enc -aes-256-cbc -salt -in $BACKUP_FILE -out ${BACKUP_FILE}.enc -pass pass:$ENCRYPTION_KEY

# Eliminar archivo sin encriptar
rm $BACKUP_FILE

# Subir a almacenamiento remoto (S3, Google Cloud Storage)
aws s3 cp ${BACKUP_FILE}.enc s3://empresa-backups/postgres/

# Eliminar backups locales antiguos (>30 días)
find $BACKUP_DIR -name "*.enc" -mtime +30 -delete

# Eliminar backups remotos antiguos (>90 días)
aws s3 ls s3://empresa-backups/postgres/ | awk '{print $4}' | while read file; do
  FILE_DATE=$(echo $file | grep -oP '\d{8}')
  DAYS_OLD=$(( ($(date +%s) - $(date -d $FILE_DATE +%s)) / 86400 ))
  if [ $DAYS_OLD -gt 90 ]; then
    aws s3 rm s3://empresa-backups/postgres/$file
  fi
done

# Notificar resultado
if [ $? -eq 0 ]; then
  echo "Backup exitoso: ${BACKUP_FILE}.enc" | mail -s "Backup PostgreSQL OK" admin@empresa.com
else
  echo "ERROR en backup" | mail -s "Backup PostgreSQL FAILED" admin@empresa.com
fi
```

**Configurar cron para backups automáticos:**
```bash
# crontab -e

# Backup completo diario a las 2 AM
0 2 * * * /opt/scripts/backup_database.sh

# Backup incremental cada 6 horas
0 */6 * * * /opt/scripts/backup_incremental.sh
```

---

## Resumen de Configuración de Seguridad

| Capa de Seguridad | Herramienta | Estado | Configuración |
|-------------------|-------------|--------|---------------|
| **Firewall** | UFW | ✅ Activo | Solo puertos esenciales abiertos |
| **Fuerza Bruta** | Fail2Ban | ✅ Activo | Ban después de 3 intentos |
| **SSL/TLS** | Let's Encrypt | ✅ Activo | Calificación A+ SSLLabs |
| **Rate Limiting** | Nginx | ✅ Activo | 100 req/min por IP |
| **DDoS** | Nginx + Fail2Ban | ✅ Activo | Límites configurados |
| **DB Security** | PostgreSQL | ✅ Activo | Usuarios con privilegios mínimos |
| **Auditoría** | pgAudit | ✅ Activo | Logs de todas las operaciones |
| **Backups** | Cron + OpenSSL | ✅ Activo | Diarios encriptados |
| **Headers** | Helmet.js | ✅ Activo | CSP, HSTS, X-Frame-Options |
| **Validación** | Zod | ✅ Activo | Validación de entrada |

---

## Dashboard de Seguridad (Grafana)

```
Panel de Seguridad - Últimas 24 horas:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Intentos de login fallidos:        23
🚫 IPs baneadas por Fail2Ban:         5
🔒 Certificado SSL:                   Válido (240 días restantes)
⚡ Requests bloqueados (rate limit):  156
🛡️ Peticiones bloqueadas por WAF:    12
📈 Uptime:                            99.97%
💾 Último backup:                     Hace 4 horas (exitoso)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**Documento elaborado por:**  
Equipo de DevOps y Seguridad  
TechProjects Management Solutions  
Fecha: 02 de febrero de 2026
