import { v4 as uuidv4 } from 'uuid';

function FullNameForm({ user, setUser, setMainPage }) {
  function handleChange(e) {
    setUser({
      ...user,
      name: e.target.value,
    });
  }

  function handleClick() {
    setUser({
      ...user,
      id: uuidv4(),
    });
  }

  return (
    <form
      className="flex flex-col gap-6 rounded-2xl bg-white px-9 py-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setMainPage(true);
        handleClick();
      }}
    >
      <label className="text-2xl font-bold">Full name</label>
      <input
        className="text-gray-70 appearance-none rounded-lg bg-gray-100 py-3 px-4 focus:outline-none"
        value={user.name || ''}
        onChange={handleChange}
        placeholder="Enter your first and last name"
        autoFocus
        required
      />
      <button className="self-center rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-14 py-3 font-semibold text-white hover:from-sky-500 hover:to-sky-500">
        Save
      </button>
    </form>
  );
}

export default FullNameForm;
