export default function Button() {
  function handleClick () {
    console.log("Clicked");
  }
  return (
    <button onClick={handleClick}>
      I don't do anything
    </button>
  );
}
