Functional Requirements: What the software should do
- 
Non-functional Requirements: Performance, security, usability constraints
Technical Architecture: System design and implementation details
User Interface Specifications: How users will interact with the system
Integration Requirements: How the software connects with other systems
Testing Criteria: How success will be measured

You are a senior fullstack developer helping me build a web application for managing clients and documents.

Here’s what I want:

### 🔧 App Overview
- Tax refund manager system 
- Acconunt register page
- Users log in and see a table of customers.
- Clicking a customer opens a detailed pane with all personal information and uploaded files (PDFs/images).
- Accountants can also manually add new customers that are not scraped from Plando.
- Each client is assigned to one or more accountant users.
- Accountants should only see clients assigned to them.

### 🧠 Tech Stack
- Frontend: React (with TypeScript), Redux, Next.js
- Backend: Node.js + TypeScript (can use Express)
- DB: MongoDB Atlas (free tier)
- File Storage: Cloudinary (for now)
- Authentication: JWT (manual implementation is fine)
- Hosting: Monolith (not microservices) for now using Render.com or Railway.app
- Goal: Low-cost / free deployment, monorepo-friendly

### 📋 Customer Schema
Each client record should include the following fields:
- firstName, lastName
- idNumber
- gender, dateOfBirth, age, maritalStatus
- phone, alternatePhone, email, address, city
- partnerName, partnerIdNumber, partnerAge
- source ("manual" or "plando")
- status (e.g., "new", "in_progress", "done")
- createdAt, updatedAt
- assignedAccountants: list of accountant user IDs
- documents: list of `{ name, type, url }`
- chatFiles: list of scraped or uploaded files
- notes: string

### 👤 Accountant Schema
- email
- hashedPassword
- fullName
- assignedClients: array of client IDs

### 🔐 Auth
- Secure login with email & password (JWT-based)
- Accountants should only access their clients
- Protected backend routes with JWT middleware

### 💾 File Upload
- Client documents (images/PDFs) uploaded from browser
- Uploads should go to Cloudinary
- URLs stored in MongoDB under `documents`

### ✅ Features
- Login screen
- Customer table with search + filtering +editing option
- Click to expand customer details
- Add customer form (manual entry)
- File upload support per customer
- Minimal, clean UI using Tailwind and shadcn

### 💻 Dev Notes
- Keep frontend and backend in seperate project/repo
- pull data from atlas db add this var to env: MONGO_URI thats the url to pull all data 
- Use `.env` for credentials (Mongo URI, JWT secret, Cloudinary keys)
- Deployment should work on Render.com (monolith)

💬 Please generate a starter codebase or modular boilerplate that sets this up cleanly.

# Implemetation specifics client
- pull all clients from atlas 
- use tailwind 
- use shadcn for react components
- use shadcn Data Table to present clients https://ui.shadcn.com/docs/components/data-table 
- schema of client in mongo: {
  "_id": {
    "$oid": "685d0fd2eaf140a2865c0a64"
  },
  "plandoId": "10415309",
  "name": "רותי דמרי",
  "status": "לקוח",
  "caseStatus": "1. [מכירות] תיק חדש - עדיין לא הושגו מסמכים",
  "firstSaleDate": "25/06/2025",
  "responsibleStaff": "צחי חצקלביץ (צוות יהלום)",
  "profileUrl": "https://plando.co.il/contacts/show/10415309",
  "fullName": "רותי דמרי",
  "gender": "",
  "age": "",
  "familyStatus": "נשוי/אה",
  "id": "26966903",
  "phone": "050-9446663",
  "email": "",
  "city": "ירושלים",
  "partnerName": "",
  "partnerId": "050654318",
  "chatFiles": [
    "https://chat.maxchats.com/dwnld?url=https://smschat.org/storage/attachments/cmYzvhku6wKYY7bsHL0sVCJjEZSa3uJSgaS7li0p.jpg",
    "https://chat.maxchats.com/dwnld?url=https://smschat.org/storage/attachments/bc0E7n0saL8tKaGzuvGbANmlk0uUR75VSCeK5ZjH.jpg",
    "https://chat.maxchats.com/dwnld?url=https://smschat.org/storage/attachments/WiIcIDbs6Q8dvUiNyptMavwcaZUxK014SSnBrida.jpg"
  ],
  "panelFiles": [
    "https://bigteam.co.il/signed_forms1/doc3cf8c65262e79be53f22de190b2adaabagfakfl.pdf"
  ],
  "scrapedAt": {
    "$date": "2025-06-26T09:16:02.570Z"
  }
}
 