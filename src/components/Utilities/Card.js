function Card({ children, icon, title }) {
  return (
    <div className="rounded-2xl bg-white px-9 pt-6 pb-4 shadow-sm">
      <div className="mb-3 flex items-center gap-5">
        {icon}
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <ul className="list-none divide-y divide-gray-200">{children}</ul>
    </div>
  );
}

export default Card;
