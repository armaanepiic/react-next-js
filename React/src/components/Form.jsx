import { useState } from "react";
export default function Form() {
  const initialForm = {
    name: "",
    age: "",
    password: "",
    email: "",
  };

  const [form, setForm] = useState(initialForm);

  function handleClick() {
    console.log("Submit:", form);
    setForm(initialForm);
  }
  console.log(form);
  return (
    <div>
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
