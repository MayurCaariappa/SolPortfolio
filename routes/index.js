const { Router } = require("express");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());


const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({
        msg: `Hello World.`
    });
});


module.exports = { router };