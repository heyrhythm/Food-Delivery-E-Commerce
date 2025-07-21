const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require ('cors');
const connectDB = require("./Config/db");
const authroutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const searchRoutes = require("./routes/search")

dotenv.config();
const app = express();
const port = 5000;

app.use(express.json());
app.use(
    cors({
     origin:process.env.FRONTEND_URL || "http://localhost:5173",
     methods: "GET, POST , PUT , DELETE",
     credentials: true}));

 app.use(bodyParser.json()); 
 mongoose.set('strictQuery', true);   

 mongoose.connect(process.env.MONG0_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(" MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


  // Routes
app.use("/api/search", searchRoutes);
app.use("/api/auth", authroutes);

const cartRoutes = require('./routes/cartRoute');
app.use('/api/cart', cartRoutes);

app.get("/",(req,res) =>
    {
    res.send("API is running.....");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));