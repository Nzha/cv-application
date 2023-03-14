import CancelSaveBtns from './CancelSaveBtns';
import {
  PencilSquareIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

function PersonalInfo({ user, avatar, setAvatar, setPersoInfoForm }) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-2xl bg-white px-9 py-6 shadow-sm xl:px-16"
      onClick={() => setPersoInfoForm(true)}
    >
      <div>
        <div className="text-xl font-semibold">{user.name}</div>
        <div className="text-lg text-gray-400">Job title</div>
        <div className="flex justify-between">
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex gap-2">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              <div className=" text-gray-400">Email</div>
            </div>
            <div className="flex gap-2">
              <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
              <div className=" text-gray-400">Phone</div>
            </div>
            <div className="flex gap-2">
              <MapPinIcon className="h-5 w-5 text-gray-400" />
              <div className=" text-gray-400">Address</div>
            </div>
          </div>
        </div>
      </div>
      <Avatar avatar={avatar} setAvatar={setAvatar} />
    </div>
  );
}

function Avatar({ avatar, setAvatar }) {
  function handleClick(e) {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="relative">
      <img
        src={avatar ? avatar : 'https://tecdn.b-cdn.net/img/new/avatars/5.webp'}
        className="h-32 w-32 rounded-full shadow-lg"
        alt="Avatar"
      />
      <label
        htmlFor="uploadAvatar"
        className="absolute right-1 bottom-0 cursor-pointer rounded-full bg-gradient-to-r from-sky-500 to-teal-500 p-2 hover:from-sky-500 hover:to-sky-500"
      >
        <PencilSquareIcon className="h-5 w-5 stroke-2 text-white" />
      </label>
      <input
        type="file"
        id="uploadAvatar"
        className="hidden"
        onChange={handleClick}
      />
    </div>
  );
}

function PersonalInfoForm({ user }) {
  return (
    <div className="cursor-pointer items-center justify-between rounded-2xl bg-white px-9 py-6 shadow-sm xl:px-16">
      <div className="text-xl font-semibold">Edit personal details</div>
      <form>
        <label
          className="mb-2 mt-6 block text-sm font-bold text-gray-700"
          htmlFor="full-name"
        >
          Full name
        </label>
        <input
          className="block w-full appearance-none rounded-xl bg-gray-100 py-3 px-4 leading-tight focus:outline-none"
          id="full-name"
          type="text"
          value={user.name}
        />
        <input
          className="appearance-none text-lg text-gray-500 outline-none"
          // onChange={(e) => {
          //   setJob(e.target.value);
          //   setUser({ ...user, jobTitle: job });
          // }}
        />
        <CancelSaveBtns />
      </form>
    </div>
  );
}

export { PersonalInfo as default, PersonalInfoForm };