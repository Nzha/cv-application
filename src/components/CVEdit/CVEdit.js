import { useState } from 'react';
import CVTitle from './CVTitle';
import FullNameForm from './FullNameForm';
import PersonalInfo from './PersonalInfo';
import PersonalInfoForm from './PersonalInfoForm';
// import AddContentModal from './AddContentModal';
import { PlusIcon } from '@heroicons/react/24/outline';

function CVEdit({ user, setUser, avatar, setAvatar }) {
  const [mainPage, setMainPage] = useState(user.name ? true : false);
  const [persoInfoForm, setPersoInfoForm] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <CVTitle user={user} setUser={setUser} />
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

function Modal({ showModal, setShowModal }) {
  return (
    showModal && (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="relative my-6 mx-auto w-auto max-w-3xl">
            {/*content*/}
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between rounded-t p-5">
                <h3 className="text-3xl font-semibold">Add content</h3>
                <button
                  className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="grid px-6">
                <div className="cursor-pointer rounded-lg bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                  <div className="flex gap-2">
                    <div className="font-semibold">Professional Experience</div>
                  </div>
                  <p className="text-gray-500">
                    A place to highlight your professional experience
                  </p>
                </div>
                <div className="cursor-pointer rounded-lg bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90">
                  <div className="flex gap-2">
                    <div className="font-semibold">Education</div>
                  </div>
                  <p className="text-gray-500">
                    Show off your primary education, college, degrees & exchange
                    semesters
                  </p>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end rounded-b">
                <button
                  className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    )
  );
}

export default CVEdit;
