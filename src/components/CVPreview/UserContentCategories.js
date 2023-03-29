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
      <div className="pt-4 pb-2 font-semibold">
        {category}
        <hr className="border border-black" />
      </div>
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
    <div className="flex items-start justify-between">
      <div>
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
