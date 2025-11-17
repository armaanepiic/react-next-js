// function Button({ onSmash, children }) {
//   return <button onClick={(e) => {
//     e.stopPropagation();
//     onSmash();
//   }}>{children}</button>;
// }

// export default function Propagation() {
//   return (
//     <div onClick={() => alert("clicked on the div")}>
//       <Button onSmash={() => alert("playing")} >play</Button>
//       <Button onSmash={() => alert("uploading")}>up</Button>
//     </div>
//   );
// }

export default function Propagation() {
  return (
    <div
      onClick={() => {
        console.log("parent clicked");
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("child clicked");
        }}
      >click me</button>
    </div>
  );
}

// When you click an element, the event does NOT stay there.
// It travels through 3 phases:
// 🔹 Phase 1: Capturing (Top → Target)
// Browser checks from outermost element → inner element.
// 🔹 Phase 2: Target Phase
// The event reaches the actual element you clicked.
// 🔹 Phase 3: Bubbling (Bottom → Up)
// Event travels back up the tree: