# Gemini Multimodal Chat

An AI chat app that accepts both text and images, powered by Google's Gemini API.

## Features

- Send both text and image messages to the Gemini AI model.
- Simple React frontend (deployable to GitHub Pages or Vercel/Netlify).
- Node.js/Express backend for secure Gemini API calls.

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/gemini-multimodal-chat.git
cd gemini-multimodal-chat
```

### 2. Backend setup

```bash
cd backend
npm install
# Add your Gemini API key in a .env file (see INSTRUCTIONS.md)
npm start
```
By default, backend runs on [http://localhost:5001](http://localhost:5001).

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm start
```
By default, frontend runs on [http://localhost:3000](http://localhost:3000).

### 4. Deploy

- **Frontend:** Deploy `/frontend` with GitHub Pages, Vercel, or Netlify.
- **Backend:** Deploy `/backend` to Render, Railway, etc.

For detailed setup and deployment, see `INSTRUCTIONS.md`.

---
