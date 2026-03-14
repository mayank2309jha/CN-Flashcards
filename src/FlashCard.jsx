import { useEffect, useState } from "react";

export default function FlashCard({
  card,
  flipped,
  onFlip,
  onNext,
  onPrev,
  onDelete,
  currentIndex,
  totalCards,
}) {
  const [animating, setAnimating] = useState(false);

  // Trigger entry animation when card changes
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [card?.id]);

  const handleNav = (fn) => {
    setAnimating(true);
    fn();
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <div className="flashcard-section">
      {/* Progress */}
      <div className="progress-row">
        <span className="progress-label">
          {currentIndex + 1} / {totalCards}
        </span>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        className={`card-scene ${animating ? "animating" : ""} ${
          visible ? "card-visible" : "card-hidden"
        }`}
        onClick={onFlip}
        title="Click to flip"
      >
        <div className={`card-inner ${flipped ? "is-flipped" : ""}`}>
          {/* Front */}
          <div className="card-face card-front">
            <span className="card-badge">Question</span>
            <p className="card-text">{card.question}</p>
            <span className="flip-hint">click to reveal answer</span>
          </div>
          {/* Back */}
          <div className="card-face card-back">
            <span className="card-badge card-badge-answer">Answer</span>
            <p className="card-text">{card.answer}</p>
            <span className="flip-hint">click to flip back</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="card-controls">
        <button
          className="nav-btn"
          onClick={() => handleNav(onPrev)}
          disabled={totalCards <= 1}
          aria-label="Previous card"
        >
          ←
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(card.id)}
          aria-label="Delete card"
        >
          Delete
        </button>

        <button
          className="nav-btn"
          onClick={() => handleNav(onNext)}
          disabled={totalCards <= 1}
          aria-label="Next card"
        >
          →
        </button>
      </div>
    </div>
  );
}
