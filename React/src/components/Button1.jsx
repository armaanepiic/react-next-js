function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onSmash={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onSmash={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default function Button1() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div>
      {/* button 1 */}

      <button onClick={handleClick}>Click me</button>

      {/* button 2 */}

      <button
        onClick={() => {
          console.log("Clicked Again");
        }}
      >
        Click again
      </button>

      {/* button 3 */}

      {/* // This alert fires when the component renders, not when clicked! */}
      {/* <button onClick={alert("Hi")}>alert</button> */}


      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
