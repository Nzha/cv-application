import { useState } from 'react';
import CVTitle from './CVTitle';
import FullNameForm from './FullNameForm';
import PersonalInfo from './PersonalInfo';
import PersonalInfoForm from './PersonalInfoForm';
import Modal from './Modal';
import ContentForm from './ContentForm';
import ContentList from './ContentList';
import { PlusIcon } from '@heroicons/react/24/outline';

function CVEdit({ user, setUser, avatar, setAvatar }) {
  const [mainPage, setMainPage] = useState(user.name ? true : false);
  const [persoInfoForm, setPersoInfoForm] = useState(false);
  const [contentForm, setContentForm] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <CVTitle user={user} setUser={setUser} />
      {!mainPage ? (
        <FullNameForm user={user} setUser={setUser} setMainPage={setMainPage} />
      ) : (
        <>
          {!persoInfoForm && !contentForm ? (
            <>
              <PersonalInfo
                user={user}
                avatar={avatar}
                setAvatar={setAvatar}
                setPersoInfoForm={setPersoInfoForm}
              />
              {user.proExp.length > 0 && (
                <ContentList
                  user={user}
                  setUser={setUser}
                  setContentForm={setContentForm}
                />
              )}
              <AddContentBtn setContentForm={setContentForm} />
            </>
          ) : (
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
                <ContentForm
                  user={user}
                  setUser={setUser}
                  contentForm={contentForm}
                  setContentForm={setContentForm}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

function AddContentBtn({ setContentForm }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center">
      <button
        className="flex gap-2 self-center rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-10 py-4 font-semibold text-white hover:from-sky-500 hover:to-sky-500 hover:ring"
        onClick={() => setShowModal(!showModal)}
      >
        <PlusIcon className="h-6 w-6 stroke-2 text-white" />
        Add content
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setContentForm={setContentForm}
      />
    </div>
  );
}

export default CVEdit;
