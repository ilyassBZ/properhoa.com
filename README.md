# 🏘️ ProperHOA - Landing Page

> **End the HOA Drama. Start Transparency.**

A professional landing page with modern blue design for ProperHOA - a digital portal for self-managed HOAs.

## 📁 Project Structure

```
properhoa-landing/
│
├── client/              # React (Vite) - Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── NewsletterForm.jsx
│   │   │   ├── NewsletterForm.css
│   │   │   └── FAQ.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/              # Node.js + Express - Backend
│   ├── server.js
│   ├── emails.csv       # Emails are saved here
│   └── package.json
│
└── README.md
```

## 🎨 Design Features

- **Professional Blue Color Palette**: Gradients from navy blue to sky blue
- **Modern and Clean Design**: Intuitive user interface
- **Responsive**: Perfectly adapts to mobile, tablet, and desktop
- **Smooth Animations**: Transitions and hover effects
- **Inter Typography**: Modern and readable font
- **Reusable Components**: Modular architecture

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### 1️⃣ Backend Setup

```bash
cd server
npm install
npm start
```

Server runs on **http://localhost:3001**

### 2️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Application runs on **http://localhost:5173**

## 📊 Features

### Backend (Express)

- ✅ REST API for email collection
- ✅ Save to emails.csv
- ✅ CORS enabled
- ✅ Download collected emails via `/emails`

### Frontend (React + Vite)

- ✅ Hero section with dynamic blue gradient
- ✅ Waitlist signup form
- ✅ Feature grid with interactive cards
- ✅ Interactive FAQ accordion
- ✅ Statistics and social proof
- ✅ Smooth animations and transitions
- ✅ 100% responsive design

## 🎯 API Endpoints

### POST `/subscribe`

Adds an email to the waitlist.

**Body:**
```json
{
  "email": "example@email.com"
}
```

**Response:**
```json
{
  "message": "Saved successfully"
}
```

### GET `/emails`

Downloads the CSV file containing all collected emails.

## 🎨 Color Palette

```css
--blue-900: #0c2340  /* Very dark navy */
--blue-800: #1e3a5f  /* Dark navy */
--blue-700: #1e4b7f  /* Navy */
--blue-600: #2563eb  /* Primary blue */
--blue-500: #3b82f6  /* Bright blue */
--blue-400: #60a5fa  /* Light blue */
--blue-300: #93c5fd  /* Pastel blue */
--blue-200: #bfdbfe  /* Very light blue */
--blue-100: #dbeafe  /* Pale blue */
--blue-50: #eff6ff   /* Ultra pale blue */
```

## 📦 Deployment

### Frontend (React)

**Recommended options:**

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   cd client
   vercel
   ```

2. **Netlify**
   ```bash
   cd client
   npm run build
   # Drag and drop the dist/ folder to Netlify
   ```

### Backend (Express)

**Recommended options:**

1. **Railway**
   - Connect your GitHub repo
   - Automatic deployment

2. **Render**
   - Free tier available
   - Automatic deployment from GitHub

### ⚙️ Post-Deployment Configuration

Update the API URL in `client/src/components/NewsletterForm.jsx`:

```javascript
await axios.post("https://YOUR-DEPLOYED-SERVER.com/subscribe", { email });
```

## 🔧 Customization

### Change Colors

Modify CSS variables in `client/src/index.css`:

```css
:root {
  --blue-600: #your-color;
  --blue-700: #your-color;
  /* etc. */
}
```

### Modify Content

Main content is in `client/src/App.jsx`. Edit text, sections, and images as needed.

### Add Features

- **Welcome emails**: Integrate Brevo or Mailchimp
- **Payments**: Add Stripe for subscriptions
- **Admin dashboard**: Use Next.js + Supabase
- **Analytics**: Integrate Google Analytics or Plausible

## 📝 Available Scripts

### Client

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server

- `npm start` - Start Express server

## 🐛 Troubleshooting

### Form not working

Check that:
1. Backend server is running on port 3001
2. API URL is correct in NewsletterForm.jsx
3. CORS is enabled on the server

### Installation error

```bash
# Remove dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🎁 Bonus Features

### Download all emails

Visit `http://localhost:3001/emails` to download the CSV file with all collected emails.

### Dark mode (coming soon)

Design is ready for dark mode addition. Simply add a `.dark` class to the body.

## 📄 License

This project is a free template for your ProperHOA project.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or pull request.

## 📧 Contact

For any questions or suggestions, contact the ProperHOA team.

---

**Made with 💙 by the ProperHOA team**

*End the HOA Drama. Start Transparency.*

