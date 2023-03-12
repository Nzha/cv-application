import { useState } from 'react';
import CVTitle from './Title';
import FullNameForm from './FullNameForm';
import ContactInfo from './UserContactInfo';

function CVForm({ user, setUser }) {
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

export default CVForm;
