import { PencilSquareIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

function ModifyCV() {
  return (
    <div className="flex flex-col gap-6">
      <CVTitle />
      <ContactInfo />
    </div>
  );
}

function CVTitle() {
  return (
    <div className="flex justify-between rounded-2xl bg-white px-16 py-6">
      <div className="flex cursor-pointer items-center gap-3 hover:bg-opacity-20 hover:bg-gradient-to-t">
        <div className="text-3xl font-bold">Title</div>
        <PencilSquareIcon className="h-5 w-5 text-gray-400 stroke-2" />
      </div>
      <button className="flex  gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-sky-700">
        Download
        <DocumentArrowDownIcon className="h-5 w-5 text-white stroke-2" />
      </button>
    </div>
  );
}

function ContactInfo() {
  return <div className="bg-white">Test</div>;
}

function ViewCV() {
  return <div className="min-h-full bg-white"></div>;
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
