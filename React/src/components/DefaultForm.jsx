export default function DefaultForm() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.dir(e);
        }}
      
      >
        <input type="text" />
        <button>Send</button>
      </form>
    </div>
  );
}
