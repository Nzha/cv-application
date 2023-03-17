import { useState, useRef, useEffect } from 'react';
import {
  PencilSquareIcon,
  DocumentArrowDownIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

function CVTitle({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="sticky -mx-6 flex max-h-20 items-center justify-between bg-white px-9 py-6 shadow-sm lg:static lg:mx-0 lg:rounded-2xl">
      <div
        className="flex cursor-pointer items-center gap-3 hover:bg-opacity-20 hover:bg-gradient-to-t hover:opacity-70"
        onClick={() => setEditMode(!editMode)}
      >
        {editMode ? (
          <form
            className="flex items-center gap-3"
            onSubmit={(e) => e.preventDefault}
          >
            <input
              className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 text-xl font-bold leading-tight focus:outline-none"
              value={user.cvTitle}
              onChange={(e) => {
                setUser({
                  ...user,
                  cvTitle: e.target.value,
                });
              }}
              autoFocus
              required
            />
            <button className="rounded-full bg-gradient-to-r from-sky-500 to-teal-500 p-1 leading-5 text-white hover:bg-sky-700">
              <CheckIcon className="h-5 w-5 stroke-2 text-white" />
            </button>
          </form>
        ) : (
          <>
            <div className="text-3xl font-bold">{user.cvTitle}</div>
            <PencilSquareIcon className="h-5 w-5 stroke-2 text-gray-400" />
          </>
        )}
      </div>
      <button className="flex  gap-2 rounded-full bg-sky-500 p-3 text-sm font-semibold leading-5 text-white hover:bg-sky-700 sm:px-5 sm:py-2">
        <div className="hidden sm:block">Download</div>
        <DocumentArrowDownIcon className="h-5 w-5 stroke-2 text-white" />
      </button>
    </div>
  );
}

export default CVTitle;
