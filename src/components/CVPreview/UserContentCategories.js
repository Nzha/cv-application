function UserContentCategories({ user }) {
  return (
    <div>
      {user.proExp.length > 0 && (
        <UserContentCategory
          user={user}
          category="Professional Experience"
          categoryContent={user.proExp}
        />
      )}
      {user.eduExp.length > 0 && (
        <UserContentCategory
          user={user}
          category="Education"
          categoryContent={user.eduExp}
        />
      )}
    </div>
  );
}

function UserContentCategory({ category, categoryContent }) {
  return (
    <div>
      <div className="mb divide-y pt-4 font-semibold">{category}</div>
      <hr className="my-1 border border-black" />
      <div className="flex flex-col gap-2 text-sm">
        {categoryContent.map((exp) => {
          return <UserContentExperience key={exp.id} exp={exp} />;
        })}
      </div>
    </div>
  );
}

function UserContentExperience({ exp }) {
  let title = exp.jobTitle ? exp.jobTitle : exp.degree;
  let place = exp.employer ? exp.employer : exp.school;

  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <span className="font-semibold">{title}</span>
        {place && ', '}
        <span className="italic">{place}</span>
        <div>{exp.description}</div>
      </div>
      <div className="flex flex-col items-end text-sm">
        <div>
          <span>{exp.startDate}</span>
          {exp.startDate && exp.endDate && ' - '}
          <span>{exp.endDate}</span>
        </div>
        <div>
          <span>{exp.city}</span>
          {exp.city && exp.country && ', '}
          <span>{exp.country}</span>
        </div>
      </div>
    </div>
  );
}

export default UserContentCategories;
