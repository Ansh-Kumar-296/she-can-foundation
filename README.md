# She Can Foundation

A modern full-stack NGO website built to support and empower women through education, mentorship, leadership development, skill-building programs, and community engagement.

## Live Demo

https://she-can-foundation-steel.vercel.app/

---

## Features

### Public Website

* Modern responsive UI
* Animated Hero Section
* Interactive About Section
* Impact Statistics Section
* Volunteer Registration Form
* Premium Aceternity UI Effects
* Mobile Friendly Design

### Volunteer Management

* Volunteer registration form
* Data stored in MongoDB
* Real-time submission tracking

### Admin Panel

* Admin Signup
* Admin Login
* Secure Admin Dashboard
* Search Volunteers
* Filter by Status
* Approve Volunteers
* Reject Volunteers
* Delete Volunteer Applications

### Admin Management

* View All Registered Admins
* Delete Admin Accounts
* Premium Interactive Card Interface

---

## Tech Stack

### Frontend

* Next.js 16
* React
* Tailwind CSS
* Aceternity UI
* Framer Motion

### Backend

* Next.js API Routes
* MongoDB Atlas
* Mongoose

### Deployment

* Vercel

---

## Project Structure

```bash
src/
├── app/
│   ├── about/
│   ├── volunteer/
│   ├── admin/
│   ├── api/
│   └── page.js
│
├── components/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Impact.jsx
│   ├── VolunteerForm.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── models/
│   ├── Admin.js
│   └── Submission.js
│
└── lib/
    └── mongodb.js
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Ansh-Kumar-296/she-can-foundation.git
```

Navigate into the project:

```bash
cd she-can-foundation
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Admin Routes

```txt
/admin/login
/admin/signup
/admin
/admin/manage-admins
```

---

## Future Enhancements

* Email Notifications
* Role-Based Access Control
* Volunteer Profile Dashboard
* Event Management System
* Analytics Dashboard
* Donation Portal
* Multi-Admin Permissions

---

## Author

**Ansh Kumar**

B.Tech CSE (AI & ML)

GitHub: https://github.com/Ansh-Kumar-296

---

## License

This project is developed for educational and social impact purposes.
