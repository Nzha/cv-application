import {
  PencilSquareIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';

function ModifyCV() {
  return (
    <div className="flex flex-col gap-6">
      <CVTitle />
      <FullNameForm />
    </div>
  );
}

function CVTitle() {
  return (
    <div className="flex justify-between rounded-2xl bg-white px-16 py-6 shadow-sm">
      <div className="flex cursor-pointer items-center gap-3 hover:bg-opacity-20 hover:bg-gradient-to-t hover:opacity-70">
        <div className="text-3xl font-bold">Title</div>
        <PencilSquareIcon className="h-5 w-5 stroke-2 text-gray-400" />
      </div>
      <button className="flex  gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-sky-700">
        Download
        <DocumentArrowDownIcon className="h-5 w-5 stroke-2 text-white" />
      </button>
    </div>
  );
}

function FullNameForm() {
  return (
    <form className="flex flex-col gap-6 rounded-2xl bg-white px-16 py-6 shadow-sm">
      <label className="text-2xl font-bold">Full name</label>
      <input className="text-gray-70 appearance-none rounded-lg bg-gray-100 py-3 px-4 focus:outline-none" />
      <div className="flex justify-center gap-4">
        <button className="rounded-full border-4 border-gray-200 px-6 py-2 font-semibold hover:bg-gray-200">
          Skip
        </button>
        <button className="rounded-full bg-gradient-to-r from-purple-500 to-rose-500 px-14 py-2 font-semibold text-white hover:from-sky-500 hover:to-teal-500">
          Save
        </button>
      </div>
    </form>
  );
}

function ViewCV() {
  return <div className="min-h-full bg-white shadow-sm"></div>;
}

function App() {
  return (
    <main className="grid min-h-screen grid-cols-2 gap-12 bg-slate-100 px-36 pt-10">
      <ModifyCV />
      <ViewCV />
    </main>
  );
}

export default App;
