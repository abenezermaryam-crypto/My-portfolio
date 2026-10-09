import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory / File-Persisted Storage
const DB_FILE = path.join(__dirname, "db.json");

const getDb = () => {
  if (!fs.existsSync(DB_FILE)) {
    const initialDb = {
      messages: [],
      cvDownloads: 0,
      guestbook: [
        {
          id: 1,
          name: "Dr. Aster Tadesse",
          role: "Health Informatics Instructor",
          message: "Yechale shows exceptional ability in bridging clinical healthcare requirements with modern software development.",
          date: "March 2025",
          likes: 14,
        },
      ],
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialDb, null, 2));
    return initialDb;
  }
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
  } catch (err) {
    return { messages: [], cvDownloads: 0, guestbook: [] };
  }
};

const saveDb = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// 1. Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 2. Contact Inquiries API
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const db = getDb();
  const newMsg = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    subject: subject?.trim() || "No Subject",
    message: message.trim(),
    receivedAt: new Date().toISOString(),
    isRead: false,
  };

  db.messages.unshift(newMsg);
  saveDb(db);

  console.log(`[Contact API] New inquiry received from ${name} (${email})`);
  return res.status(201).json({ success: true, message: "Inquiry saved successfully.", data: newMsg });
});

app.get("/api/messages", (req, res) => {
  const db = getDb();
  res.json({ total: db.messages.length, messages: db.messages });
});

// 3. Guestbook API
app.get("/api/guestbook", (req, res) => {
  const db = getDb();
  res.json({ success: true, data: db.guestbook });
});

app.post("/api/guestbook", (req, res) => {
  const { name, role, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required." });
  }

  const db = getDb();
  const newEntry = {
    id: Date.now(),
    name: name.trim(),
    role: role?.trim() || "Visitor",
    message: message.trim(),
    date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    likes: 0,
  };

  db.guestbook.unshift(newEntry);
  saveDb(db);
  return res.status(201).json({ success: true, data: newEntry });
});

// 4. CV Analytics Tracking
app.post("/api/analytics/cv-download", (req, res) => {
  const db = getDb();
  db.cvDownloads = (db.cvDownloads || 0) + 1;
  saveDb(db);
  console.log(`[Analytics] CV Downloaded! Total: ${db.cvDownloads}`);
  res.json({ success: true, totalDownloads: db.cvDownloads });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on http://localhost:${PORT}`);
});
