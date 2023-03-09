import { PencilSquareIcon } from '@heroicons/react/24/outline';

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
      <div className="flex">
        <div className="font-bold">Title</div>
        <PencilSquareIcon className="text-gray-400 h-5 w-5" />
      </div>
      <button>Download</button>
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
