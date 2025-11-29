import { useState } from "react";

let nextId = 0;

export default function AddingArray() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => {
          const newArtist = {
            id: nextId++,
            name: name,
          };
          if (e.key === "Enter") {
            if(name != "") {
              setArtists((prevArtist) => [...prevArtist.concat(newArtist)]);
              setName("");
            }
          }
        }}
      />
      <button
        onClick={() => {
          const newArtist = {
            id: nextId++,
            name: name,
          };
          if(name != "") {
              setArtists((prevArtist) => [...prevArtist.concat(newArtist)]);
              setName("");
            }
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
