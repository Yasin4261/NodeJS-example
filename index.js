const express = require("express");
const app = express();

app.use("/products/:id", function(req, res) {
    res.send("product details : " + req.params.id);
});

app.use("/", function(req, res) {
    res.send("Home");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});