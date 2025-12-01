# React State Management Guide

A comprehensive guide to understanding React's state management, updates, and best practices.

## Table of Contents

- [How React Updates UI](#how-react-updates-ui)
- [Browser Paint](#browser-paint)
- [Hooks Run in Order](#hooks-run-in-order)
- [setState() Is Not Immediate](#setstate-is-not-immediate)
- [State as a Snapshot](#state-as-a-snapshot)
- [Functional Updates](#functional-updates)
- [Updating Objects in State](#updating-objects-in-state)
- [Updating Arrays in State](#updating-arrays-in-state)
- [Why Immutability Matters](#why-immutability-matters)
- [Fundamental Rules](#fundamental-rules-of-react-state)

---

## How React Updates UI

React updates the UI in three phases:

### 1. Trigger a Render
A render happens when:
- The component is first rendered
- State updates (`setState`)

### 2. Render Phase
React calls your component function again and prepares a new virtual DOM.

### 3. Commit Phase
React compares the new UI with the previous one and updates only what changed in the real DOM.

✔️ **React does NOT replace the whole DOM** — Only minimal changes are applied.

---

## Browser Paint

After React commits DOM changes, the browser draws pixels to the screen. (React calls this "painting.")

---

## Hooks Run in Order

Hooks must follow the same order on every render.

### ❌ Not allowed:
- Inside `if` statements
- Inside `for` loops
- Inside functions
- Inside conditions

### ✔️ Allowed:
At the top level of component or custom hooks.

**Why?** React identifies hooks by position, not by name.

---

## setState() Is Not Immediate

State updates are:
- **Asynchronous**
- **Batch processed**
- **Applied to the NEXT render**

During the current render, state is a fixed snapshot.

### Example:

```javascript
setCount(count + 1);
console.log(count); // old value
```

---

## State as a Snapshot

Each render has its own frozen copy of state.

- Calling `setState()` does **NOT** change current snapshot
- A new render is scheduled with updated value

---

## Functional Updates

Use functional updates when new state depends on previous state.

### ✔️ Correct:

```javascript
setCount(prev => prev + 1);
```

### ❌ Wrong:

```javascript
setCount(count + 1); // may use stale value
```

---

## Updating Objects in State

Objects in JavaScript are reference type.

### ❌ Don't mutate:

```javascript
person.name = "Maruf";
setPerson(person); // same reference, no re-render
```

### ✔️ Do immutably update:

```javascript
setPerson({
  ...person,
  name: "Maruf"
});
```

React re-renders because it sees a new object reference.

---

## Updating Arrays in State

### ⚠️ Never mutate arrays

These methods mutate the original array:
- `push`
- `pop`
- `shift`
- `unshift`
- `splice`
- `sort`
- `reverse`
- `arr[index] = value`

React will often not re-render if you mutate.

---

### 1. Adding to an array

#### ❌ Mutating:

```javascript
items.push(4);
```

#### ✔️ Correct:

```javascript
setItems(prev => [...prev, 4]);
```

---

### 2. Removing from an array

#### ❌ Mutating:

```javascript
items.pop();
items.splice(1, 1);
```

#### ✔️ Correct:

```javascript
setItems(prev => prev.filter(item => item !== target));
```

---

### 3. Transforming an array

#### ❌ Mutating:

```javascript
items[i] = items[i] * 2;
```

#### ✔️ Correct:

```javascript
setItems(prev => prev.map(x => x * 2));
```

---

### 4. Replacing items in an array

```javascript
setItems(prev =>
  prev.map((item, i) =>
    i === index ? newValue : item
  )
);
```

---

### 5. Inserting into an array

#### ❌ Mutating:

```javascript
items.splice(2, 0, 99);
```

#### ✔️ Correct:

```javascript
setItems(prev => [
  ...prev.slice(0, 2),
  99,
  ...prev.slice(2)
]);
```

---

### 6. Making other changes (sort, reverse)

#### ❌ Mutating:

```javascript
items.sort();
items.reverse();
```

#### ✔️ Correct:

```javascript
setItems(prev => [...prev].sort());
setItems(prev => [...prev].reverse());
```

---

### 7. Updating objects inside arrays

#### ❌ Don't mutate item:

```javascript
todo.done = !todo.done;
setTodos(todos); // no re-render
```

#### ✔️ Correct:

```javascript
setTodos(prev =>
  prev.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  )
);
```

---

## Why Immutability Matters

Mutating state causes:

- ❌ No re-render
- ❌ Unpredictable UI
- ❌ Bugs in Strict Mode
- ❌ Broken memoization
- ❌ Difficult debugging
- ❌ Lost history for undo/redo
- ❌ Stale closures
- ❌ Performance issues

---

## Fundamental Rules of React State

✔️ Always treat state as read-only

✔️ Never mutate arrays/objects

✔️ Always return a new array/object

✔️ Use functional updates when needed

✔️ Controlled inputs require `value` + `onChange`

✔️ Each render sees its own snapshot

---

## Contributing

Feel free to contribute to this guide by submitting pull requests or opening issues.

## License

MIT License - feel free to use this guide in your projects.

---

**Happy Coding! 🚀**