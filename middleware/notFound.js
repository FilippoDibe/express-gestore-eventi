const notFound = (req, res, next) => {
    res.status(404).json({ message: 'Risorsa non trovata' });
};

module.exports = notFound;