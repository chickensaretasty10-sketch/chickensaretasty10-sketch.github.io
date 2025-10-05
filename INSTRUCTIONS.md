# Gemini Multimodal Chat App Setup Instructions

Follow these steps to set up your own text+image AI chat app with Gemini API.

---

## 1. Create the Project Folder

Open a terminal and run:
```bash
mkdir gemini-multimodal-chat
cd gemini-multimodal-chat
```

---

## 2. Create the Frontend and Backend Folders

```bash
mkdir frontend
mkdir backend
```

---

## 3. Add the Root Files

Place these files directly inside the `gemini-multimodal-chat` folder:
- `README.md` (project overview)
- `.gitignore` (see below)
- `INSTRUCTIONS.md` (these instructions)

---

## 4. Add Backend Files

Go into the backend folder:
```bash
cd backend
```

Create these files inside `/backend`:
- `package.json`
- `index.js`
- `.env` (will hold your Gemini API key; create this manually, do not commit to GitHub)

Install dependencies:
```bash
npm install
```

---

## 5. Add Frontend Files

Go into the frontend folder:
```bash
cd ../frontend
```

Create a React app structure. If you use Create React App:
```bash
npx create-react-app .
```
Then replace the default files with:
- `package.json` (replace the one created by CRA)
- `src/App.js` (overwrite)
- `src/index.js` (overwrite)
- `public/index.html` (overwrite)

---

## 6. Add Your Gemini API Key

Inside `/backend`, create a file called `.env`:
```
GEMINI_API_KEY=your-gemini-api-key-here
```
**Never commit `.env` to GitHub.**

---

## 7. Run Locally

- Start backend server:
  ```bash
  cd backend
  npm start
  ```
- Start frontend React app:
  ```bash
  cd ../frontend
  npm start
  ```

---

## 8. Deploy

- Host the frontend (static site) using GitHub Pages, Vercel, or Netlify.
- Host the backend (API server) using Render, Railway, Vercel, etc.

---

## 9. File/Folder Summary

```
gemini-multimodal-chat/
│
├── README.md
├── INSTRUCTIONS.md
├── .gitignore
│
├── backend/
│   ├── package.json
│   ├── index.js
│   └── .env         (create yourself, not in repo)
│
└── frontend/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        └── index.js
```

---

## 10. Additional Notes

- Your React app in `/frontend` communicates with the backend at `http://localhost:5001` (update if hosting elsewhere).
- For production, set the backend URL in the frontend code with an environment variable if needed.

---
