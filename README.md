#  IskoArena Platform

A modern, event-driven **sports management platform** built for UP Cebu Iskolaro (Intramurals).  
It provides **real-time game updates, analytics, standings, and player data** across both **web (Admin)** and **mobile (Client)** applications — powered by **microservices**, **Kafka**, and **PostgreSQL**.

---

##  Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Core Features](#core-features)
- [System Components](#system-components)
- [Data Flow](#data-flow)
- [Setup & Installation](#setup--installation)
- [Development Workflow](#development-workflow)
- [Future Improvements](#future-improvements)
- [License](#license)

---

##  Overview

**IskoArena** is a modular platform that enables UP Cebu Intramurals stakeholders to manage Iskolaro efficiently.  
It supports:
- Centralized **admin dashboards** for scheduling, analytics, and standings.
- Real-time **mobile updates** for players, fans, and organizers.
- Seamless data synchronization across distributed services.

---

##  Architecture

![IskoArena Architecture](./9934a621-a009-41f6-a680-c3341fe9f8f1.png)

The platform follows a **microservices-based architecture** deployed across **Vercel (Frontend)** and **Dockerized Node.js services** for backend APIs.  
A **Kafka message broker** handles asynchronous communication between admin and mobile backends.

### Key Layers
1. **Frontend Clients**
   - **Admin UI (React + Tailwind)**: Used by organizers for scheduling, analytics, and management.
   - **Mobile Client (Flutter)**: Used by players and fans to view live scores, standings, and notifications.

2. **API Gateway**
   - Acts as a unified entry point for both admin and mobile clients.
   - Handles authentication, routing, and load balancing between services.

3. **Microservices**
   - **Admin Backend**: Game scheduling, live score input, analytics, authentication.
   - **Mobile Backend**: Consumes Kafka topics to display real-time updates and notifications.
   - **Analytics Service**: Processes and aggregates player and game data for dashboards and leaderboards.

4. **Message Broker**
   - **Kafka** manages real-time topics:
     - `games_schedules_topic`
     - `live_scores_topic`
     - `updates_topic`

5. **Databases**
   - PostgreSQL for persistent storage:
     - Schedules
     - Standings
     - Player data
     - Authentication

6. **Hosting**
   - **Frontend:** Deployed on [Vercel](https://vercel.com)
   - **Backend:** Dockerized Node.js microservices
   - **Database:** PostgreSQL (managed instance or containerized)
   - **Message Broker:** Apache Kafka

---

##  Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend (Admin)** | React, TailwindCSS, Vite, Vercel |
| **Frontend (Mobile)** | Flutter, Vercel |
| **Backend** | Node.js, Express.js, Docker |
| **Database** | PostgreSQL |
| **Message Broker** | Apache Kafka |
| **Analytics** | PostgreSQL (aggregated views, KPIs) |
| **Deployment** | Docker + Vercel |
| **Version Control** | Git + GitHub |

---

##  Core Features

### Admin Portal
-  Game scheduling & management  
-  KPI dashboards (attendance, performance trends, leaderboards)  
-  Live score updates  
-  Player & team management  

### Mobile App
-  Real-time notifications  
-  Live standings & scores  
-  Upcoming matches view  

### Analytics & Insights
-  Most active day  
-  Peak attendance  
-  Average game duration  
-  Championship tracking  
-  Wins vs. losses visualization  

---

##  Data Flow

1. **Admin UI** pushes updates → API Gateway → Admin Microservices.  
2. **Microservices** publish updates to **Kafka topics** (`games_schedules`, `live_scores`, `updates`).  
3. **Mobile Backend** consumes Kafka messages → updates Postgres → serves mobile clients.  
4. **Analytics service** periodically aggregates results → dashboards.  

---

##  Setup & Installation

###  Clone the Repository
```bash
git clone https://github.com/<your-username>/iskoArena.git
cd iskoArena-admin
