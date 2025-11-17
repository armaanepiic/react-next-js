🧩 React – Chapter 2.1: Responding to Events

A clean and visual summary for revision

## 📌 Overview

Events in React work very similar to DOM events—but with cleaner syntax and component-based logic.
This chapter teaches how to:

✔ Respond to user actions
✔ Write event handlers
✔ Pass arguments to handlers
✔ Use props inside handlers
✔ Pass data from child → parent
✔ Use controlled form elements
✔ Lift state up
✔ Understand event propagation & delegation (core JS concept React uses internally)

## 🎯 1. Adding Event Handlers

In React, event handlers are camelCased:

<button onClick={handleClick}>Click Me</button>

function handleClick() {
  alert("Button clicked!");
}

## 🎯 2. Passing Props to Event Handlers

Event handlers can read component props:

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}


Usage:

<AlertButton message="Playing!">Play Movie</AlertButton>
<AlertButton message="Uploading!">Upload Image</AlertButton>

🧠 Concept:

Parent passes the message

Handler inside child reads it

When clicked → shows the message

## 🎯 3. Controlled Inputs (Most Important)

In React, form inputs are controlled through state:

const [title, setTitle] = useState("");

<input 
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

🔁 Flow Diagram
User types → onChange event → setState → component re-renders → input value updates


This ensures React always controls the form.

## 🎯 4. Passing Data Child → Parent (Important Skill)

Child triggers an event → parent receives the data.

Parent:
function App() {
  function handleAddBookmark(text) {
    console.log("Child sent:", text);
  }

  return <InputField onSubmit={handleAddBookmark} />;
}

Child:
function InputField({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(text);
    }}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </form>
  );
}

🧠 Concept:

Child holds text state

Parent receives text through callback

Called “lifting state up”

Very important pattern in React

## 🎯 5. Event Propagation (JS Core Concept)

When an event occurs, it travels through phases:

Capturing → Target → Bubbling

Event Bubbling Diagram (React uses this)
button
  ↑
div
  ↑
section
  ↑
body


Solution to stop bubbling:

event.stopPropagation();

## 🎯 6. Event Delegation (Why React is Fast)

Instead of adding many listeners:

❌ Bad:

li.addEventListener("click", ...)


React uses one global listener at the root, then figures out which component was clicked.

This is event delegation, and it makes React extremely efficient.

## 🎯 7. Passing Arguments to Handlers
<button onClick={() => handleDelete(id)}>
  Delete
</button>


Handler:

function handleDelete(id) {
  console.log("Deleting:", id);
}

## ✔ Quick Summary Table
Topic	Meaning	React Usage
Event handler	Function attached to user action	onClick, onChange
Props in handlers	Child handler can read props	<Button message="Hi" />
Controlled inputs	React manages value	form state management
Child → Parent data	Callback props	lifting state up
stopPropagation	stop event bubble	avoid unwanted parent triggers
Event Delegation	One listener handles many	React’s internal event system
## 🎉 You’re Ready for the Next Chapter!

This README covers everything you learned:

event basics

event handlers

props inside handlers

passing data child → parent

controlled inputs

lifting state

propagation & delegation

If you want, I can also create: