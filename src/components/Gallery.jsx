export function Profile() {     // named export
  return (
    <img
      src="https://cdn.pixabay.com/photo/2025/09/24/10/41/autumn-9852400_960_720.png"
      alt="eye"
    />
  );
}

export function Card() {    // named export
  return (
    <img
      src="https://www.graphberry.com/products/thumbnail/86/700.jpg"
      alt="card"
    />
  );
}

export default function Gallery() {     // default export
  return (
    <div>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}