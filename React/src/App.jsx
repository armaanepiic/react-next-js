import Form from "./components/Form";
const statuses = ['empty', 'typing', 'submitting', 'success', 'error'];
export default function App() {
  return (
    <div>
      {statuses.map((status) => <Form key={status} status={status} />)}
    </div>
  );
}
