import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CancelSaveBtns from './CancelSaveBtns';

function ProExpForm({ user, setUser, setProExpForm }) {
  const [proExp, setProExp] = useState([]);

  function handleChange(e) {
    setProExp({
      ...proExp,
      [e.target.name]: e.target.value, // e.target.name refers to the name property given to the <input> DOM element
    });
  }

  function handleCancel(e) {
    e.preventDefault();
    setProExp([]);
    setProExpForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProExp = { id: uuidv4(), ...proExp };
    setUser({ ...user, proExp: [...user.proExp, newProExp] });
    setProExpForm(false);
  }

  return (
    <div className="cursor-pointer rounded-2xl bg-white py-6 px-9 shadow-sm">
      <div className="text-xl font-semibold">
        Create Professional Experience
      </div>
      <form className="" onSubmit={handleSubmit}>
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
          value={proExp.jobTitle || ''}
          onChange={handleChange}
          required
        />
        <label
          className="mb-2 mt-6 block text-sm font-bold text-gray-700"
          htmlFor="employer"
        >
          Employer
        </label>
        <input
          name="employer"
          className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
          id="employer"
          type="text"
          value={proExp.employer || ''}
          onChange={handleChange}
        />
        <div className="flex w-full gap-5">
          <div className="w-1/2">
            <label
              className="mb-2 mt-6 block text-sm font-bold text-gray-700"
              htmlFor="city"
            >
              City
            </label>
            <input
              name="city"
              className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
              id="city"
              type="text"
              value={proExp.city || ''}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label
              className="mb-2 mt-6 block text-sm font-bold text-gray-700"
              htmlFor="country"
            >
              Country
            </label>
            <input
              name="country"
              className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
              id="country"
              type="text"
              value={proExp.country || ''}
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
          value={proExp.address || ''}
          onChange={handleChange}
        />
        <CancelSaveBtns handleCancel={handleCancel} />
      </form>
    </div>
  );
}

export default ProExpForm;
