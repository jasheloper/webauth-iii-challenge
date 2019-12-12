const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");


router.post("/register", (req, res) => {
   let user = req.body;
   const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
   user.password = hash;
 
   Users.add(user)
     .then(saved => {
       res.status(201).json(saved);
     })
     .catch(error => {
       res.status(500).json(error);
     });
 });
 
 router.post("/login", (req, res) => {
   let { username, password } = req.body;
 
   Users.findBy({ username })
     .first()
     .then(user => {
       if (user && bcrypt.compareSync(password, user.password)) {
         // after user authenticates, confirm that user exists,
         // create token
         // payload + secret + options (optional)
 
         const token = genToken(user); // helper function below
 
         res.status(200).json({
           // pass back msg + token
           message: `Welcome ${user.username}!`,
           token: token
         });
       } else {
         res.status(401).json({ message: "Invalid Credentials" });
       }
     })
     .catch(error => {
       res.status(500).json(error);
     });
 });