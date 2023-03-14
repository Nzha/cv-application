import { v4 as uuidv4 } from 'uuid';
import CancelSaveBtns from './CancelSaveBtns';

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
      <CancelSaveBtns cancel='Skip' />
    </form>
  );
}

export default FullNameForm;
