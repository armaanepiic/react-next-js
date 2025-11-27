import Clock from "./components/Clock";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Sculpture from "./components/Sculpture";
import Snapshot from "./components/Snapshot";

export default function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Sculpture /> */}
      {/* <Form /> */}
      {/* <Clock time={new Date().toLocaleTimeString()} /> */}
      <Snapshot />
    </div>
  )
}
