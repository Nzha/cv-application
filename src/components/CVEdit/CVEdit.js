import { useState } from 'react';
import CVTitle from './CVTitle';
import FullNameForm from './FullNameForm';
import PersonalInfo from './PersonalInfo';
import PersonalInfoForm from './PersonalInfoForm';
import { PlusIcon } from '@heroicons/react/24/outline';

function CVEdit({ user, setUser, avatar, setAvatar }) {
  const [mainPage, setMainPage] = useState(false);
  const [persoInfoForm, setPersoInfoForm] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <CVTitle />
      {mainPage ? (
        <>
          {persoInfoForm ? (
            <PersonalInfoForm
              user={user}
              setUser={setUser}
              avatar={avatar}
              setAvatar={setAvatar}
              setPersoInfoForm={setPersoInfoForm}
            />
          ) : (
            <>
              <PersonalInfo
                user={user}
                avatar={avatar}
                setAvatar={setAvatar}
                setPersoInfoForm={setPersoInfoForm}
              />
              <AddContentBtn />
            </>
          )}
        </>
      ) : (
        <FullNameForm user={user} setUser={setUser} setMainPage={setMainPage} />
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
