const router = require("express").Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


// const jwtPrivateKey = fs.readFileSync('./rsa.pem', 'utf8');
const jwtPrivateKey = process.env.JWTKEY;

dotenv.config();

const User = require("../models/User");
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

// Register
router.post("/register", async(req, res, next) => {
    if (!req.body.username ||
        !req.body.password ||
        !req.body.email ||
        !req.body.userType
    ) {
        res.status(200).json({ message: "Please fill the required inputs!" });
    } else {
        // Check if user email exists
        const existingUser = await User.findOne({
            email: req.body.email,
        });

        if (!!existingUser) {
            return res.status(200).json({ message: "Email already taken!" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            userType: req.body.userType,
            securityQuestion: req.body.securityQuestion,
            securityAnswer: req.body.securityAnswer,
        });
        try {
            const savedUser = await newUser.save();

            const { password, ...otherUserInfo } = savedUser._doc;
            res
                .status(201)
                .json({ message: "Account Created Successfully!", otherUserInfo });
        } catch (err) {
            return next(err);
        }
    }
});

// Login
router.post("/login", async(req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json("Please fill the required inputs!");
    } else {
        try {
            const user = await User.findOne({ email: req.body.email });

            // !user && res.status(401).json("Wrong Credientials!");
            if (!user) {
                return res.status(401).json({ message: "Wrong Credientials!" });
            }


            const passwordMatch = await bcrypt.compare(req.body.password, user.password);


            // userPassword !== req.body.password && res.status(401).json("Wrong Credientials!");
            if (!passwordMatch) {
                return res.status(401).json({ message: "Wrong Credientials!" });
            }

            const accessToken = jwt.sign({
                    _id: user._id,
                    isAdmin: user.userType === "admin",
                    email: user.email,
                    username: user.username,
                    userType: user.userType,
                    securityQuestion: user.securityQuestion,
                    securityAnswer: user.securityAnswer,
                    isLoggedIn: true,
                },
                jwtPrivateKey, {
                    expiresIn: "7d",
                }
            );

            const { password, ...userDetails } = user._doc;

            res.status(200).json({ message: "Log In Successful!", accessToken });
        } catch (err) {
            return next(err);
        }
    }
});


// Update
router.put("/updateprofile", verifyToken, async(req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.body._id, {
            username: req.body.username,
            email: req.body.email,
            userType: req.body.userType,
            securityQuestion: req.body.securityQuestion,
            securityAnswer: req.body.securityAnswer,
        });

        const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.userType === "admin",
                email: user.email,
                username: user.username,
                userType: user.userType,
                securityQuestion: user.securityQuestion,
                securityAnswer: user.securityAnswer,
                isLoggedIn: true,
            },
            jwtPrivateKey, {
                expiresIn: "7d",
            }
        );
        res.status(201).json({ message: "Update Successful!" });
    } catch (error) {
        next(error);
    }
});

// Forgot Password
router.put("/changepassword", async(req, res, next) => {


    if (!req.body.securityAnswer ||
        !req.body.password ||
        !req.body.email ||
        !req.body.securityQuestio
    ) {
        res.status(400).json("Please fill the required inputs!");
    } else {
        try {
            const securityQuestion = req.body.securityQuestion;
            const securityAnswer = req.body.securityAnswer;

            const user = await User.findOne({
                email: req.body.email,
            });

            // !user && res.status(401).json("Wrong Credientials!");
            if (!user) {
                return res.status(401).json({ message: "Wrong Credientials!" });
            }

            // !user && res.status(401).json("Wrong Credientials!");
            if (user.securityAnswer != req.body.securityAnswer) {
                return res.status(401).json({ message: "Wrong Credientials!" });
            } else {
                try {
                    const saltRounds = 10;
                    const user = await User.findOneAndUpdate({ email: req.body.email }, {
                        password: await bcrypt.hash(req.body.password, saltRounds),
                    });

                    res.status(201).json({ message: "Password Change Successful!" });
                } catch (error) {
                    next(error);
                }
            }
        } catch (err) {
            return next(err);
        }
    }
});

router.post("/getSecurityQuestion", async(req, res, next) => {
    if (!req.body.email) {
        res.status(400).json("Please fill the required inputs!");
    } else {
        try {
            const user = await User.findOne({ email: req.body.email });

            if (!user) {
                return res.status(401).json({ message: "Wrong Credientials!" });
            }

            const securityQuestion = user.securityQuestion

            res.status(200).json({ message: "Email Verified!", "securityQuestion": securityQuestion });
        } catch (err) {
            return next(err);
        }
    }
});

module.exports = router;