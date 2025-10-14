const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const user = require("./model/user.js");
// lowercase, matches your file

dotenv.config({ path: "./config/.env" });

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

async function seedAdmin() {
  const hashedPassword = await bcrypt.hash("Admin123", 10);

  const admin = new user({
    name: "Admin",
    email: "admin@example.com",
    password: hashedPassword,
    role: "Admin",
    avatar: "default.png",
  });

  await admin.save();
  console.log("Admin seeded successfully!");
  mongoose.disconnect();
}

seedAdmin();
