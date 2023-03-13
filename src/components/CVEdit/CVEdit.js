import { useState } from 'react';
import CVTitle from './CVTitle';
import FullNameForm from './FullNameForm';
import UserContactInfo from './UserContactInfo';
import { PlusIcon } from '@heroicons/react/24/outline';

function CVEdit({ user, setUser, name, setName, avatar, setAvatar }) {
  const [userIdentified, setUserIdentified] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <CVTitle />
      {userIdentified ? (
        <>
          <UserContactInfo user={user} avatar={avatar} setAvatar={setAvatar} />
          <AddContentBtn />
        </>
      ) : (
        <FullNameForm
          setUser={setUser}
          setUserIdentified={setUserIdentified}
          name={name}
          setName={setName}
        />
      )}
    </div>
  );
}

function AddContentBtn() {
  return (
    <button className="flex gap-2 self-center rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-10 py-4 font-semibold text-white hover:from-sky-500 hover:to-sky-500 hover:ring">
      <PlusIcon className="h-6 w-6 stroke-2 text-white" />
      Add content
    </button>
  );
}

export default CVEdit;
