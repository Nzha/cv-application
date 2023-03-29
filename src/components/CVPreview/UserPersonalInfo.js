import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

function UserPersonalInfo({ user, avatar }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {avatar && (
        <img
          src={avatar}
          alt="avatar"
          className=" -top-7 left-0 h-32 w-32 rounded-full shadow-lg"
        />
      )}
      <div className="text-2xl font-semibold">{user.name}</div>
      {user.jobTitle && <div className="text-xl">{user.jobTitle}</div>}
      <div className="flex justify-center gap-4 text-sm">
        {user.email && (
          <div className="flex gap-1">
            <EnvelopeIcon className="h-5 w-5" />
            {user.email}
          </div>
        )}
        {user.phone && (
          <div className="flex gap-1">
            <PhoneIcon className="h-5 w-5" />
            {user.phone}
          </div>
        )}
        {user.address && (
          <div className="flex gap-1">
            <MapPinIcon className="h-5 w-5" />
            {user.address}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPersonalInfo;
