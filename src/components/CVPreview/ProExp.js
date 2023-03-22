function ProExpList({ user }) {
  return (
    <div>
      {user.proExp.map((proExp) => {
        return <ProExp key={proExp.id} proExp={proExp} />;
      })}
    </div>
  );
}

function ProExp({ proExp }) {
  return <div>{proExp.jobTitle}</div>;
}

export default ProExpList;
