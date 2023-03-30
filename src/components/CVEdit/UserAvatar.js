import { PencilSquareIcon } from '@heroicons/react/24/outline';

function Avatar({ avatar, setAvatar }) {
  function handleClick(e) {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="relative">
      {avatar ? (
        <img
          src={
            avatar ? avatar : 'https://tecdn.b-cdn.net/img/new/avatars/20.webp'
          }
          className="h-32 w-32 rounded-full shadow-lg"
          alt="Avatar"
        />
      ) : (
        <div class="relative h-32 w-32 overflow-hidden rounded-full bg-gray-100 shadow-lg dark:bg-gray-600">
          <svg
            class="absolute -left-4 h-40 w-40 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      )}
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

export default Avatar;
