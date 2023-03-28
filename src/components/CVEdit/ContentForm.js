import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CancelSaveBtns from './CancelSaveBtns';

function ContentForm({ user, setUser, contentForm, setContentForm }) {
  let contentArr = contentForm.content === 'proExp' ? user.proExp : user.eduExp;
  let contentType = contentForm.content === 'proExp' ? 'proExp' : 'eduExp';

  const [initialUser] = useState(user);
  const [input, setInput] = useState(
    contentForm.editMode
      ? contentArr.find((a) => a.id === contentForm.editId)
      : []
  );

  function handleChange(e) {
    const newContent = [...contentArr];

    if (contentForm.editMode) {
      const index = newContent.findIndex((a) => a.id === contentForm.editId);
      newContent[index] = {
        ...newContent[index],
        [e.target.name]: e.target.value,
      };
      setUser({ ...user, [contentType]: newContent });
    } else {
      let initialContent =
        contentForm.content === 'proExp'
          ? initialUser.proExp
          : initialUser.eduExp;
      const index = initialContent.length;
      newContent[index] = {
        id: uuidv4(),
        ...newContent[index],
        [e.target.name]: e.target.value,
      };

      setUser({ ...user, [contentType]: newContent });
    }
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleCancel(e) {
    e.preventDefault();
    setInput([]);
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
          value={
            (contentForm.content === 'proExp'
              ? input.jobTitle
              : input.degree) || ''
          }
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
          value={
            (contentForm.content === 'proExp'
              ? input.employer
              : input.school) || ''
          }
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
              value={input.city || ''}
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
              value={input.country || ''}
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
              value={input.startDate || ''}
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
              value={input.endDate || ''}
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
          value={input.description || ''}
          onChange={handleChange}
        />
        <CancelSaveBtns handleCancel={handleCancel} />
      </form>
    </div>
  );
}

export default ContentForm;
