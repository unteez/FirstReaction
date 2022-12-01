import RegisteredAttendee from "./RegisteredAttendee";

const Attendees = ({ attendees, onDelete, editAttendee }) => {
  return (
    <tbody className="klaustukas">
      {attendees.map((attendee) => (
        <RegisteredAttendee
          key={attendee.id}
          attendee={attendee}
          onDelete={onDelete}
          editAttendee={editAttendee}
        />
      ))}
    </tbody>
  );
};

export default Attendees;
