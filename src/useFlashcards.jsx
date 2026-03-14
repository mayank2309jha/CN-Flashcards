import { useState, useCallback } from "react";
import CN_QNA from "./cnqna";

export default function useFlashcards() {
  const [cards, setCards] = useState(CN_QNA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [view, setView] = useState("study"); // "study" | "add" | "list"

  const totalCards = cards.length;

  const goNext = useCallback(() => {
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % totalCards);
    }, 150);
  }, [totalCards]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((i) => (i - 1 + totalCards) % totalCards);
    }, 150);
  }, [totalCards]);

  const flipCard = useCallback(() => {
    setFlipped((f) => !f);
  }, []);

  const addCard = useCallback((question, answer) => {
    const newCard = {
      id: Date.now(),
      question: question.trim(),
      answer: answer.trim(),
    };
    setCards((prev) => [...prev, newCard]);
    setCurrentIndex((prev) => prev); // stay on current
  }, []);

  const deleteCard = useCallback(
    (id) => {
      setCards((prev) => {
        const next = prev.filter((c) => c.id !== id);
        if (currentIndex >= next.length && next.length > 0) {
          setCurrentIndex(next.length - 1);
        }
        return next;
      });
      setFlipped(false);
    },
    [currentIndex]
  );

  const currentCard = cards[currentIndex] || null;

  return {
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
  };
}
