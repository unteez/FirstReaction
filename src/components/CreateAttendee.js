import { useState } from "react";
import Button from "react-bootstrap/Button";

const CreateAttendee = ({ onCreate }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please add your email");
      return;
    }

    onCreate({ firstName, lastName, email, age });
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Create Attendee</h2>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Button as="input" type="submit" value="Submit" />
    </form>
  );
};

export default CreateAttendee;
