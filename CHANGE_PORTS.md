# 🔧 How to Change Ports - ProperHOA

## Port 8080 Already in Use? No Problem!

### Quick Fix (Change Frontend Port)

**Option 1: Use port 3000**
```bash
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=3000
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF
```

**Option 2: Use port 9090**
```bash
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=9090
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF
```

**Option 3: Use port 5173**
```bash
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=5173
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF
```

### Then Rebuild and Start

```bash
docker-compose down
docker-compose up -d --build
```

Your frontend will now be at: `http://YOUR_SERVER_IP:YOUR_NEW_PORT`

---

## Both Ports in Use?

Change both backend and frontend ports:

```bash
cat > .env << 'EOF'
BACKEND_PORT=5001
FRONTEND_PORT=3000
VITE_API_URL=http://YOUR_SERVER_IP:5001
EOF

# Update frontend API URL
cat > client/.env.production << 'EOF'
VITE_API_URL=http://YOUR_SERVER_IP:5001
EOF

# Rebuild
docker-compose down
docker-compose up -d --build
```

---

## Check Available Ports

```bash
# Check if a port is in use
sudo lsof -i :8080
sudo lsof -i :3001

# See all used ports
sudo netstat -tulpn | grep LISTEN
```

---

## Recommended Port Combinations

| Frontend | Backend | Note |
|----------|---------|------|
| 3000 | 3001 | Common for Node apps |
| 5173 | 5174 | Vite default + 1 |
| 9090 | 9091 | High ports, less conflicts |
| 4000 | 4001 | Alternative |
| 8888 | 8889 | Alternative |

---

## Quick Command Reference

```bash
# 1. Edit .env file
nano .env

# 2. Change these lines:
#    BACKEND_PORT=YOUR_PORT
#    FRONTEND_PORT=YOUR_PORT
#    VITE_API_URL=http://YOUR_IP:YOUR_BACKEND_PORT

# 3. Also update client/.env.production
nano client/.env.production

# 4. Rebuild
docker-compose down
docker-compose up -d --build

# 5. Check if running
docker-compose ps
```

---

## Example: Complete Port Change

Let's say you want:
- Frontend on port **3000**
- Backend on port **5001**

```bash
# Step 1: Update root .env
cat > .env << 'EOF'
BACKEND_PORT=5001
FRONTEND_PORT=3000
VITE_API_URL=http://123.456.789.10:5001
EOF

# Step 2: Update client/.env.production
cat > client/.env.production << 'EOF'
VITE_API_URL=http://123.456.789.10:5001
EOF

# Step 3: Rebuild everything
docker-compose down
docker-compose up -d --build

# Step 4: Access your app
# Frontend: http://123.456.789.10:3000
# Backend:  http://123.456.789.10:5001
```

Done! ✅

---

**Need help?** The ports are defined in the `.env` file in your project root!

