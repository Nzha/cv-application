import UserContactInfo from './PersonalInfo';

function CVPreview({ user, name, avatar }) {
  return (
    <div className="min-h-full bg-white shadow-sm hidden lg:block">
      <UserContactInfo user={user} name={name} avatar={avatar} />
    </div>
  );
}

export default CVPreview;
