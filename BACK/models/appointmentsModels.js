
const { sql } = require("../dbConnection");


exports.getAllAppointments = async () => {
  const appointments = await sql`
    SELECT *
    FROM appointments
    `;

  return appointments;
};


// exports.getAllAppointments = async () => {
//   const appointmentsList = await sql`
//   SELECT  appointments.name as name, fullname, description, date
//   FROM appointments
//   // JOIN owners ON appointments.owner_id = owners.id
//   `;

//   return appointmentsList;
// };

exports.getAppointment = async (id) => {
  const [appointment] = await sql`
    SELECT appointments.*
    FROM appointments
    WHERE appointments.id = ${id}
    `;
  return appointment;
};

//////////////////////////////////////////




// exports.createAppointment = async (newAppointment) => {
//   const {name, fullname, description, date } = newAppointment;
//   const Appointment = await sql`
//         INSERT INTO appointments (name,fullname, description, date )
//         VALUES (${name}, ${fullname},  ${description}, ${date}) 
//         RETURNING *;
//     `;
//   return Appointment[0];
// };
exports.createAppointment = async (newAppointment) => {
  const appointments = await sql`
      INSERT INTO appointments ${sql(newAppointment, "name", "fullname", "description", "date")}
      RETURNING *
      `;
  return appointments[0];
}


exports.updateAppointment = async (id, appointment) => {
  const columns = Object.keys(appointment);

  const newAppointments = await sql`
  update appointments set ${sql(appointment, columns)}
  where appointments.id = ${id}
  RETURNING *`;

  return newAppointments[0];
};

exports.deleteAppointment = async (id) => {
  const appointment = await sql`
  DELETE FROM appointments
  WHERE id = ${id}
  RETURNING *;
  `;
  return appointment[0];
};