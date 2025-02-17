const express = require('express');
const appointmentsController = require("../controllers/appointmentsController");

const {
    getAllAppointments,
    getOneAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment

} = appointmentsController

const router = express.Router()


router.route('/').get(getAllAppointments).post(createAppointment);

router.route("/:id")
    .get(getOneAppointment)
    .patch(updateAppointment)
    .delete(deleteAppointment);

module.exports = router;