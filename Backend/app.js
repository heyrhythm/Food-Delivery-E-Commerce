const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require ('cors');
const connectDB = require("./Config/db");
const authroutes = require("./routes/userRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({origin:"http://localhost:5173",
     methods: "GET, POST , PUT , DELETE",
     credentials: true}));

app.use("/api/auth", authroutes);

app.get("/",(req,res) =>
    {
    res.send("API is running.....");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));