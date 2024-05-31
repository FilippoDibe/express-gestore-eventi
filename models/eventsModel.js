const path = require("path");
const fs = require("fs");

class Event {
    constructor( id, title, description, date, maxSeats){
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }
    static readJSON(fileName) {
        const filePath = path.join(__dirname,'..', 'db', `${fileName}.json`);
        const json = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(json);
    }

    static writeJSON(fileName, data) {
        const filePath = path.join(__dirname,'..', 'db', `${fileName}.json`);
        const json = JSON.stringify(data);
        fs.writeFileSync(filePath, json);
    }
    static getAll() {
        return this.readJSON('events');
    }
    static getById(id) {
        const events = this.readJSON('events');
        return events.find(event => event.id === id );
    }
    static filterByQuery(queryParams) {
        let events = Event.getAll();

        // Filtra per titolo
        if (queryParams.title) {
            const title = queryParams.title.toLowerCase();
            events = events.filter(event => event.title.toLowerCase().includes(title));
        }

        // Filtra per ID
        if (queryParams.id) {
            const id = parseInt(queryParams.id);
            events = events.filter(event => event.id === id);
        }

        // Filtra per data
        if (queryParams.date) {
            events = events.filter(event => event.date === queryParams.date);
        }

        // Filtra per numero di posti
        if (queryParams.maxSeats) {
            const maxSeats = parseInt(queryParams.maxSeats);
            events = events.filter(event => event.maxSeats >= maxSeats);
        }

        return events;
    }
}


module.exports= Event;