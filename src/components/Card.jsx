// Reusable Card component using the children prop (bonus)
function Card({ title, children }) {
  return (
    <section className="card">
      {title && <h2 className="card-title">{title}</h2>}
      {children}
    </section>
  );
}

export default Card;
