export default function EmptyState({ onAdd }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">⬜</div>
      <h2 className="empty-title">No flashcards yet</h2>
      <p className="empty-sub">
        Start building your deck for Computer Networks.
      </p>
      <button className="btn-primary" onClick={onAdd}>
        Create your first card
      </button>
    </div>
  );
}
