# 🔗 URL Shortener with Analytics

## Overview

URL Shortener with Analytics is a full-stack web application that allows users to create short URLs from long URLs and track usage statistics. The application provides authentication, URL management, analytics tracking, and a responsive dashboard.

This project was developed as part of a hackathon challenge to demonstrate practical full-stack engineering skills including authentication, database design, API development, analytics tracking, and frontend dashboard creation.

---

# AI Planning Document

## Problem Analysis

The goal was to create a URL shortening platform where users can:

* Register and login securely
* Create short URLs
* Manage their URLs
* Track click analytics
* View URL performance through a dashboard

---

## Development Plan

### Phase 1: Backend Setup

* Setup Express.js server
* Configure MongoDB Atlas
* Create database models
* Configure environment variables

### Phase 2: Authentication

* User registration
* Password hashing using bcrypt
* User login
* JWT token generation

### Phase 3: URL Shortening

* Generate unique short codes
* Store URLs in MongoDB
* Redirect short URLs to original URLs

### Phase 4: Dashboard

* Display all URLs
* Copy URL functionality
* Delete URL functionality
* Statistics cards

### Phase 5: Analytics

* Click counting
* Visit history tracking
* Last visited timestamp

### Phase 6: UI Enhancement

* Responsive layout
* Dashboard cards
* Modern design
* User-friendly forms

---

# Features

## Authentication

* User Signup
* User Login
* Password Hashing
* JWT Authentication

## URL Management

* Create Short URLs
* Fetch All URLs
* Delete URLs
* Copy Short URLs

## Analytics

* Click Count Tracking
* Last Visited Tracking
* Visit History Tracking

## Dashboard

* Total URLs Count
* Total Clicks Count
* URL Table
* Responsive Design

---

# Technology Stack

## Frontend

* React
* Axios
* React Router DOM
* React Icons

## Backend

* Node.js
* Express.js
* JWT
* bcryptjs

## Database

* MongoDB Atlas
* Mongoose

---

# Architecture Diagram

```text
┌──────────────────┐
│   React Frontend │
└────────┬─────────┘
         │ REST API
         ▼
┌──────────────────┐
│ Express Backend  │
└────────┬─────────┘
         │ Mongoose
         ▼
┌──────────────────┐
│ MongoDB Atlas    │
└──────────────────┘
```

---

# Project Structure

```text
backend
├── config
├── controllers
├── models
├── routes
├── .env
└── server.js

frontend
├── src
│   ├── pages
│   ├── components
│   ├── App.jsx
│   └── index.css
└── package.json
```

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
```

## Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run Backend

```bash
npm start
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Assumptions Made

* MongoDB Atlas is available and accessible.
* Users provide valid URLs.
* Short codes are generated randomly.
* Analytics data is stored in MongoDB.
* JWT tokens are used for session management.

---

# API Endpoints

## Authentication

POST /api/auth/signup

POST /api/auth/login

## URL

POST /api/url/shorten

GET /api/url/all

DELETE /api/url/:id

GET /:code

---

# Sample Database Entry

```json
{
  "longUrl": "https://www.instagram.com",
  "shortCode": "hgk3rs",
  "shortUrl": "http://localhost:5000/hgk3rs",
  "clicks": 2,
  "lastVisited": "2026-06-14T16:06:23.503Z"
}
```

---

# Sample Output

## Dashboard

* Total URLs Created
* Total Clicks Recorded
* URL Management Table

## Analytics

* Click Count
* Last Visited Time
* Visit History

---


# Demo Video

Add your Loom or YouTube video link here:

https://your-demo-video-link

---

# Future Enhancements

* Custom URL Alias
* QR Code Generation
* Device Analytics
* Browser Analytics
* Geolocation Tracking
* URL Expiry Support

---

This project is a part of a hackathon run by https://katomaran.com
