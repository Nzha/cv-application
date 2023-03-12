import {
  PencilSquareIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

function UserContactInfo({ user }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-16 py-6 shadow-sm">
      <div>
        <div className="text-xl font-semibold">{user.name}</div>
        <div className="text-lg text-gray-400">Job title</div>
        <div className="flex justify-between">
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex gap-2">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              <div className="text-gray-400">Email</div>
            </div>
            <div className="flex gap-2">
              <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
              <div className="text-gray-400">Phone</div>
            </div>
            <div className="flex gap-2">
              <MapPinIcon className="h-5 w-5 text-gray-400" />
              <div className="text-gray-400">Address</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
          class="w-32 rounded-full shadow-lg"
          alt="Avatar"
        />
        <button className="absolute right-1 bottom-0 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 p-2 hover:from-sky-500 hover:to-sky-500">
          <PencilSquareIcon className="h-5 w-5 stroke-2 text-white" />
        </button>
      </div>
    </div>
  );
}

export default UserContactInfo;
