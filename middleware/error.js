class EventPassedError extends Error {
  constructor(message) {
    super(message || 'Impossibile aggiungere o rimuovere una prenotazione per un evento passato');
    this.name = 'EventPassedError';
  }
}

class NoSeatsAvailableError extends Error {
  constructor(message) {
    super(message || 'Impossibile aggiungere una prenotazione, posti esauriti');
    this.name = 'NoSeatsAvailableError';
  }
}

module.exports = { EventPassedError, NoSeatsAvailableError };
