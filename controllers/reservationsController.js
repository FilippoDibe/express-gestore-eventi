const Reservation = require('../models/reservationsModel');

const index = (req, res) => {
    try {
        const eventId = parseInt(req.params.eventId);
        const eventReservations = Reservation.getByEventId(eventId);
        res.json(eventReservations);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};


const store = (req, res) => {
    try{
        const reservations = Reservation.getAll();
        const newEvent = Reservation.createNewReservation(req.body);

        reservations.push(newEvent);
        Reservation.writeJSON('reservations', reservations);

        res.status(201).json({ message: 'prenotazione  creata con successo' });
    }catch (err){
        console.error(err.message);
        res.status(500).send('server error');
    }
}


const destroy = (req, res) => {
    try {
        const eventId = parseInt(req.params.eventId);
        const reservationId = parseInt(req.params.reservationId);
        const result = Reservation.deleteByReservationIdAndEventId(reservationId, eventId);
        if (result) {
            res.status(200).json({ message: 'Prenotazione eliminata con successo' });
        } else {
            res.status(404).json({ message: 'Prenotazione non trovata' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};


module.exports = {
    index,
    store,
    destroy
};
