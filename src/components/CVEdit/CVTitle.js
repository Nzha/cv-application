import {
  PencilSquareIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';

function CVTitle() {
  return (
    <div className="sticky flex items-center justify-between bg-white px-9 py-6 shadow-sm lg:static lg:rounded-2xl xl:px-16 -mx-6 lg:mx-0">
      <div className="flex cursor-pointer items-center gap-3 hover:bg-opacity-20 hover:bg-gradient-to-t hover:opacity-70">
        <div className="text-3xl font-bold">My Resume</div>
        <PencilSquareIcon className="h-5 w-5 stroke-2 text-gray-400" />
      </div>
      <button className="flex  gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-sky-700">
        Download
        <DocumentArrowDownIcon className="h-5 w-5 stroke-2 text-white" />
      </button>
    </div>
  );
}

export default CVTitle;
