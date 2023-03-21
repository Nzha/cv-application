import { useState } from 'react';
import CVTitle from './CVTitle';
import FullNameForm from './FullNameForm';
import PersonalInfo from './PersonalInfo';
import PersonalInfoForm from './PersonalInfoForm';
import Modal from './Modal';
import ProExpForm from './ProExpForm';
import ProExpList from './ProExpList';
import { PlusIcon } from '@heroicons/react/24/outline';

function CVEdit({ user, setUser, avatar, setAvatar }) {
  const [mainPage, setMainPage] = useState(user.name ? true : false);
  const [persoInfoForm, setPersoInfoForm] = useState(false);
  const [proExpForm, setProExpForm] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <CVTitle user={user} setUser={setUser} />
      {!mainPage ? (
        <FullNameForm user={user} setUser={setUser} setMainPage={setMainPage} />
      ) : (
        <>
          {!persoInfoForm && !proExpForm ? (
            <>
              <PersonalInfo
                user={user}
                avatar={avatar}
                setAvatar={setAvatar}
                setPersoInfoForm={setPersoInfoForm}
              />
              {user.proExp.length > 0 && (
                <ProExpList user={user} setUser={setUser} />
              )}
              <AddContentBtn setProExpForm={setProExpForm} />
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
                <ProExpForm
                  user={user}
                  setUser={setUser}
                  setProExpForm={setProExpForm}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

function AddContentBtn({ setProExpForm }) {
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
        setProExpForm={setProExpForm}
      />
    </div>
  );
}

export default CVEdit;
