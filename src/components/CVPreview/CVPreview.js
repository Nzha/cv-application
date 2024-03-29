import UserPersonalInfo from './UserPersonalInfo';
import UserContentCategories from './UserContentCategories';

function CVPreview({ user, avatar }) {
  return (
    <div
      className="hidden min-h-full bg-white py-14 px-14 shadow-sm lg:block"
      id="pdf"
    >
      <UserPersonalInfo user={user} avatar={avatar} />
      <UserContentCategories user={user} />
    </div>
  );
}

export default CVPreview;
