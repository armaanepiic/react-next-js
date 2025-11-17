export default function Delegation() {
  return (
    <div>
        <ul onClick={(e) => {
            if(e.target.tagName === 'LI') {
                console.log("clicked ->   " + e.target.textContent);
            }
        }}>
            <li>JS</li>
            <li>C++</li>
            <li>Java</li>
        </ul>
    </div>
  )
}
// 👉 Event Delegation = Attach one single event listener to a parent instead of every child.
// ⭐ Only ONE event listener controls all items.
// ⭐ Works even if you add more list items later.