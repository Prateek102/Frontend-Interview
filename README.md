# CA Monk Blog Application 📝

A modern, responsive blog application built as part of the **CA Monk Frontend Interview Assignment**.  
The project demonstrates clean UI design, state management, API integration, and best practices using React and modern frontend tools.

<img width="1908" height="981" alt="Final Website" src="https://github.com/user-attachments/assets/ec67e4bf-3198-4976-ad92-b4d35aea6340" />
<img width="1890" height="616" alt="Create new blog" src="https://github.com/user-attachments/assets/31626b7b-3669-4b97-be4d-8b2c7273bae4" />
<img width="1907" height="316" alt="footer" src="https://github.com/user-attachments/assets/54acfefa-1b93-469f-a0fe-7c16d2bec13d" />

---

## 🚀 Features

- 📄 **Two-Panel Layout**
  - Left: Blog list (category, title, description, date)
  - Right: Blog details (cover image, full content)

- ⚡ **Automatic Blog Selection**
  - First blog is displayed automatically on initial load

- 🧭 **Navigation Bar**
  - Home → Blog list
  - About → About section
  - Contact → Footer section
  - Create Blog → Blog creation form

- ✍️ **Create Blog**
  - Add new blogs using a form
  - Updates UI instantly after submission

- 🎨 **Modern UI**
  - Tailwind CSS for styling
  - shadcn/ui components
  - Responsive design for all screen sizes

- 🔄 **Server State Management**
  - TanStack Query for data fetching and mutations

---

## 🛠 Tech Stack

- **React (TypeScript)**
- **Vite**
- **TanStack Query**
- **Tailwind CSS**
- **shadcn/ui**
- **JSON Server** (Mock Backend)
- **React Router**

---

## 📁 Project Structure

src/
├── api/ # API calls
├── components/ # App components
│ ├── ui/ # shadcn UI components
│ └── CreateBlog.tsx
├── pages/ # Page components
├── types/ # TypeScript types
├── lib/ # Utilities
└── main.tsx


---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ca-monk-blog.git
cd ca-monk-blog

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ca-monk-blog.git
cd ca-monk-blog
2️⃣ Install dependencies
npm install

3️⃣ Start JSON Server (Backend)
npm run server


Runs at:
👉 http://localhost:3001

4️⃣ Start the development server
npm run dev


Runs at:
👉 http://localhost:5173

📌 API Endpoints
Method	Endpoint	Description
GET	/blogs	Fetch all blogs
GET	/blogs/:id	Fetch blog by ID
POST	/blogs	Create a new blog
