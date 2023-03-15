function UserContactInfo({ user, avatar }) {
  return (
    <div className="relative">
      <div className="pt-14 text-center text-2xl font-semibold">{user.name}</div>
      {avatar && (
        <img
          src={avatar}
          alt="avatar"
          className="absolute h-32 w-32 rounded-full shadow-lg top-7 left-14"
        />
      )}
    </div>
  );
}

export default UserContactInfo;
