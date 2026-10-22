# Spotify Platform

Full-stack music streaming web application built with the MERN stack, featuring audio playback, real-time user chat, and playlist management.

Live deployment: https://spotify-project-bc53.onrender.com

---

## Overview

This application reproduces core music streaming functionalities: continuous audio playback, album and track navigation, user authentication, and real-time social chatting between active users.

---

## Architecture and Features

- Continuous audio playback engine with track seek, volume control, and shuffle/repeat modes.
- Real-time chatting powered by Socket.io, allowing listeners to message each other in real time.
- Protected authentication routes and user session management with JWT and bcrypt.
- Admin dashboard for uploading tracks, creating albums, and managing music metadata.
- Cloudinary integration for cloud audio and album artwork storage.

---

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Lucide Icons, Axios
- Backend: Node.js, Express, MongoDB (Mongoose), Socket.io, Cloudinary
- Deployment: Render (unified monorepo build)

---

## Local Development

Prerequisites: Node.js 18+, MongoDB instance.

```bash
# 1. Clone repository
git clone https://github.com/MuhammadMinhaj229/SPOTIFY-PROJECT.git
cd SPOTIFY-PROJECT

# 2. Install backend dependencies
cd backend
npm install
cp .env.example .env

# 3. Install frontend dependencies
cd ../frontend
npm install
cp .env.example .env

# 4. Run backend server
cd ../backend
npm run dev

# 5. Run frontend server (in another terminal)
cd ../frontend
npm run dev
```

---

## How to Deploy to Render

1. Create a new Web Service on Render and link `SPOTIFY-PROJECT`.
2. Configure build and start commands:
   - Build Command: `npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend`
   - Start Command: `npm start --prefix backend`
3. Add environment variables:
   - `PORT` = `5000`
   - `MONGO_URI` = your-mongodb-connection-string
   - `JWT_SECRET` = your-jwt-secret
   - `CLOUDINARY_API_KEY` = your-cloudinary-key
   - `CLOUDINARY_API_SECRET` = your-cloudinary-secret
   - `CLOUDINARY_CLOUD_NAME` = your-cloud-name
   - `NODE_ENV` = `production`
4. Click Deploy.

---

## Author

Mohammed Minhaj Mahmood  
Portfolio: https://mohammed-minhaj.netlify.app/  
Email: minhajmuhammad229@gmail.com
