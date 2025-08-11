export default function Statictic({ title, desc }) {
  return (
    <div className="stat">
      <p>{title}</p>
      <p>{desc}</p>
      <span>--------</span>
    </div>
  );
}
