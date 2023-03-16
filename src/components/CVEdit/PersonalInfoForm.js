import { useState } from 'react';
import CancelSaveBtns from './CancelSaveBtns';

function PersonalInfoForm({ user, setUser, setPersoInfoForm }) {
  const [initialUser, setInitialUser] = useState(user);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value, // e.target.name refers to the name property given to the <input> DOM element
    });
  }

  function handleCancel(e) {
    e.preventDefault();
    setUser(initialUser);
    setPersoInfoForm(false);
  }

  return (
    <div className="cursor-pointer rounded-2xl bg-white py-6 px-9 shadow-sm">
      <div className="text-xl font-semibold">Edit personal details</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPersoInfoForm(false);
        }}
      >
        <label
          className="mb-2 mt-6 block text-sm font-bold text-gray-700"
          htmlFor="full-name"
        >
          Full name
        </label>
        <input
          name="name"
          className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
          id="full-name"
          type="text"
          value={user.name}
          onChange={handleChange}
        />
        <label
          className="mb-2 mt-6 block text-sm font-bold text-gray-700"
          htmlFor="job-title"
        >
          Job title
        </label>
        <input
          name="jobTitle"
          className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
          id="job-title"
          type="text"
          value={user.jobTitle}
          onChange={handleChange}
        />
        <div className="flex gap-5">
          <div>
            <label
              className="mb-2 mt-6 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
              id="email"
              type="text"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="mb-2 mt-6 block text-sm font-bold text-gray-700"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              name="phone"
              className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
              id="phone"
              type="text"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <label
          className="mb-2 mt-6 block text-sm font-bold text-gray-700"
          htmlFor="address"
        >
          Address
        </label>
        <input
          name="address"
          className="mb-8 block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
          id="address"
          type="text"
          value={user.address}
          onChange={handleChange}
        />
        <CancelSaveBtns handleCancel={handleCancel} />
      </form>
    </div>
  );
}

export default PersonalInfoForm;
