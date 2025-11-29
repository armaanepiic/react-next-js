import { useState } from "react";

export default function ObjectForm() {
  const [person, setPerson] = useState({
    firstName: "Arman",
    lastName: "Hossain",
    email: "armaanepiic@gmail.com",
    address: {
      city: "",
      country: "",
    },
  });
  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setPerson({
      ...person,
      address: {
        ...person.address,
        city: e.target.value,
      },
    });
  };
  return (
    <div>
      <label>
        First name:
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="city"
          value={person.address.city}
          onChange={handleAddressChange}
        />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email}) {person.address.city}
      </p>
    </div>
  );
}
