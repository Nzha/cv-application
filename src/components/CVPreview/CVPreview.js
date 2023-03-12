function CVPreview({ user }) {
  return (
    <div className="min-h-full bg-white shadow-sm">
      <div>{user.name}</div>
    </div>
  );
}

export default CVPreview;
