import UserContactInfo from './UserContactInfo';

function CVPreview({ user, name }) {
  return (
    <div className="min-h-full bg-white shadow-sm">
      <UserContactInfo user={user} name={name} />
    </div>
  );
}

export default CVPreview;
