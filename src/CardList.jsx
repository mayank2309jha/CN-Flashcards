export default function CardList({ cards, onDelete, onBack }) {
  return (
    <div className="list-section">
      <h2 className="form-title">All Cards ({cards.length})</h2>
      <div className="card-list">
        {cards.map((card, i) => (
          <div key={card.id} className="list-item">
            <div className="list-item-number">{i + 1}</div>
            <div className="list-item-content">
              <p className="list-q">{card.question}</p>
              <p className="list-a">{card.answer}</p>
            </div>
            <button
              className="list-delete-btn"
              onClick={() => onDelete(card.id)}
              aria-label="Delete"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="form-actions" style={{ marginTop: "2rem" }}>
        <button className="btn-secondary" onClick={onBack}>
          Back to Study
        </button>
      </div>
    </div>
  );
}
