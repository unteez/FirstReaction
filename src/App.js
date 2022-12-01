import Attendees from "./components/Attendees";
import { useState } from "react";
import CreateAttendee from "./components/CreateAttendee";
import RegisteredAttendee from "./components/RegisteredAttendee";
import Table from "react-bootstrap/Table";

function App() {
  const [attendees, setAttendees] = useState([
    {
      id: 1,
      firstName: "Jonas",
      lastName: "Jonaitis",
      email: "jonas@jonaitis.com",
      age: 29,
    },
    {
      id: 2,
      firstName: "Petras",
      lastName: "Petraitis",
      email: "petras@petraitis.com",
      age: 60,
    },
  ]);

  //Create Attendee
  const AddAttendee = (attendee) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newAttendee = { id, ...attendee };
    setAttendees([...attendees, newAttendee]);
  };

  //Edit attendee
  const editAttendee = (id, newValue) => {
    console.log(id);
    setAttendees((prev) =>
      prev.map((attendee) => (attendee.id === id ? newValue : attendee))
    );
  };
  const submitEdit = (id, value) => {
    editAttendee(id, value);
    // setAttendees({
    //   id: null,
    //   value: "",
    // });
  };
  if (attendees.id) {
    return <RegisteredAttendee setEdit={editAttendee} onSubmit={submitEdit} />;
  }
  //Delete attendee
  const deleteAttendee = (id) => {
    setAttendees(attendees.filter((attendee) => attendee.id !== id));
  };

  return (
    <div className="app">
      <h1>Management dashboard</h1>
      <CreateAttendee onCreate={AddAttendee} />
      <div>
        <h2>Attendee List</h2>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          {attendees.length > 0 ? (
            <Attendees
              attendees={attendees}
              onDelete={deleteAttendee}
              editAttendee={submitEdit}
            />
          ) : (
            "No attendees registered"
          )}
        </Table>
      </div>
    </div>
  );
}

export default App;
