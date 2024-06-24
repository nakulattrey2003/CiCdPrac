const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(5000, (req, res) => {
    console.log('Port started on port 5000');
})