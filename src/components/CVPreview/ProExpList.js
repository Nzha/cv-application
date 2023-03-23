function ProExpList({ user }) {
  return (
    <div>
      {user.proExp.length > 0 && (
        <div className="pt-4 pb-2 font-semibold">
          Professional Experience
          <hr className="border border-black" />
        </div>
      )}
      <div className="flex flex-col gap-2 text-sm">
        {user.proExp.map((proExp) => {
          return <ProExp key={proExp.id} proExp={proExp} />;
        })}
      </div>
    </div>
  );
}

function ProExp({ proExp }) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <span className="font-semibold">{proExp.jobTitle}</span>
        {proExp.employer && ', '}
        <span className="italic">{proExp.employer}</span>
        <div>{proExp.description}</div>
      </div>
      <div className="flex flex-col items-end text-sm">
        <div className="">
          <span>{proExp.startDate}</span>
          {proExp.startDate && proExp.endDate && ' - '}
          <span>{proExp.endDate}</span>
        </div>
        <div>
          <span>{proExp.city}</span>
          {proExp.city && proExp.country && ', '}
          <span>{proExp.country}</span>
        </div>
      </div>
    </div>
  );
}

export default ProExpList;
