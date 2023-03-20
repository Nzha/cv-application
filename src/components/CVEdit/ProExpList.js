import { BriefcaseIcon } from '@heroicons/react/24/outline';

function ProExpList({ user }) {
  return (
    <div className="rounded-2xl bg-white px-9 pt-6 pb-4 shadow-sm">
      <div className="mb-3 flex items-center gap-5">
        <BriefcaseIcon className="h-7 w-7 stroke-2" />
        <div className="text-xl font-semibold">Professional Experience</div>
      </div>
      <ul className="list-none divide-y divide-gray-200">
        {user.proExp.map((proExp) => {
          return <ProExp key={proExp.id} proExp={proExp} />;
        })}
      </ul>
    </div>
  );
}

function ProExp({ proExp }) {
  return (
    <li className="py-2">
      <div>
        <span className="font-semibold">{proExp.jobTitle}</span>
        {', '}
        <span className="italic">{proExp.employer}</span>
      </div>
      <div className="text-sm">
        <span>{proExp.startDate}</span>
        {' - '}
        <span>{proExp.endDate}</span>
        {' | '}
        <span>{proExp.city}</span>
        {', '}
        <span>{proExp.country}</span>
      </div>
    </li>
  );
}

export default ProExpList;
