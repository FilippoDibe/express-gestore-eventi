const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventsController");
const reservationsController = require("../controllers/reservationsController");

router.get("/", eventsController.index);
router.post("/", eventsController.store);
router.put("/:id", eventsController.update);

router.get("/:eventId/reservations", reservationsController.index);
router.post("/:eventId/reservations", reservationsController.store);
router.delete("/:eventId/reservations/:reservationId", reservationsController.destroy);

module.exports = router;

