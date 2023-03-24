import { useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Modal({ showModal, setShowModal, setProExpForm }) {
  const modalRef = useRef(null);

  // Close element when user clicks outside it
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowModal]);

  return (
    showModal && (
      <>
        <div className="fixed inset-0 z-50 m-2 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="relative my-6 mx-auto w-auto max-w-3xl">
            <div
              className="relative flex w-full flex-col rounded-2xl border-0 bg-white px-6 py-6 shadow-lg outline-none focus:outline-none sm:px-9"
              ref={modalRef}
            >
              {/*header*/}
              <div className="flex items-center justify-between pb-6">
                <h3 className="text-3xl font-semibold">Add content</h3>
                <button
                  className="rounded-full bg-gradient-to-r from-sky-500 to-teal-500 p-1 leading-5 text-white hover:from-sky-500 hover:to-sky-500"
                  onClick={() => setShowModal(false)}
                >
                  <XMarkIcon className="h-6 w-6 stroke-2 text-white" />
                </button>
              </div>
              {/*body*/}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div
                  className="cursor-pointer rounded-lg bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90"
                  onClick={() =>
                    setProExpForm({ show: true, content: 'proExp' })
                  }
                >
                  <div className="flex gap-2">
                    <div className="font-semibold">Professional Experience</div>
                  </div>
                  <p className="text-gray-500">
                    A place to highlight your professional experience
                  </p>
                </div>
                <div
                  className="cursor-pointer rounded-lg bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90"
                  onClick={() => {
                    setProExpForm({ show: true, content: 'education' });
                  }}
                >
                  <div className="flex gap-2">
                    <div className="font-semibold">Education</div>
                  </div>
                  <p className="text-gray-500">
                    Show off your primary education, college, degrees & exchange
                    semesters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    )
  );
}

export default Modal;
