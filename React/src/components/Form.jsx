export default function Form({ status = "empty" }) {
  // visual states: empty, typing, submitting, success, error\

  if (status === "success")
    return (
      <>
        <h1>That's right!</h1>
        <hr />
      </>
    );
  return (
    <div>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form>
        <textarea disabled={status === "submitting"}></textarea>
        <br />
        <button disabled={status === "submitting" || status === "empty"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {status === "error" && <p className="Error">There was an error!</p>}
      </form>
      <hr />
    </div>
  );
}
