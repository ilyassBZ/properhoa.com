# 🚀 START HERE - ProperHOA Deployment

## ⚡ Super Quick Deploy (Copy & Paste)

### Step 1: Configure (Replace YOUR_SERVER_IP with your actual IP)

```bash
# Create .env file
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=3000
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF

# Create client API config
cat > client/.env.production << 'EOF'
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF
```

### Step 2: Deploy

```bash
docker-compose up -d --build
```

### Step 3: Access

- **Frontend:** http://YOUR_SERVER_IP:3000
- **Backend:** http://YOUR_SERVER_IP:3001

---

## ⚠️ Port Already in Use?

### If port 3000 is busy, use 5173 instead:

```bash
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=5173
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF

docker-compose up -d --build
```

Frontend will be at: http://YOUR_SERVER_IP:5173

### If port 3001 is busy, use 5001 instead:

```bash
cat > .env << 'EOF'
BACKEND_PORT=5001
FRONTEND_PORT=3000
VITE_API_URL=http://YOUR_SERVER_IP:5001
EOF

cat > client/.env.production << 'EOF'
VITE_API_URL=http://YOUR_SERVER_IP:5001
EOF

docker-compose up -d --build
```

---

## 📖 More Help

- **Port conflicts?** → Read `CHANGE_PORTS.md`
- **Full deployment guide** → Read `DEPLOYMENT.md`
- **Quick reference** → Read `DOCKER_QUICK_START.md`

---

## 🎯 Example: Complete Setup for Server 123.45.67.89

```bash
# Step 1: Configure
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=3000
VITE_API_URL=http://123.45.67.89:3001
EOF

cat > client/.env.production << 'EOF'
VITE_API_URL=http://123.45.67.89:3001
EOF

# Step 2: Deploy
docker-compose up -d --build

# Step 3: Check
docker-compose ps

# Step 4: View logs
docker-compose logs -f
```

**Your app is now live at:**
- http://123.45.67.89:3000

---

## 🛑 Stop/Restart Commands

```bash
# Stop
docker-compose down

# Restart
docker-compose restart

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```

---

**Made with 💙 by the ProperHOA team**

