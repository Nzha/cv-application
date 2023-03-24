import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CancelSaveBtns from './CancelSaveBtns';

function ContentForm({ user, setUser, contentForm, setContentForm }) {
  const [initialUser] = useState(user);
  const [proExp, setProExp] = useState(
    contentForm.editMode
      ? user.proExp.find((a) => a.id === contentForm.editId)
      : []
  );

  function handleChange(e) {
    const newProExp = [...user.proExp];
    if (contentForm.editMode) {
      const index = newProExp.findIndex((a) => a.id === contentForm.editId);
      newProExp[index] = {
        ...newProExp[index],
        [e.target.name]: e.target.value,
      };
      setUser({ ...user, proExp: newProExp });
    } else {
      const index = initialUser.proExp.length;
      newProExp[index] = {
        id: uuidv4(),
        ...newProExp[index],
        [e.target.name]: e.target.value,
      };
      setUser({ ...user, proExp: newProExp });
    }
    setProExp({ ...proExp, [e.target.name]: e.target.value });
  }

  function handleCancel(e) {
    e.preventDefault();
    setProExp([]);
    setUser(initialUser);
    setContentForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setContentForm(false);
  }

  return (
    <div className="cursor-pointer rounded-2xl bg-white py-6 px-9 shadow-sm">
      <div className="text-xl font-semibold">
        {contentForm.editMode ? 'Edit' : 'Create'}{' '}
        {contentForm.content === 'proExp'
          ? 'Professional Experience'
          : 'Education'}
      </div>
      <form onSubmit={handleSubmit}>
        <label
          className="mb-2 mt-6 block text-sm font-bold text-gray-700"
          htmlFor="job-title"
        >
          {contentForm.content === 'proExp' ? 'Job title' : 'Degree'}
        </label>
        <input
          name={contentForm.content === 'proExp' ? 'jobTitle' : 'degree'}
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
          {contentForm.content === 'proExp' ? 'Employer' : 'School'}
        </label>
        <input
          name={contentForm.content === 'proExp' ? 'employer' : 'school'}
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
        <div className="flex w-full gap-5">
          <div className="w-1/2">
            <label
              className="mb-2 mt-6 block text-sm font-bold text-gray-700"
              htmlFor="startDate"
            >
              Start date
            </label>
            <input
              name="startDate"
              className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
              id="startDate"
              type="text"
              value={proExp.startDate || ''}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label
              className="mb-2 mt-6 block text-sm font-bold text-gray-700"
              htmlFor="endDate"
            >
              End date
            </label>
            <input
              name="endDate"
              className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
              id="endDate"
              type="text"
              value={proExp.endDate || ''}
              onChange={handleChange}
            />
          </div>
        </div>
        <label
          className="mb-2 mt-6 block text-sm font-bold text-gray-700"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          name="description"
          className="mb-8 block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
          id="description"
          rows="7"
          value={proExp.description || ''}
          onChange={handleChange}
        />
        <CancelSaveBtns handleCancel={handleCancel} />
      </form>
    </div>
  );
}

export default ContentForm;
