export default function Statictic({ title, desc }) {
  return (
    <div className="stat">
      <p>{title}</p>
      <p>{desc}</p>
      <div className="mt-5 w-15 border-b border-white"></div>
    </div>
  );
}
