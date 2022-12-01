import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const RegisteredAttendee = ({ attendee, onDelete, editAttendee }) => {
  const [editable, setEditable] = useState(false);

  const [thisAttendee, setthisAttendee] = useState(attendee);

  const handleChangeFor = (propertyName) => (event) => {
    setthisAttendee((thisAttendee) => ({
      ...thisAttendee,
      [propertyName]: event.target.value
    }));
  };
  const handleChangeFors = (propertyName) => (event) => {
    setthisAttendee((thisAttendee) => ({
      ...thisAttendee,
      [propertyName]: event.target.value
    }));
    event.preventDefault();
    setEditable(!editable);
    editAttendee(attendee.id, thisAttendee);
  };

  const handleClick = event => {
    event.preventDefault();
    setEditable(!editable);
    editAttendee(attendee.id, thisAttendee);
  };
  return (
    <>
      {!editable ? (
        <tr>
          <td>{attendee.firstName} </td>
          <td>{attendee.lastName}</td>
          <td>{attendee.email}</td>
          <td>{attendee.age}</td>
          <td>
            <FaEdit
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setEditable(!editable)}
            />
          </td>
          <td>
            <FaTrashAlt
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(attendee.id)}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td>
            <input placeholder="First Name" defaultValue={attendee.firstName} onBlur={handleChangeFors("firstName")} onChange={handleChangeFor("firstName")}
              value={thisAttendee.firstName} />
          </td>
          <td>
            <input placeholder="Last Name" defaultValue={attendee.lastName} onChange={handleChangeFor("lastName")}
              value={thisAttendee.lastName} />
          </td>
          <td>
            <input placeholder="Email" defaultValue={attendee.email} onChange={handleChangeFor("email")}
              value={thisAttendee.email} />
          </td>
          <td>
            <input
              placeholder="Age"
              type="number"
              defaultValue={attendee.age} onChange={handleChangeFor("age")}
              value={thisAttendee.age}
            />
          </td>
          <td>
            <FaEdit
              style={{ color: "green", cursor: "pointer" }}
              onClick={//() => {
                
                handleClick
                // editAttendee(attendee.id, {
                //   id: attendee.id,
                //   age: 29,
                //   email: "@.com",
                //   firstName: "",
                //   lastName: "",
                // });
              }//}
            />
          </td>
          <td>
            {/* <FaTrashAlt
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(attendee.id)}
            /> */}
          </td>
        </tr>
      )}
    </>
  );
};
export default RegisteredAttendee;
