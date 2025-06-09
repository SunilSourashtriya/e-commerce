const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sunil123:sunil123@e-commerce.iivqz7r.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce", {
}).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("❌ Connection error:", err);
});
