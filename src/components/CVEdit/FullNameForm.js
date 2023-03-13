import { v4 as uuidv4 } from 'uuid';

function FullNameForm({ setUser, setUserIdentified, name, setName }) {
  function handleClick() {
    setUser({ id: uuidv4(), name: name });
  }

  return (
    <form
      className="flex flex-col gap-6 rounded-2xl bg-white px-9 xl:px-16 py-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setUserIdentified(true);
        handleClick();
      }}
    >
      <label className="text-2xl font-bold">Full name</label>
      <input
        className="text-gray-70 appearance-none rounded-lg bg-gray-100 py-3 px-4 focus:outline-none"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your first and last name"
        autoFocus
      />
      <div className="flex justify-center gap-4">
        <button className="rounded-full border-4 border-gray-200 px-6 py-2 font-semibold hover:bg-gray-200">
          Skip
        </button>
        <button className="rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-14 py-2 font-semibold text-white hover:from-sky-500 hover:to-sky-500">
          Save
        </button>
      </div>
    </form>
  );
}

export default FullNameForm;
