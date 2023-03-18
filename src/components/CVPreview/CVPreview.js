import UserContactInfo from './PersonalInfo';

function CVPreview({ user, avatar }) {
  return (
    <div
      className="hidden min-h-full bg-white py-14 px-14 shadow-sm lg:block"
      id="pdf"
    >
      <UserContactInfo user={user} avatar={avatar} />
    </div>
  );
}

export default CVPreview;
