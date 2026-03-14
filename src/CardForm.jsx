import { useState } from "react";

export default function CardForm({ onAdd, onCancel }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!question.trim() || !answer.trim()) {
      setError("Both question and answer are required.");
      return;
    }
    setError("");
    onAdd(question, answer);
    setQuestion("");
    setAnswer("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="form-section">
      <h2 className="form-title">New Flashcard</h2>

      <div className="form-group">
        <label className="form-label">Question</label>
        <textarea
          className="form-textarea"
          placeholder="Enter your question…"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            setError("");
          }}
          rows={3}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Answer</label>
        <textarea
          className="form-textarea"
          placeholder="Enter the answer…"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setError("");
          }}
          rows={4}
        />
      </div>

      {error && <p className="form-error">{error}</p>}
      {success && <p className="form-success">Card added successfully!</p>}

      <div className="form-actions">
        <button className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn-primary" onClick={handleSubmit}>
          Add Card
        </button>
      </div>
    </div>
  );
}
