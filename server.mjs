import express from "express";

const app = express();
const portNumber = 5000;

app.get("/", (req, res) => {
    res.send("It's the dawn of a new server...");
});

app.listen(portNumber, () => {
    console.log(`The party is going on at port ${portNumber}`);
});
