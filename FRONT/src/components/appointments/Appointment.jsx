import AppointmentRow from "./AppointmentRow.jsx";


function Appointment(props) {
  const { items, setItems } = props;

  const itemElements = items.map(item => <AppointmentRow key={item.id} item={item} setItems={setItems} />)
  return (
    <>
        {itemElements }
    
    </>
  );
}

export default Appointment;