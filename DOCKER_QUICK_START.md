# 🐳 Docker Quick Start - ProperHOA

## Super Quick Deploy (3 Steps)

### 1️⃣ Configure Your Ports & API URL

```bash
# Create .env file
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=8080
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF

# Create client/.env.production
cat > client/.env.production << 'EOF'
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF
```

**Replace `YOUR_SERVER_IP` with:**
- Your server's IP: `http://123.456.789.10:3001`
- Or your domain: `https://api.properhoa.com`

**Change ports if needed:**
- If port 3001 is busy → use 5001, 4000, etc.
- If port 8080 is busy → use 9090, 3000, etc.

### 2️⃣ Deploy with Docker

```bash
# Option A: Use the deploy script
./deploy.sh

# Option B: Manual deployment
docker-compose up -d --build
```

### 3️⃣ Access Your App

- **Frontend:** `http://YOUR_SERVER_IP:8080`
- **Backend:** `http://YOUR_SERVER_IP:3001`

Done! 🎉

---

## 📊 Common Commands

```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# Restart
docker-compose restart

# View logs
docker-compose logs -f

# Check status
docker-compose ps

# Rebuild after changes
docker-compose up -d --build
```

---

## 🔧 Port Conflicts?

If your ports are already in use:

```bash
# Edit .env
nano .env

# Change to available ports:
BACKEND_PORT=5001
FRONTEND_PORT=9090
VITE_API_URL=http://YOUR_SERVER_IP:5001
```

Then restart:
```bash
docker-compose down
docker-compose up -d --build
```

---

## 📧 Download Collected Emails

```bash
# View in terminal
cat data/emails.csv

# Download via browser
http://YOUR_SERVER_IP:3001/emails
```

---

## 🌐 Use with Domain (Optional)

### If you have a domain name:

1. **Point DNS to your server**
   - `properhoa.com` → your server IP
   - `api.properhoa.com` → your server IP

2. **Update .env files**
```bash
# Root .env
VITE_API_URL=https://api.properhoa.com

# client/.env.production
VITE_API_URL=https://api.properhoa.com
```

3. **Rebuild**
```bash
docker-compose down
docker-compose up -d --build
```

4. **Add SSL (Let's Encrypt)**
```bash
sudo certbot --nginx -d properhoa.com -d api.properhoa.com
```

---

## 🆘 Troubleshooting

### Can't connect to backend?
```bash
# Check if backend is running
curl http://localhost:3001/health

# View backend logs
docker-compose logs backend
```

### Port already in use?
```bash
# Check what's using the port
sudo lsof -i :3001
sudo lsof -i :8080

# Change ports in .env and restart
```

### Frontend shows errors?
```bash
# Make sure API URL is correct
cat client/.env.production

# Rebuild frontend
docker-compose up -d --build frontend
```

---

## 📋 Complete File Structure

```
properhoa-landing/
├── docker-compose.yml          ← Main Docker config
├── .env                        ← Port configuration
├── deploy.sh                   ← Easy deployment script
├── data/                       ← Email storage
│   └── emails.csv
├── server/
│   ├── Dockerfile             ← Backend container
│   └── server.js
└── client/
    ├── Dockerfile             ← Frontend container
    ├── nginx.conf             ← Web server config
    └── .env.production        ← Frontend API URL
```

---

## 🎯 What Gets Deployed

1. **Backend Container** (Express API)
   - Handles email subscriptions
   - Saves to `data/emails.csv`
   - Health check at `/health`

2. **Frontend Container** (React + Nginx)
   - Serves your landing page
   - Connects to backend API
   - Optimized production build

3. **Data Volume**
   - Persistent email storage
   - Survives container restarts

---

Need more details? Check `DEPLOYMENT.md` for the full guide!

**Made with 💙 by the ProperHOA team**

