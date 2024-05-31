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
        const filePath = path.join(__dirname, 'db', `${fileName}.json`);
        const json = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(json);
    }

    static writeJSON(fileName, data) {
        const filePath = path.join(__dirname, 'db', `${fileName}.json`);
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
}


module.exports= Event;