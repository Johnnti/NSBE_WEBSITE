export default function Statistic({ title, desc }) {
  return (
    <div className="stat flex flex-col">
      <p className="text-yellow-500 text-6xl font-bold">{title}</p>
      <p>{desc}</p>
      <div className="mt-5 w-15 border-b border-white"></div>
    </div>
  );
}
