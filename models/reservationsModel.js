const path = require("path");
const fs = require("fs");

class Reservation {
    constructor(id, firstName, lastName, email, eventId){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.eventId = eventId;
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
        return this.readJSON('reservations');
    }
    static getById(eventId) {
        const reservations = this.readJSON('reservatons');
        return reservations.find(reservation => reservation.eventId === eventId );
    }
    static createNewReservation(data){
        const newReservation = new Reservation(
            data.id,
            data.firstName,
            data.lastName,
            data.email,
            data.eventId,
        );
        return newReservation;
    }
    static getByEventId(eventId) {
        const reservations = this.getAll();
        return reservations.filter(reservation => reservation.eventId === eventId);
    }
    static deleteByReservationIdAndEventId(reservationId, eventId) {
        let reservations = this.getAll();
        const index = reservations.findIndex(reservation => reservation.id === reservationId && reservation.eventId === eventId);
        if (index !== -1) {
            reservations.splice(index, 1);
            this.writeJSON('reservations', reservations);
            return true;
        }
        return false; // Prenotazione non trovata
    }
    
    
    

}
module.exports = Reservation;