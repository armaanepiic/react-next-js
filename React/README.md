# 🧩 React – Chapter 2.1: Responding to Events

A clean and visual summary for revision

---

## 📌 Overview

Events in React work very similar to DOM events—but with cleaner syntax and component-based logic.

This chapter teaches how to:

- ✔ Respond to user actions
- ✔ Write event handlers
- ✔ Pass arguments to handlers
- ✔ Use props inside handlers
- ✔ Pass data from child → parent
- ✔ Use controlled form elements
- ✔ Lift state up
- ✔ Understand event propagation & delegation (core JS concept React uses internally)

---

## 🎯 1. Adding Event Handlers

In React, event handlers are **camelCased**:

```jsx
<button onClick={handleClick}>Click Me</button>
```

```javascript
function handleClick() {
  alert("Button clicked!");
}
```

### ⚠️ Important Notes

- Always use `onClick` (not `onclick`)
- Pass the function reference (not `handleClick()`)
- Don't call the function immediately unless using an arrow function

---

## 🎯 2. Passing Props to Event Handlers

Event handlers can read component props:

```jsx
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}
```

### Usage Example

```jsx
<AlertButton message="Playing!">Play Movie</AlertButton>
<AlertButton message="Uploading!">Upload Image</AlertButton>
```

### 🧠 Concept

1. Parent passes the `message` prop
2. Handler inside child reads it
3. When clicked → shows the message

---

## 🎯 3. Controlled Inputs (Most Important)

In React, form inputs are controlled through **state**:

```jsx
const [title, setTitle] = useState("");

<input 
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
```

### 🔁 Flow Diagram

```
User types → onChange event → setState → component re-renders → input value updates
```

This ensures React always controls the form.

### Why Controlled Inputs?

- Single source of truth (state)
- Easy validation
- Easy form submission
- Predictable behavior

---

## 🎯 4. Passing Data Child → Parent (Important Skill)

**Pattern:** Child triggers an event → parent receives the data.

### Parent Component

```jsx
function App() {
  function handleAddBookmark(text) {
    console.log("Child sent:", text);
  }

  return <InputField onSubmit={handleAddBookmark} />;
}
```

### Child Component

```jsx
function InputField({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(text);
    }}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 🧠 Concept

- Child holds `text` state
- Parent receives text through callback
- Called **"lifting state up"**
- Very important pattern in React

---

## 🎯 5. Event Propagation (JS Core Concept)

When an event occurs, it travels through phases:

```
Capturing → Target → Bubbling
```

### Event Bubbling Diagram (React uses this)

```
button
  ↑
div
  ↑
section
  ↑
body
```

### Solution to Stop Bubbling

```javascript
event.stopPropagation();
```

### Example

```jsx
<div onClick={() => console.log("Div clicked")}>
  <button onClick={(e) => {
    e.stopPropagation();
    console.log("Button clicked");
  }}>
    Click Me
  </button>
</div>
```

Without `stopPropagation()`, both logs would appear. With it, only "Button clicked" shows.

---

## 🎯 6. Event Delegation (Why React is Fast)

Instead of adding many listeners:

### ❌ Bad (Traditional DOM)

```javascript
li.addEventListener("click", ...)
li.addEventListener("click", ...)
li.addEventListener("click", ...)
```

### ✅ Good (React's Approach)

React uses **one global listener** at the root, then figures out which component was clicked.

This is **event delegation**, and it makes React extremely efficient.

### How It Works

1. React attaches one listener to the root
2. When event occurs, React determines the target
3. Calls the appropriate component handler
4. Much more memory efficient

---

## 🎯 7. Passing Arguments to Handlers

### Method 1: Arrow Function

```jsx
<button onClick={() => handleDelete(id)}>
  Delete
</button>
```

### Method 2: Bind

```jsx
<button onClick={handleDelete.bind(null, id)}>
  Delete
</button>
```

### Handler Function

```javascript
function handleDelete(id) {
  console.log("Deleting:", id);
}
```

### When to Use Each

- **Arrow function**: Most common, clearest syntax
- **Bind**: When you need performance optimization (fewer re-renders)

---

## 📊 Quick Summary Table

| Topic | Meaning | React Usage |
|-------|---------|-------------|
| Event handler | Function attached to user action | `onClick`, `onChange` |
| Props in handlers | Child handler can read props | `<Button message="Hi" />` |
| Controlled inputs | React manages value | Form state management |
| Child → Parent data | Callback props | Lifting state up |
| stopPropagation | Stop event bubble | Avoid unwanted parent triggers |
| Event Delegation | One listener handles many | React's internal event system |

---

## 🔥 Common Patterns

### Pattern 1: Toggle State

```jsx
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>
  Toggle
</button>
```

### Pattern 2: Prevent Default

```jsx
<form onSubmit={(e) => {
  e.preventDefault();
  // Handle form submission
}}>
```

### Pattern 3: Multiple Arguments

```jsx
<button onClick={() => handleClick(id, name, age)}>
  Click
</button>
```

---

## ⚠️ Common Mistakes

### Mistake 1: Calling Function Immediately

```jsx
// ❌ Wrong - calls immediately on render
<button onClick={handleClick()}>

// ✅ Correct - passes function reference
<button onClick={handleClick}>
```

### Mistake 2: Forgetting preventDefault

```jsx
// ❌ Wrong - page refreshes
<form onSubmit={handleSubmit}>

// ✅ Correct
<form onSubmit={(e) => {
  e.preventDefault();
  handleSubmit();
}}>
```

### Mistake 3: Not Using Controlled Inputs

```jsx
// ❌ Uncontrolled
<input defaultValue="text" />

// ✅ Controlled
<input value={text} onChange={(e) => setText(e.target.value)} />
```

---

## 🎓 Practice Exercise

Try building a simple todo app that demonstrates:

1. Controlled input for adding todos
2. Passing data from child (input) to parent (app)
3. Event handlers for delete buttons
4. Event propagation (click on todo vs click on delete)

---

## 🎉 You're Ready for the Next Chapter!

This README covers everything you learned:

- ✅ Event basics
- ✅ Event handlers
- ✅ Props inside handlers
- ✅ Passing data child → parent
- ✅ Controlled inputs
- ✅ Lifting state
- ✅ Propagation & delegation

**Next Topics:** State management, useEffect, and Component Lifecycle

---

## 📚 Additional Resources

- [React Docs - Responding to Events](https://react.dev/learn/responding-to-events)
- [JavaScript Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Event Delegation Explained](https://javascript.info/event-delegation)

---

Made with ❤️ for React learners