const express = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send("Bravo pour votre premier Dockerfile !");
});

app.listen(8080);