import UserContactInfo from './PersonalInfo';

function CVPreview({ user, avatar }) {
  return (
    <div className="min-h-full bg-white shadow-sm hidden lg:block">
      <UserContactInfo user={user} avatar={avatar} />
    </div>
  );
}

export default CVPreview;
