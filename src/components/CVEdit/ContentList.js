import {
  BriefcaseIcon,
  AcademicCapIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

function ContentList({ user, setUser, setContentForm }) {
  return (
    <div className="flex flex-col gap-6">
      <ExpCard
        title="Professional Experience"
        icon={<BriefcaseIcon className="h-7 w-7 stroke-2" />}
      >
        <ExpList
          user={user}
          setUser={setUser}
          setContentForm={setContentForm}
          content="proExp"
        />
      </ExpCard>
      <ExpCard
        title="Education"
        icon={<AcademicCapIcon className="h-7 w-7 stroke-2" />}
      >
        <ExpList
          user={user}
          setUser={setUser}
          setContentForm={setContentForm}
          content="eduExp"
        />
      </ExpCard>
    </div>
  );
}

function ExpCard({ children, icon, title }) {
  return (
    <div className="rounded-2xl bg-white px-9 pt-6 pb-4 shadow-sm">
      <div className="mb-3 flex items-center gap-5">
        {icon}
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <ul className="list-none divide-y divide-gray-200">{children}</ul>
    </div>
  );
}

function ExpList({ user, setUser, setContentForm, content }) {
  let contentType = content === 'proExp' ? user.proExp : user.eduExp;

  return contentType.map((exp) => {
    return (
      <Exp
        key={exp.id}
        exp={exp}
        user={user}
        setUser={setUser}
        setContentForm={setContentForm}
        content={content}
      />
    );
  });
}

function Exp({ exp, user, setUser, setContentForm, content }) {
  let title = exp.jobTitle ? exp.jobTitle : exp.degree;
  let place = exp.employer ? exp.employer : exp.school;

  function handleEdit(id) {
    setContentForm({
      show: true,
      content: content === 'proExp' ? 'proExp' : 'eduExp',
      editMode: true,
      editId: id,
    });
  }

  function handleDelete(id) {
    let contentArr = content === 'proExp' ? user.proExp : user.eduExp;
    let contentType = content === 'proExp' ? 'proExp' : 'eduExp';
    const newContent = contentArr.filter((a) => a.id !== id);
    setUser({ ...user, [contentType]: newContent });
  }

  return (
    <li className="flex items-center justify-between py-2" id={exp.id}>
      <div className="cursor-pointer" onClick={() => handleEdit(exp.id)}>
        <div>
          <span className="font-semibold">{title}</span>
          {place && ', '}
          <span className="italic">{place}</span>
        </div>
        <div className="text-sm">
          <span>{exp.startDate}</span>
          {exp.startDate && exp.endDate && ' - '}
          <span>{exp.endDate}</span>
          {(exp.startDate || exp.endDate) && (exp.city || exp.country) && ' | '}
          <span>{exp.city}</span>
          {exp.city && exp.country && ', '}
          <span>{exp.country}</span>
        </div>
      </div>
      <button onClick={() => handleDelete(exp.id)}>
        <TrashIcon className="h-5 w-5 stroke-2" />
      </button>
    </li>
  );
}

export default ContentList;
