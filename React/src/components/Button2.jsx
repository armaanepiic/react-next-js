function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

function PlayButton({ movieName }) {
  const handleClick = () => {
    console.log(`Playing ${movieName}`);
  };
  return <Button onSmash={handleClick}>Play</Button>;
}
function UploadButton() {
  const handleUpload = () => {
    console.log("uploading!");
  };
  return <Button onSmash={handleUpload}>Upload</Button>;
}

export default function Button2() {
  return (
    <div>
      <PlayButton movieName={"Avengers"} />  
      <UploadButton />
    </div>
  );
}
// every jsx always return something
