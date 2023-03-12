import UserContactInfo from "./UserContactInfo";

function CVPreview({ user }) {
  return (
    <div className="min-h-full bg-white shadow-sm">
      <UserContactInfo user={user} />
    </div>
  );
}

export default CVPreview;
