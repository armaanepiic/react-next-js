function Child ({handleChange}) {
    return (
        <button onClick={() => handleChange("click me")}>send</button>
    )
}

export default function Parent() {
  function handleChange (message) {
    console.log(`Child says: ${message}`);
  }
  return (
    <div>
        <Child handleChange={handleChange} />
    </div>
  );
}
