const path = require("path");
const fs = require("fs");
const Event = require('../models/eventsModel');
const { error } = require("console");

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
    try{
        const events = Event.getAll();
        const newEvent = Event.createNewEvent(req.body);

        events.push(newEvent);
        Event.writeJSON('events', events);

        res.status(201).json({ message: 'Evento creato con successo' });
    }catch (err){
        console.error(err.message);
        res.status(500).send('server error');
    }
}


const update = (req, res) => {
    try{
        const eventId = parseInt(req.params.id);
        const eventData = req.body;

        const updateEvent = Event.updateEventById(eventId, eventData);

        res.status(201).json({message: 'evento modificato con successo'});
    } catch (err){
        console.error(err.message);
        res.status(500).send('server error');
    }

}



module.exports = {
    index,
    store,
    update
}