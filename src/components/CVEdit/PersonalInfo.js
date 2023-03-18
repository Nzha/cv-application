import {
  PencilSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

function PersonalInfo({ user, avatar, setAvatar, setPersoInfoForm }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-9 py-6 shadow-sm">
      <div className="cursor-pointer" onClick={() => setPersoInfoForm(true)}>
        <div className="flex gap-3">
          <div className="text-xl font-semibold">{user.name}</div>
          <PencilSquareIcon className="h-5 w-5 self-center stroke-2 text-gray-400" />
        </div>
        {user.jobTitle && (
          <div className="text-lg text-gray-500">{user.jobTitle}</div>
        )}
        <div className="flex justify-between">
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex gap-2">
              {user.email ? (
                <>
                  <EnvelopeIcon className="h-5 w-5" />
                  <div>{user.email}</div>
                </>
              ) : (
                <>
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  <div className="text-gray-400">Email</div>
                </>
              )}
            </div>
            <div className="flex gap-2">
              {user.phone ? (
                <>
                  <PhoneIcon className="h-5 w-5" />
                  <div>{user.phone}</div>
                </>
              ) : (
                <>
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <div className="text-gray-400">Phone</div>
                </>
              )}
            </div>
            <div className="flex gap-2">
              {user.address ? (
                <>
                  <MapPinIcon className="h-5 w-5" />
                  <div>{user.address}</div>
                </>
              ) : (
                <>
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                  <div className="text-gray-400">Address</div>
                </>
              )}
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

export default PersonalInfo;
