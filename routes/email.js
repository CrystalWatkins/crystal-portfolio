const express = require("express");
const router =express.Router();
const sendEmail= require("../utils/sendEmail");
require("dotenv").config();

router.post("/", async (req, res) => {
const from = req.body.from; 
const subject = req.body.subject;
const text = req.body.text;
const result = await sendEmail(from, subject, text);
res.send(result);
})

module.exports = router;