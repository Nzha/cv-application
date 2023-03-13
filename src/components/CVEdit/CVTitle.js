import {
  PencilSquareIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';

function CVTitle() {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-9 xl:px-16 py-6 shadow-sm">
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
