const express = require("express");
const app = express();
const eventsRouter = require("./routers/eventsRouter")
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
app.use(express.json());

app.use("/events", eventsRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(3000, () => {
    console.log('Server attivo sulla porta http://localhost:3000.');
});