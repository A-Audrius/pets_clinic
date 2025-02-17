const app = require("../app");
const { 
    getAllAppointments,
    getAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment

    } = require("../models/appointmentsModels");
    

  
  exports.getAllAppointments = async (req, res, next) => {
    try {
      const appointments = await getAllAppointments();
  
      res.status(200).json({
        status: "success",
        allAppointments: appointments,
      });
    } catch (error) {
      next(error);
    }
  };
  

  exports.getOneAppointment = async (req, res, next) => {
    const { id } = req.params;
    try {
      const appointment = await getAppointment(id);
      res.status(200).json({
        status: "success",
        data: appointment,
      });
    } catch (error) {
      next(error);
    }
  };

  exports.createAppointment = async (req, res) => {

    console.log(req.body);
    try {
      const newAppointment = req.body;
      console.log(newAppointment);
      
      if (!newAppointment || !newAppointment.name || !newAppointment.fullname || !newAppointment.description || !newAppointment.date) {
        res.status(400).json({
          status: 'fail',
          message:
            'Missing appointment information, or its required fields: name, fullname, date, time',
        });
        return;
      }
  
      const createdAppointment = await createAppointment(newAppointment);
  
      res.status(201).json({
        status: 'success',
        data: createdAppointment,
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };


  exports.updateAppointment = async (req, res) => {
    const { id } = req.params;
    const appointment = req.body;
  
    const newAppointment = await updateAppointment(id, appointment);
  
    res.status(200).json({
      status: "success",
      data: newAppointment,
    });
  };


  exports.deleteAppointment = async (req, res) => {
    try {
      const { id } = req.params;
  
      const appointment = await deleteAppointment(id);
  
      if (!appointment) {
        res.status(404).json({
          status: 'fail',
          message: 'Invalid id, appointment not found and not deleted',
        });
        return;
      }
  
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
