const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers['authorization'];  // Accessed authorization header in a case-insensitive way
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];  // Extract token from "Bearer <token>"
        if (!token) {
            return res.status(401).json({ message: "No token, auth denied" });
        }
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            console.log("user is: ", req.user);
            next();
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Token invalid" });
        }
    } else {
        return res.status(401).json({ message: "No token, auth denied" });
    }
};

module.exports = verifyToken;
