import { useState } from 'react';
import CVTitle from './CVTitle';
import FullNameForm from './FullNameForm';
import ContactInfo from './UserContactInfo';

function CVEdit({ user, setUser }) {
  const [userIdentified, setUserIdentified] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <CVTitle />
      {userIdentified ? (
        <ContactInfo user={user} />
      ) : (
        <FullNameForm setUser={setUser} setUserIdentified={setUserIdentified} />
      )}
    </div>
  );
}

export default CVEdit;
