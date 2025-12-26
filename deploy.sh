#!/bin/bash

# ProperHOA Deployment Script
# This script helps you deploy ProperHOA using Docker

echo "🏠 ProperHOA Docker Deployment"
echo "==============================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from template..."
    cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=8080
VITE_API_URL=http://localhost:3001
EOF
    echo "✅ Created .env file"
    echo "⚠️  Please edit .env and update VITE_API_URL with your server IP/domain"
    echo ""
fi

# Check if client/.env.production exists
if [ ! -f client/.env.production ]; then
    echo "⚠️  client/.env.production not found. Creating from template..."
    cat > client/.env.production << 'EOF'
VITE_API_URL=http://localhost:3001
EOF
    echo "✅ Created client/.env.production"
    echo "⚠️  Please edit client/.env.production and update VITE_API_URL"
    echo ""
fi

# Create data directory
mkdir -p data
echo "✅ Created data directory"
echo ""

# Ask user what to do
echo "What would you like to do?"
echo "1) Build and start containers"
echo "2) Stop containers"
echo "3) Restart containers"
echo "4) View logs"
echo "5) Rebuild everything"
echo "6) Stop and remove everything"
echo ""
read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "🚀 Building and starting containers..."
        docker-compose up -d --build
        echo ""
        echo "✅ Deployment complete!"
        echo ""
        echo "📍 Your app is running at:"
        echo "   Frontend: http://localhost:$(grep FRONTEND_PORT .env | cut -d '=' -f2)"
        echo "   Backend:  http://localhost:$(grep BACKEND_PORT .env | cut -d '=' -f2)"
        echo ""
        echo "📊 Check status: docker-compose ps"
        echo "📝 View logs: docker-compose logs -f"
        ;;
    2)
        echo "⏹️  Stopping containers..."
        docker-compose down
        echo "✅ Containers stopped"
        ;;
    3)
        echo "🔄 Restarting containers..."
        docker-compose restart
        echo "✅ Containers restarted"
        ;;
    4)
        echo "📝 Viewing logs (Ctrl+C to exit)..."
        docker-compose logs -f
        ;;
    5)
        echo "🔨 Rebuilding everything..."
        docker-compose down
        docker-compose up -d --build
        echo "✅ Rebuild complete!"
        ;;
    6)
        echo "⚠️  This will remove all containers and volumes!"
        read -p "Are you sure? (yes/no): " confirm
        if [ "$confirm" = "yes" ]; then
            docker-compose down -v
            echo "✅ Everything removed"
        else
            echo "❌ Cancelled"
        fi
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

