const path = require("path");
const fs = require("fs");
const Event = require('../models/eventsModel');

const index = (req, res) => {
    try {
        // Chiamata ai metodi statici del modello Event per ottenere gli eventi filtrati
        const filteredEvents = Event.filterByQuery(req.query);
        res.json(filteredEvents);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

const store = (req, res) => {

}


const update = (req, res) => {


}



module.exports = {
    index,
    store,
    update
}