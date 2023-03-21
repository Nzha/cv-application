import { BriefcaseIcon, TrashIcon } from '@heroicons/react/24/outline';

function ProExpList({ user, setUser }) {
  return (
    <div className="rounded-2xl bg-white px-9 pt-6 pb-4 shadow-sm">
      <div className="mb-3 flex items-center gap-5">
        <BriefcaseIcon className="h-7 w-7 stroke-2" />
        <div className="text-xl font-semibold">Professional Experience</div>
      </div>
      <ul className="list-none divide-y divide-gray-200">
        {user.proExp.map((proExp) => {
          return (
            <ProExp
              key={proExp.id}
              proExp={proExp}
              user={user}
              setUser={setUser}
            />
          );
        })}
      </ul>
    </div>
  );
}

function ProExp({ proExp, user, setUser }) {
  function handleDeleteProExp(id) {
    const newProExp = user.proExp.filter((a) => a.id !== id);
    setUser({ ...user, proExp: newProExp });
  }

  return (
    <li className="flex items-center justify-between py-2" id={proExp.id}>
      <div className="cursor-pointer">
        <div>
          <span className="font-semibold">{proExp.jobTitle}</span>
          {proExp.employer && ', '}
          <span className="italic">{proExp.employer}</span>
        </div>
        <div className="text-sm">
          <span>{proExp.startDate}</span>
          {proExp.startDate && ' - '}
          <span>{proExp.endDate}</span>
          {(proExp.city || proExp.country) && ' | '}
          <span>{proExp.city}</span>
          {proExp.country && ', '}
          <span>{proExp.country}</span>
        </div>
      </div>
      <button onClick={() => handleDeleteProExp(proExp.id)}>
        <TrashIcon className="h-5 w-5 stroke-2" />
      </button>
    </li>
  );
}

export default ProExpList;
