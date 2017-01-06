const express = require("express");
const app     = express();
const http    = require("http").Server(app);

app.use(express.static(`${__dirname}/www/`));
app.use(express.static(`${__dirname}/bower_components/jquery-ui`));

app.get("/jquery", (req, res) => {
    res.sendFile(`${__dirname}/bower_components/jquery/dist/jquery.min.js`);
});

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/www/index.html`);
});

http.listen(3000, () => {
    console.log("De server is opgestart");
})