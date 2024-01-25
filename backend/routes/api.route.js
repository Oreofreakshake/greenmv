const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

let refreshTokens = [];

router.post("/refresh", (req, res) => {
    //take the refresh token from the user
    const refreshToken = req.body.token;

    //send error if there is no token or it's invalid
    if (!refreshToken)
        return res.status(401).json("You are not authenticated!");
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json("Refresh token is not valid!");
    }
    jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
        err && console.log(err);
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        refreshTokens.push(newRefreshToken);

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    });

    //if everything is ok, create new access token, refresh token and send to user
});

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id }, "mySecretKey", {
        expiresIn: "600s",
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id }, "myRefreshSecretKey");
};

router.post("/login", async (req, res) => {
    const user = await prisma.staff.findFirst({
        where: {
            username: req.body.username,
            password: req.body.password,
        },
    });

    if (user) {
        //Generate an access token
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.json({
            accessToken,
            refreshToken,
            user,
        });
    } else {
        res.status(400).json("Username or Password is incorrect!");
    }
});

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "mySecretKey", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated!");
    }
};

router.post("/logout", verify, (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.status(200).json("You logged out successfully.");
});

// =========================================================================================================
//Data

router.get("/data", verify, async (req, res, next) => {
    try {
        const data = await prisma.data.findMany({});
        res.json(data);
    } catch (error) {
        next(error);
    }
});

router.post("/data", async (req, res, next) => {
    try {
        const data = await prisma.data.create({
            data: req.body,
        });
        res.json({ status: res.status, success: "created" });
    } catch (error) {
        next(error);
    }
});

router.patch("/data/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await prisma.data.update({
            where: {
                id: Number(id),
            },
            data: req.body,
        });
        res.json(post);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
