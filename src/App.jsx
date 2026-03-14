import { useEffect, useState } from "react";
import "./App.css";
import useFlashcards from "./useFlashcards";
import FlashCard from "./FlashCard";
import CardForm from "./CardForm";
import CardList from "./CardList";
import EmptyState from "./EmptyState";

export default function App() {
  const [dark, setDark] = useState(false);

  // Toggle .dark class on <html> for CSS variable switching
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const {
    cards,
    currentCard,
    currentIndex,
    totalCards,
    flipped,
    view,
    setView,
    goNext,
    goPrev,
    flipCard,
    addCard,
    deleteCard,
  } = useFlashcards();

  const renderContent = () => {
    if (view === "add") {
      return (
        <CardForm
          onAdd={(q, a) => {
            addCard(q, a);
          }}
          onCancel={() => setView(totalCards > 0 ? "study" : "empty")}
        />
      );
    }

    if (view === "list") {
      return (
        <CardList
          cards={cards}
          onDelete={deleteCard}
          onBack={() => setView(totalCards > 0 ? "study" : "empty")}
        />
      );
    }

    if (totalCards === 0) {
      return <EmptyState onAdd={() => setView("add")} />;
    }

    return (
      <FlashCard
        card={currentCard}
        flipped={flipped}
        onFlip={flipCard}
        onNext={goNext}
        onPrev={goPrev}
        onDelete={(id) => {
          deleteCard(id);
          if (cards.length === 1) setView("empty");
        }}
        currentIndex={currentIndex}
        totalCards={totalCards}
      />
    );
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <span className="header-subject">Flashcards</span>
          <h1 className="header-title">Computer Networks</h1>
        </div>
        <nav className="header-nav">
          <button
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            title={dark ? "Light mode" : "Dark mode"}
            aria-label="Toggle dark mode"
          >
            {dark ? "○" : "●"}
          </button>
          <button
            className={`nav-pill ${view === "study" || (view !== "add" && view !== "list") ? "active" : ""}`}
            onClick={() => setView(totalCards > 0 ? "study" : "empty")}
          >
            Study
          </button>
          <button
            className={`nav-pill ${view === "list" ? "active" : ""}`}
            onClick={() => setView("list")}
            disabled={totalCards === 0}
            style={totalCards === 0 ? { opacity: 0.3, cursor: "not-allowed" } : {}}
          >
            All ({totalCards})
          </button>
          <button
            className={`nav-pill ${view === "add" ? "active" : ""}`}
            onClick={() => setView("add")}
          >
            + Add
          </button>
        </nav>
      </header>

      <main className="main">
        <div className="content-wrap">{renderContent()}</div>
      </main>

      <footer className="footer">Computer Networks · Flashcard Deck</footer>
    </div>
  );
}
