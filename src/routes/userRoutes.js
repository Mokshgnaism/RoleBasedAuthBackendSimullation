const express = require("express");
const router = express.Router();
const authorizeRoles = require("../middlewares/roleMiddleware")
const verifyToken = require("../middlewares/authMiddleware")
//only admin can access this route . 
router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"welcome admin"});
});

//only manager and admin . 
router.get("/manager",verifyToken,authorizeRoles("admin","manager"),(req,res)=>{
    res.json({message:"welcome manager"});
});

//every body can access this route . 
router.get("/user",verifyToken,authorizeRoles("admin","manager","user"),(req,res)=>{
    res.json({message:"welcome user"});
});

module.exports = router;