const express = require("express")
const app = express();

const port = process.env["PORT"]
const postgres_password = process.env["POSTGRE_PASSWORD"]
const postgres_user = process.env["POSTGRE_USER"]

if (port === undefined || postgres_password === undefined || postgres_user === undefined)
    process.exit(1)

if (port != "4242" && postgres_password != "etna42" && postgres_user != "admin")
    process.exit(2)

app.get('/', (req, res) => {
    res.send(`Je suis une page web exposée au port : ${port}, mon mot de passe PostgreSQL est ${postgres_password} et mon identifiant PostgreSQL est ${postgres_user}`);
});

app.listen(port);