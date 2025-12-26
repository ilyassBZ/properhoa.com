# 🚀 Quick Start Guide - ProperHOA

## Get Started in 2 Minutes

### Step 1: Install Backend

```bash
cd properhoa-landing/server
npm install
npm start
```

✅ Server runs on http://localhost:3001

### Step 2: Install Frontend (new terminal)

```bash
cd properhoa-landing/client
npm install
npm run dev
```

✅ App runs on http://localhost:5173

### Step 3: Open in Browser

Visit **http://localhost:5173** and test the signup form!

## 📧 Retrieve Collected Emails

Emails are automatically saved in `server/emails.csv`.

To download them via browser:
👉 http://localhost:3001/emails

## 🎨 Design Preview

The design uses a **professional blue palette** with:

- ✨ Navy blue → sky blue gradients
- 📱 Responsive (mobile, tablet, desktop)
- 🎭 Smooth hover animations
- 💎 Modern and clean interface

## 🛠️ Useful Commands

### Backend (server/)
```bash
npm start          # Start server
```

### Frontend (client/)
```bash
npm run dev        # Development mode
npm run build      # Build for production
npm run preview    # Preview build
```

## 📝 Important Files

| File | Description |
|------|-------------|
| `server/server.js` | Express backend API |
| `server/emails.csv` | Email database |
| `client/src/App.jsx` | Main page |
| `client/src/index.css` | Global styles (blue palette) |
| `client/src/components/NewsletterForm.jsx` | Signup form |
| `client/src/components/FAQ.jsx` | Interactive FAQ section |

## 🎯 Color Structure

The design uses these primary blue tones:

```
🔵 Dark blue (Hero, Footer): #0c2340, #1e4b7f
🔵 Primary blue (Buttons, CTA): #2563eb, #3b82f6
🔵 Light blue (Accents): #60a5fa, #93c5fd
```

## 🐛 Issues?

**Form not submitting?**
- ✅ Check server is running on port 3001
- ✅ Check browser console for errors

**npm install error?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📦 Next Steps

1. **Test**: Submit some test emails
2. **Customize**: Edit content in `App.jsx`
3. **Deploy**: Use Vercel (frontend) + Railway (backend)

## 🎉 That's It!

Your ProperHOA landing page is ready to collect emails!

---

**Questions?** Check the full `README.md` for more details.

