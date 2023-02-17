const express = require("express");
const app = express();

app.use("/products/:id", function(req, res) {
    res.send("product details : " + req.params.id);
});

app.use("/", function(req, res) {
    res.send("Home");
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Listening on port 3000");
});