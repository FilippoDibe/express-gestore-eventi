const express = require("express");
const app = express();
const eventsRouter = require("./routers/eventsRouter")

app.use(express.json());

app.use("/events", eventsRouter);

app.listen(3000, () => {
    console.log('Server attivo sulla porta http://localhost:3000.');
});