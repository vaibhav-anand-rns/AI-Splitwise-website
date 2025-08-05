💸 AI Splitwise – Smart Bill Splitting with AI
AI Splitwise is a web application that simplifies expense tracking and bill splitting using the power of AI. Inspired by the popular Splitwise app, this version includes AI-assisted parsing of natural language expense inputs, automatic calculation of splits, and a smooth user experience for managing group expenses.

✨ Features
🧠 AI-Powered Input Parsing – Add expenses by typing natural language like “John paid $45 for groceries, split between 3 people”.

👥 Group & Individual Expenses – Track who owes whom across group and individual transactions.

📊 Real-Time Balance Calculations – Instantly see how much each person owes or is owed.

🗂️ Expense History – Full log of all group expenses with timestamps and payer/split info.

🛠️ Editable Entries – Easily update or delete expense records.

☁️ Persistent Storage – Store data in a backend database for continuity across sessions.

🛠 Tech Stack
Frontend: Next.js 15, React, Tailwind CSS, Shadcn UI
Backend: Next.js API Routes, Server Actions
Database: PostgreSQL (Neon) with Prisma ORM
Authentication: Clerk
AI: Google Gemini API
Deployment: Vercel


# Clone the repo
git clone https://github.com/yourusername/ai-splitwise.git
cd ai-splitwise

# Install dependencies
npm install

# Start the backend
cd backend
npm install
npm run dev

# Start the frontend
cd ../frontend
npm install
npm start





