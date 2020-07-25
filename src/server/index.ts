import express = require("express");

const app: express.Application = express();

app.get("/", function (_, res) {
    res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`App is listening on port ${port}!`);
});
