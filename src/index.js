const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect.js");
const app = express();
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
//middleware
dbConnect();
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
//routes

//starting a server 
const PORT = process.env.PORT||7002||3000||3001;
app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
});