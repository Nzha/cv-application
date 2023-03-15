import {
  PencilSquareIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';

function CVTitle() {
  return (
    <div className="sticky -mx-6 flex items-center justify-between bg-white px-9 py-6 shadow-sm lg:static lg:mx-0 lg:rounded-2xl">
      <div className="flex cursor-pointer items-center gap-3 hover:bg-opacity-20 hover:bg-gradient-to-t hover:opacity-70">
        <div className="text-3xl font-bold">My Resume</div>
        <PencilSquareIcon className="h-5 w-5 stroke-2 text-gray-400" />
      </div>
      <button className="flex  gap-2 rounded-full bg-sky-500 p-3 text-sm font-semibold leading-5 text-white hover:bg-sky-700 sm:px-5 sm:py-2">
        <div className="hidden sm:block">Download</div>
        <DocumentArrowDownIcon className="h-5 w-5 stroke-2 text-white" />
      </button>
    </div>
  );
}

export default CVTitle;
