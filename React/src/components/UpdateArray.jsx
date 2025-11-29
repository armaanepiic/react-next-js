import { useState } from "react";

export default function UpdateArray() {
  const [items, setItems] = useState([5, 2, 1, 4, 3]);
  const index = 2;
  const removeIndex = 0;
  function handleAdd() {
    // spread operator, concat
    let number = Math.ceil(Math.random() * 10);
    // Append to end:
    // setItems(prevItems => [...prevItems, number]);
    // Add to beginning:
    // setItems(prevItems => [number, ...prevItems]);
    // Append to end:
    setItems((prevItems) => prevItems.concat(number));
  }
  function handleDelete() {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index != removeIndex)
    );
  }
  function handleMultiply() {
    setItems((prevItems) => prevItems.map((item) => item * 2));
  }
  function handleReplace() {
    setItems((prevItems) =>
      prevItems.map((item, ind) => (ind === index ? 100 : item))
    );
  }
  function handleInsertion() {
    setItems((prevItems) => [...prevItems.slice(0, 1), 999, ...prevItems.slice(1)]);
  }
  function handleSort () {
    // setItems(prevItems => [...prevItems].sort((a, b) => a - b));

    setItems(prevItems => {
        const copyArray = [...prevItems];
        copyArray.sort((a, b) => a - b);
        return copyArray;
    })
  }
  function handleReverse () {
    setItems(prevItems => [...prevItems].reverse());
  }
  return (
    <div>
      <h1>Adding to an array</h1>
      <button onClick={handleAdd}>Add</button>
      <h1>Removing from array</h1>
      <button onClick={handleDelete}>Delete</button>
      <h1>Transforming array</h1>
      <button onClick={handleMultiply}>Multiply by 2</button>
      <h1>Replacing an element</h1>
      <button onClick={handleReplace}>Replace</button>
      <h1>Inserting into an array</h1>
      <button onClick={handleInsertion}>Insert</button>
      <h1>Sort the array</h1>
      <button onClick={handleSort}>Sort</button>
      <h1>Reverse</h1>
      <button onClick={handleReverse}>Reverse</button>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
