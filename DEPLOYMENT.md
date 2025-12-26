# 🚀 Docker Deployment Guide - ProperHOA

This guide will help you deploy ProperHOA to your server using Docker.

## 📋 Prerequisites

- Docker installed on your server
- Docker Compose installed
- Ports available for the application (default: 3001 for backend, 8080 for frontend)

## 🔧 Quick Start

### 1. Configure Ports

If you have other apps running on your server, edit the `.env` file to change ports:

```bash
# Edit .env file
nano .env
```

Change the ports as needed:
```env
BACKEND_PORT=3001      # Change if port 3001 is in use
FRONTEND_PORT=8080     # Change if port 8080 is in use
VITE_API_URL=http://your-server-ip:3001  # Update with your server IP/domain
```

### 2. Update API URL

**Important:** Update the API URL in `.env` to match your server:

```env
# If using a domain:
VITE_API_URL=https://api.properhoa.com

# If using server IP:
VITE_API_URL=http://123.456.789.10:3001
```

Then update `client/.env.production`:
```bash
echo "VITE_API_URL=http://your-server-ip:3001" > client/.env.production
```

### 3. Build and Run

```bash
# Build and start all containers
docker-compose up -d --build

# Check if containers are running
docker-compose ps

# View logs
docker-compose logs -f
```

### 4. Access Your App

- **Frontend:** http://your-server-ip:8080
- **Backend API:** http://your-server-ip:3001
- **Health Check:** http://your-server-ip:3001/health

## 📦 Docker Commands

### Start Services
```bash
docker-compose up -d
```

### Stop Services
```bash
docker-compose down
```

### Restart Services
```bash
docker-compose restart
```

### View Logs
```bash
# All services
docker-compose logs -f

# Backend only
docker-compose logs -f backend

# Frontend only
docker-compose logs -f frontend
```

### Rebuild After Changes
```bash
docker-compose down
docker-compose up -d --build
```

### Remove Everything (including volumes)
```bash
docker-compose down -v
```

## 📊 Check Status

```bash
# List running containers
docker ps

# Check container health
docker inspect properhoa-backend | grep Health
docker inspect properhoa-frontend | grep Health
```

## 📧 Access Collected Emails

Emails are stored in `./data/emails.csv` on your host machine.

```bash
# View emails
cat data/emails.csv

# Download via API
curl http://your-server-ip:3001/emails --output emails.csv
```

## 🔒 Production Best Practices

### 1. Use Nginx Reverse Proxy

Add this to your main Nginx config:

```nginx
# Backend API
server {
    listen 80;
    server_name api.properhoa.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

# Frontend
server {
    listen 80;
    server_name properhoa.com www.properhoa.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 2. Add SSL with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificates
sudo certbot --nginx -d properhoa.com -d www.properhoa.com
sudo certbot --nginx -d api.properhoa.com
```

### 3. Update API URL for Production

```bash
# Update .env
VITE_API_URL=https://api.properhoa.com

# Update client/.env.production
echo "VITE_API_URL=https://api.properhoa.com" > client/.env.production

# Rebuild
docker-compose down
docker-compose up -d --build
```

## 🔄 Updates & Maintenance

### Update the Application

```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

### Backup Emails

```bash
# Create backup
cp data/emails.csv data/emails_backup_$(date +%Y%m%d).csv

# Or use cron for automatic backups
# Add to crontab: 0 2 * * * cp /path/to/data/emails.csv /path/to/backups/emails_$(date +\%Y\%m\%d).csv
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Check what's using the port
sudo lsof -i :3001
sudo lsof -i :8080

# Change ports in .env file and restart
docker-compose down
docker-compose up -d
```

### Container Won't Start

```bash
# Check logs
docker-compose logs backend
docker-compose logs frontend

# Remove and rebuild
docker-compose down -v
docker-compose up -d --build
```

### Can't Connect to Backend from Frontend

1. Make sure VITE_API_URL is correct in `.env`
2. Rebuild frontend: `docker-compose up -d --build frontend`
3. Check if backend is accessible: `curl http://localhost:3001/health`

### Emails Not Saving

```bash
# Check if data directory exists and has permissions
mkdir -p data
chmod 755 data

# Restart backend
docker-compose restart backend
```

## 📊 Monitoring

### View Resource Usage

```bash
docker stats properhoa-backend properhoa-frontend
```

### Health Checks

```bash
# Backend health
curl http://localhost:3001/health

# Frontend health
curl http://localhost:8080/health
```

## 🔑 Environment Variables Reference

| Variable | Description | Default |
|----------|-------------|---------|
| `BACKEND_PORT` | Backend API port | 3001 |
| `FRONTEND_PORT` | Frontend web port | 8080 |
| `VITE_API_URL` | Backend API URL for frontend | http://localhost:3001 |
| `EMAIL_FILE` | Path to email CSV file | /app/data/emails.csv |

## 🎯 Architecture

```
┌─────────────────┐
│   Frontend      │  Port 8080
│   (Nginx)       │
└────────┬────────┘
         │
         │ API Calls
         │
┌────────▼────────┐
│   Backend       │  Port 3001
│   (Express)     │
└────────┬────────┘
         │
         │ File Write
         │
┌────────▼────────┐
│  emails.csv     │
│  (Volume)       │
└─────────────────┘
```

## 📞 Support

If you encounter issues:

1. Check logs: `docker-compose logs -f`
2. Verify ports are available
3. Ensure `.env` is configured correctly
4. Check firewall settings: `sudo ufw status`

---

**Made with 💙 by the ProperHOA team**

*End the HOA Drama. Start Transparency.*

