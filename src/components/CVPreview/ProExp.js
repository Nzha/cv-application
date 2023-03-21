function ProExpList({ user }) {
  return (
    <div>
      {user.proExp.map((proExp) => {
        return <ProExp proExp={proExp} />;
      })}
    </div>
  );
}

function ProExp({ proExp }) {
  return <div>{proExp.jobTitle}</div>;
}

export default ProExpList;
