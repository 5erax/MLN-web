import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    flashcards,
    matchingPairs,
    timelineEvents,
} from '../data/reviewGamesData';

function shuffle(list) {
    return [...list].sort(() => Math.random() - 0.5);
}

export default function ReviewGames() {
    const [activeTab, setActiveTab] = useState('flashcards');

    return (
        <div className="page page--wide games-page">
            <header className="games-header">
                <span className="badge badge-school">Ôn tập tương tác</span>
                <h1 className="page-title">Trò chơi ôn tập Lịch sử Đảng</h1>
                <p className="page-desc">
                    Ôn lại sự kiện, nhân vật, văn kiện và mốc thời gian qua flashcard,
                    ghép cặp và sắp xếp dòng thời gian.
                </p>

                <div className="games-actions">
                    <Link to="/bai-hoc" className="btn btn-outline btn-sm">
                        Xem bài học
                    </Link>
                    <Link to="/on-thi" className="btn btn-primary btn-sm">
                        Luyện đề ôn thi
                    </Link>
                </div>
            </header>

            <nav className="games-tabs" aria-label="Chọn trò chơi ôn tập">
                <button
                    type="button"
                    className={activeTab === 'flashcards' ? 'active' : ''}
                    onClick={() => setActiveTab('flashcards')}
                >
                    Thẻ ghi nhớ
                </button>
                <button
                    type="button"
                    className={activeTab === 'matching' ? 'active' : ''}
                    onClick={() => setActiveTab('matching')}
                >
                    Ghép cặp
                </button>
                <button
                    type="button"
                    className={activeTab === 'timeline' ? 'active' : ''}
                    onClick={() => setActiveTab('timeline')}
                >
                    Dòng thời gian
                </button>
            </nav>

            {activeTab === 'flashcards' && <FlashcardGame />}
            {activeTab === 'matching' && <MatchingGame />}
            {activeTab === 'timeline' && <TimelineGame />}

            <style>{`
        .games-page {
          padding-bottom: 4rem;
        }

        .games-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .games-header .page-desc {
          margin-left: auto;
          margin-right: auto;
        }

        .games-actions {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
        }

        .games-tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .games-tabs button {
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-muted);
          padding: 0.65rem 1rem;
          border-radius: var(--radius);
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition);
        }

        .games-tabs button:hover,
        .games-tabs button.active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
          box-shadow: var(--shadow-accent);
        }

        .game-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow);
        }

        .game-panel-title {
          font-family: var(--font-serif);
          margin: 0 0 0.5rem;
          color: var(--text);
          font-size: 1.35rem;
        }

        .game-panel-desc {
          color: var(--text-muted);
          margin: 0 0 1.5rem;
          line-height: 1.65;
        }

        .flashcard-wrap {
          max-width: 720px;
          margin: 0 auto;
        }

        .flashcard {
  width: 100%;
  min-height: 340px;
  height: 340px;
  border: 1px solid var(--border-light);
  background: var(--gradient-card);
  border-radius: var(--radius-xl);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  text-align: left;
}

        .flashcard-tag {
          display: inline-flex;
          width: fit-content;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: 99px;
          padding: 0.25rem 0.7rem;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .flashcard-text {
  font-size: clamp(1rem, 2.6vw, 1.25rem);
  line-height: 1.65;
  color: var(--text);
  margin: 0;
  overflow-y: auto;
  max-height: 190px;
  padding-right: 0.25rem;
}

        .flashcard-hint {
          color: var(--text-light);
          font-size: 0.85rem;
          margin-top: 1rem;
        }

        .flashcard-controls {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
        }

        .matching-game-panel {
  overflow: hidden;
}

.matching-game-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.matching-score-card {
  min-width: 118px;
  padding: 0.9rem 1rem;
  border-radius: var(--radius);
  background: var(--accent-light);
  border: 1px solid rgba(44, 82, 130, 0.14);
  text-align: center;
}

.matching-score-card span {
  display: block;
  color: var(--text-muted);
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.35rem;
}

.matching-score-card strong {
  color: var(--accent);
  font-family: var(--font-serif);
  font-size: 1.55rem;
  line-height: 1;
}

.matching-guide {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.matching-guide-step {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  padding: 0.85rem;
  border-radius: var(--radius);
  background: var(--bg-alt);
  border: 1px solid var(--border-light);
}

.matching-guide-step span {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--accent);
  color: white;
  font-weight: 900;
  font-size: 0.78rem;
}

.matching-guide-step p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.86rem;
  line-height: 1.55;
}

.matching-progress {
  margin-bottom: 1rem;
}

.matching-progress-top {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.45rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 800;
}

.matching-progress-top strong {
  color: var(--accent);
}

.matching-progress-bar {
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--bg-alt);
  border: 1px solid var(--border-light);
}

.matching-progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--gradient-accent);
  transition: width 0.25s ease;
}

.matching-feedback {
  margin-bottom: 1rem;
  padding: 0.9rem 1rem;
  border-radius: var(--radius);
  background: var(--accent-light);
  color: var(--accent);
  border: 1px solid rgba(44, 82, 130, 0.14);
  font-weight: 800;
  line-height: 1.55;
}

.matching-feedback[data-state='wrong'] {
  background: #fef2f2;
  color: #b91c1c;
  border-color: #fecaca;
}

.matching-feedback[data-state='complete'] {
  background: var(--accent-green-light);
  color: var(--accent-green);
  border-color: rgba(72, 187, 120, 0.25);
}

.matching-board {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1rem;
  align-items: start;
}

.matching-column-panel {
  min-width: 0;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  background: var(--gradient-card);
  padding: 1rem;
}

.matching-column-title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

.matching-column-title span {
  color: var(--text);
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 900;
}

.matching-column-title small {
  color: var(--text-light);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.matching-choice-list {
  display: grid;
  gap: 0.65rem;
}

.matching-choice {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0.65rem;
  align-items: flex-start;
  width: 100%;
  min-height: 48px;
  border: 1px solid var(--border);
  background: white;
  color: var(--text-muted);
  border-radius: var(--radius);
  padding: 0.78rem 0.85rem;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  transition:
    color var(--transition),
    background var(--transition),
    border-color var(--transition),
    box-shadow var(--transition),
    transform var(--transition),
    opacity var(--transition);
}

.matching-choice:hover:not(:disabled) {
  color: var(--accent);
  border-color: rgba(44, 82, 130, 0.28);
  background: var(--accent-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-xs);
}

.matching-choice.selected {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-light);
  box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.1);
}

.matching-choice.matched {
  color: var(--accent-green);
  border-color: rgba(72, 187, 120, 0.42);
  background: var(--accent-green-light);
  cursor: default;
}

.matching-choice.wrong {
  color: #b91c1c;
  border-color: #f87171;
  background: #fef2f2;
}

.matching-choice:disabled {
  opacity: 0.82;
}

.matching-choice-status {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--bg-alt);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 900;
  line-height: 1;
}

.matching-choice.selected .matching-choice-status {
  background: var(--accent);
  color: white;
}

.matching-choice.matched .matching-choice-status {
  background: var(--accent-green);
  color: white;
}

.matching-choice.wrong .matching-choice-status {
  background: #ef4444;
  color: white;
}

.matching-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

        .timeline-game-panel {
  overflow: hidden;
}

.timeline-game-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.timeline-score-card {
  min-width: 118px;
  padding: 0.9rem 1rem;
  border-radius: var(--radius);
  background: var(--accent-light);
  border: 1px solid rgba(44, 82, 130, 0.14);
  text-align: center;
}

.timeline-score-card span {
  display: block;
  color: var(--text-muted);
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.35rem;
}

.timeline-score-card strong {
  color: var(--accent);
  font-family: var(--font-serif);
  font-size: 1.55rem;
  line-height: 1;
}

.timeline-guide {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.timeline-guide-step {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.85rem;
  border-radius: var(--radius);
  background: var(--bg-alt);
  border: 1px solid var(--border-light);
}

.timeline-guide-step span {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--accent);
  color: white;
  font-size: 0.78rem;
  font-weight: 900;
}

.timeline-guide-step p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.86rem;
  line-height: 1.55;
}

.timeline-progress {
  margin-bottom: 1rem;
}

.timeline-progress-top {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.45rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 800;
}

.timeline-progress-top strong {
  color: var(--accent);
}

.timeline-progress-bar {
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--bg-alt);
  border: 1px solid var(--border-light);
}

.timeline-progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--gradient-accent);
  transition: width 0.25s ease;
}

.timeline-feedback {
  margin-bottom: 1rem;
  padding: 0.9rem 1rem;
  border-radius: var(--radius);
  background: var(--accent-light);
  color: var(--accent);
  border: 1px solid rgba(44, 82, 130, 0.14);
  font-weight: 800;
  line-height: 1.55;
}

.timeline-feedback[data-state='wrong'] {
  background: #fef2f2;
  color: #b91c1c;
  border-color: #fecaca;
}

.timeline-feedback[data-state='correct'] {
  background: var(--accent-green-light);
  color: var(--accent-green);
  border-color: rgba(72, 187, 120, 0.25);
}

.timeline-game-board {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
}

.timeline-column-panel {
  min-width: 0;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  background: var(--gradient-card);
  padding: 1rem;
}

.timeline-column-panel--selected {
  background: white;
}

.timeline-column-title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

.timeline-column-title span {
  color: var(--text);
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 900;
}

.timeline-column-title small {
  color: var(--text-light);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.timeline-choice-list,
.timeline-selected-list {
  display: grid;
  gap: 0.65rem;
}

.timeline-choice-card,
.timeline-selected-card {
  width: 100%;
  border: 1px solid var(--border);
  background: white;
  color: var(--text-muted);
  border-radius: var(--radius);
  padding: 0.85rem;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    color var(--transition),
    background var(--transition),
    border-color var(--transition),
    box-shadow var(--transition),
    transform var(--transition);
}

.timeline-choice-card {
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 0.75rem;
  align-items: start;
}

.timeline-choice-card:hover {
  color: var(--accent);
  border-color: rgba(44, 82, 130, 0.28);
  background: var(--accent-light);
  box-shadow: var(--shadow-xs);
  transform: translateY(-1px);
}

.timeline-choice-year,
.timeline-selected-year {
  color: var(--accent);
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.25;
}

.timeline-choice-event {
  color: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;
}

.timeline-selected-card {
  display: grid;
  grid-template-columns: 34px 1fr 28px;
  gap: 0.75rem;
  align-items: start;
}

.timeline-selected-card:hover {
  border-color: rgba(44, 82, 130, 0.28);
  background: var(--bg-alt);
  transform: translateY(-1px);
}

.timeline-selected-card.correct {
  color: var(--accent-green);
  border-color: rgba(72, 187, 120, 0.42);
  background: var(--accent-green-light);
}

.timeline-selected-card.wrong {
  color: #b91c1c;
  border-color: #f87171;
  background: #fef2f2;
}

.timeline-selected-order,
.timeline-selected-status {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--accent-light);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 900;
}

.timeline-selected-card.correct .timeline-selected-order,
.timeline-selected-card.correct .timeline-selected-status {
  background: var(--accent-green);
  color: white;
}

.timeline-selected-card.wrong .timeline-selected-order,
.timeline-selected-card.wrong .timeline-selected-status {
  background: #ef4444;
  color: white;
}

.timeline-selected-card p {
  margin: 0.2rem 0 0;
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.5;
}

.timeline-empty-box {
  padding: 1rem;
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  background: var(--bg-alt);
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.timeline-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.timeline-answer-panel {
  margin-top: 1.25rem;
  padding: 1rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(44, 82, 130, 0.14);
  background: var(--accent-light);
}

.timeline-answer-panel h3 {
  margin: 0 0 0.85rem;
  color: var(--accent);
  font-family: var(--font-serif);
  font-size: 1.1rem;
}

.timeline-answer-list {
  display: grid;
  gap: 0.55rem;
}

.timeline-answer-item {
  display: grid;
  grid-template-columns: 32px 86px 1fr;
  gap: 0.65rem;
  align-items: start;
  padding: 0.65rem;
  border-radius: var(--radius);
  background: white;
}

.timeline-answer-item span {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--accent);
  color: white;
  font-size: 0.78rem;
  font-weight: 900;
}

.timeline-answer-item strong {
  color: var(--accent);
  font-family: var(--font-serif);
}

.timeline-answer-item p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.5;
  font-size: 0.88rem;
}

        @media (max-width: 760px) {
          .matching-layout {
            grid-template-columns: 1fr;
          }
        .flashcard {
  min-height: 380px;
  height: 380px;
  padding: 1.35rem;
}
.matching-game-head {
  flex-direction: column;
}

.matching-score-card {
  width: 100%;
}

.matching-guide {
  grid-template-columns: 1fr;
}

.matching-board {
  grid-template-columns: 1fr;
}

.matching-column-panel {
  padding: 0.85rem;
}

.matching-choice {
  font-size: 0.86rem;
}
.flashcard-text {
  max-height: 230px;
}
         .timeline-game-head {
  flex-direction: column;
}

.timeline-score-card {
  width: 100%;
}

.timeline-guide {
  grid-template-columns: 1fr;
}

.timeline-game-board {
  grid-template-columns: 1fr;
}

.timeline-column-panel {
  padding: 0.85rem;
}

.timeline-choice-card {
  grid-template-columns: 1fr;
  gap: 0.35rem;
}

.timeline-selected-card {
  grid-template-columns: 30px 1fr 26px;
}

.timeline-answer-item {
  grid-template-columns: 28px 1fr;
}

.timeline-answer-item strong,
.timeline-answer-item p {
  grid-column: 2;
}
      `}</style>
        </div>
    );
}

function FlashcardGame() {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const current = flashcards[index];

    const next = () => {
        setIndex((prev) => (prev + 1) % flashcards.length);
        setFlipped(false);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
        setFlipped(false);
    };

    return (
        <section className="game-panel">
            <div className="flashcard-wrap">
                <h2 className="game-panel-title">Thẻ ghi nhớ</h2>
                <p className="game-panel-desc">
                    Đọc câu hỏi, tự trả lời trong đầu, sau đó bấm lật thẻ để kiểm tra.
                </p>

                <button
                    type="button"
                    className="flashcard"
                    onClick={() => setFlipped((value) => !value)}
                    aria-label="Lật thẻ ghi nhớ"
                >
                    <span className="flashcard-tag">{current.tag}</span>
                    <p className="flashcard-text">
                        {flipped ? current.back : current.front}
                    </p>
                    <span className="flashcard-hint">
                        {flipped ? 'Bấm để xem lại câu hỏi' : 'Bấm để xem đáp án'}
                    </span>
                </button>

                <div className="flashcard-controls">
                    <button type="button" className="btn btn-outline btn-sm" onClick={prev}>
                        Câu trước
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => setFlipped((value) => !value)}
                    >
                        Lật thẻ
                    </button>
                    <button type="button" className="btn btn-outline btn-sm" onClick={next}>
                        Câu tiếp
                    </button>
                </div>

                <div className="game-result">
                    Thẻ {index + 1}/{flashcards.length}
                </div>
            </div>
        </section>
    );
}

function MatchingGame() {
    const ROUND_SIZE = Math.min(8, matchingPairs.length);

    const [roundSeed, setRoundSeed] = useState(0);
    const [selectedTermId, setSelectedTermId] = useState(null);
    const [selectedMeaningId, setSelectedMeaningId] = useState(null);
    const [matchedIds, setMatchedIds] = useState([]);
    const [wrongPair, setWrongPair] = useState(null);
    const [feedback, setFeedback] = useState(
        'Chọn 1 khái niệm ở cột trái, sau đó chọn 1 giải thích ở cột phải.'
    );

    const roundPairs = useMemo(() => {
        return shuffle(matchingPairs).slice(0, ROUND_SIZE);
    }, [roundSeed]);

    const shuffledMeanings = useMemo(() => {
        return shuffle(roundPairs);
    }, [roundPairs]);

    const matchedSet = useMemo(() => new Set(matchedIds), [matchedIds]);
    const complete = matchedIds.length === roundPairs.length;

    const resetRound = () => {
        setSelectedTermId(null);
        setSelectedMeaningId(null);
        setMatchedIds([]);
        setWrongPair(null);
        setFeedback('Chọn 1 khái niệm ở cột trái, sau đó chọn 1 giải thích ở cột phải.');
        setRoundSeed((value) => value + 1);
    };

    const clearSelection = () => {
        setSelectedTermId(null);
        setSelectedMeaningId(null);
        setWrongPair(null);
        setFeedback('Đã bỏ chọn. Hãy chọn lại 1 khái niệm và 1 giải thích.');
    };

    const evaluatePair = (termId, meaningId) => {
        if (!termId || !meaningId) return;

        if (termId === meaningId) {
            const matchedTerm = roundPairs.find((item) => item.id === termId);

            setMatchedIds((prev) => {
                if (prev.includes(termId)) return prev;
                return [...prev, termId];
            });

            setSelectedTermId(null);
            setSelectedMeaningId(null);
            setWrongPair(null);
            setFeedback(`Đúng rồi! “${matchedTerm?.term || 'Khái niệm này'}” đã được ghép chính xác.`);
            return;
        }

        setWrongPair({ termId, meaningId });
        setFeedback('Chưa đúng. Hãy thử ghép lại cặp khác.');
    };

    const chooseTerm = (pairId) => {
        if (matchedSet.has(pairId)) return;

        setWrongPair(null);
        setSelectedTermId(pairId);

        if (selectedMeaningId) {
            evaluatePair(pairId, selectedMeaningId);
        } else {
            setFeedback('Đã chọn khái niệm. Bây giờ hãy chọn giải thích phù hợp ở cột phải.');
        }
    };

    const chooseMeaning = (meaningId) => {
        if (matchedSet.has(meaningId)) return;

        setWrongPair(null);
        setSelectedMeaningId(meaningId);

        if (selectedTermId) {
            evaluatePair(selectedTermId, meaningId);
        } else {
            setFeedback('Đã chọn giải thích. Bây giờ hãy chọn khái niệm phù hợp ở cột trái.');
        }
    };

    return (
        <section className="game-panel matching-game-panel">
            <div className="matching-game-head">
                <div>
                    <h2 className="game-panel-title">Ghép cặp khái niệm</h2>
                    <p className="game-panel-desc">
                        Chọn một thẻ ở cột trái, rồi chọn phần giải thích đúng ở cột phải.
                        Khi ghép đúng, cặp đó sẽ được đánh dấu hoàn thành.
                    </p>
                </div>

                <div className="matching-score-card">
                    <span>Đã ghép</span>
                    <strong>
                        {matchedIds.length}/{roundPairs.length}
                    </strong>
                </div>
            </div>

            <div className="matching-guide">
                <div className="matching-guide-step">
                    <span>1</span>
                    <p>Chọn một khái niệm, nhân vật hoặc sự kiện ở cột trái.</p>
                </div>
                <div className="matching-guide-step">
                    <span>2</span>
                    <p>Chọn phần giải thích tương ứng ở cột phải.</p>
                </div>
                <div className="matching-guide-step">
                    <span>3</span>
                    <p>Ghép đúng toàn bộ cặp để hoàn thành lượt chơi.</p>
                </div>
            </div>

            <div className="matching-progress">
                <div className="matching-progress-top">
                    <span>Tiến độ lượt chơi</span>
                    <strong>{Math.round((matchedIds.length / roundPairs.length) * 100)}%</strong>
                </div>
                <div className="matching-progress-bar">
                    <span
                        style={{
                            width: `${(matchedIds.length / roundPairs.length) * 100}%`,
                        }}
                    />
                </div>
            </div>

            <div className="matching-feedback" data-state={complete ? 'complete' : wrongPair ? 'wrong' : 'normal'}>
                {complete
                    ? 'Hoàn thành! Bạn đã ghép đúng toàn bộ cặp trong lượt này.'
                    : feedback}
            </div>

            <div className="matching-board">
                <div className="matching-column-panel">
                    <div className="matching-column-title">
                        <span>Khái niệm / sự kiện</span>
                        <small>Cột trái</small>
                    </div>

                    <div className="matching-choice-list">
                        {roundPairs.map((pair) => {
                            const selected = selectedTermId === pair.id;
                            const matched = matchedSet.has(pair.id);
                            const wrong = wrongPair?.termId === pair.id;

                            return (
                                <button
                                    key={pair.id}
                                    type="button"
                                    className={`matching-choice matching-choice-term ${selected ? 'selected' : ''
                                        } ${matched ? 'matched' : ''} ${wrong ? 'wrong' : ''}`}
                                    onClick={() => chooseTerm(pair.id)}
                                    disabled={matched}
                                >
                                    <span className="matching-choice-status" aria-hidden="true">
                                        {matched ? '✓' : selected ? '●' : ''}
                                    </span>
                                    <span>{pair.term}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="matching-column-panel">
                    <div className="matching-column-title">
                        <span>Giải thích</span>
                        <small>Cột phải</small>
                    </div>

                    <div className="matching-choice-list">
                        {shuffledMeanings.map((meaning) => {
                            const selected = selectedMeaningId === meaning.id;
                            const matched = matchedSet.has(meaning.id);
                            const wrong = wrongPair?.meaningId === meaning.id;

                            return (
                                <button
                                    key={meaning.id}
                                    type="button"
                                    className={`matching-choice matching-choice-meaning ${selected ? 'selected' : ''
                                        } ${matched ? 'matched' : ''} ${wrong ? 'wrong' : ''}`}
                                    onClick={() => chooseMeaning(meaning.id)}
                                    disabled={matched}
                                >
                                    <span className="matching-choice-status" aria-hidden="true">
                                        {matched ? '✓' : selected ? '●' : ''}
                                    </span>
                                    <span>{meaning.meaning}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="matching-actions">
                <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={clearSelection}
                    disabled={!selectedTermId && !selectedMeaningId && !wrongPair}
                >
                    Bỏ chọn
                </button>

                <button type="button" className="btn btn-primary btn-sm" onClick={resetRound}>
                    Chơi lượt mới
                </button>
            </div>
        </section>
    );
}

function TimelineGame() {
    const ROUND_SIZE = Math.min(7, timelineEvents.length);

    const [roundSeed, setRoundSeed] = useState(0);
    const [selectedIds, setSelectedIds] = useState([]);
    const [checked, setChecked] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    const roundItems = useMemo(() => {
        return shuffle(timelineEvents).slice(0, ROUND_SIZE);
    }, [roundSeed]);

    const correctItems = useMemo(() => {
        return [...roundItems].sort((a, b) => a.order - b.order);
    }, [roundItems]);

    const selectedItems = selectedIds
        .map((id) => roundItems.find((item) => item.id === id))
        .filter(Boolean);

    const availableItems = roundItems.filter((item) => !selectedIds.includes(item.id));

    const isComplete = selectedIds.length === roundItems.length;

    const correctCount = selectedItems.reduce((total, item, index) => {
        return total + (item.id === correctItems[index]?.id ? 1 : 0);
    }, 0);

    const isCorrect = isComplete && correctCount === roundItems.length;

    const progress = Math.round((selectedIds.length / roundItems.length) * 100);

    const chooseItem = (itemId) => {
        if (selectedIds.includes(itemId)) return;

        setSelectedIds((prev) => [...prev, itemId]);
        setChecked(false);
        setShowAnswer(false);
    };

    const removeSelectedAt = (index) => {
        setSelectedIds((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
        setChecked(false);
        setShowAnswer(false);
    };

    const undoLast = () => {
        setSelectedIds((prev) => prev.slice(0, -1));
        setChecked(false);
        setShowAnswer(false);
    };

    const reset = () => {
        setSelectedIds([]);
        setChecked(false);
        setShowAnswer(false);
        setRoundSeed((value) => value + 1);
    };

    return (
        <section className="game-panel timeline-game-panel">
            <div className="timeline-game-head">
                <div>
                    <h2 className="game-panel-title">Sắp xếp dòng thời gian</h2>
                    <p className="game-panel-desc">
                        Chọn các sự kiện theo thứ tự từ cũ đến mới. Mỗi lần bấm,
                        sự kiện sẽ được thêm vào danh sách thứ tự của bạn.
                    </p>
                </div>

                <div className="timeline-score-card">
                    <span>Đã chọn</span>
                    <strong>
                        {selectedIds.length}/{roundItems.length}
                    </strong>
                </div>
            </div>

            <div className="timeline-guide">
                <div className="timeline-guide-step">
                    <span>1</span>
                    <p>Nhìn các sự kiện đang được trộn ở bên trái.</p>
                </div>
                <div className="timeline-guide-step">
                    <span>2</span>
                    <p>Bấm sự kiện theo thứ tự thời gian từ cũ đến mới.</p>
                </div>
                <div className="timeline-guide-step">
                    <span>3</span>
                    <p>Bấm kiểm tra để xem thứ tự của bạn đã đúng chưa.</p>
                </div>
            </div>

            <div className="timeline-progress">
                <div className="timeline-progress-top">
                    <span>Tiến độ lượt chơi</span>
                    <strong>{progress}%</strong>
                </div>

                <div className="timeline-progress-bar">
                    <span style={{ width: `${progress}%` }} />
                </div>
            </div>

            {checked && (
                <div
                    className="timeline-feedback"
                    data-state={isCorrect ? 'correct' : 'wrong'}
                >
                    {isCorrect
                        ? 'Chính xác. Bạn đã sắp xếp đúng toàn bộ dòng thời gian.'
                        : `Chưa đúng. Bạn đúng ${correctCount}/${roundItems.length} vị trí. Hãy bấm vào các mục sai để bỏ chọn và thử lại.`}
                </div>
            )}

            {!checked && (
                <div className="timeline-feedback" data-state="normal">
                    Hãy bắt đầu bằng sự kiện xảy ra sớm nhất trong nhóm bên trái.
                </div>
            )}

            <div className="timeline-game-board">
                <div className="timeline-column-panel">
                    <div className="timeline-column-title">
                        <span>Sự kiện đang trộn</span>
                        <small>Bấm để chọn</small>
                    </div>

                    <div className="timeline-choice-list">
                        {availableItems.length === 0 ? (
                            <div className="timeline-empty-box">
                                Bạn đã chọn hết sự kiện. Hãy bấm “Kiểm tra thứ tự”.
                            </div>
                        ) : (
                            availableItems.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className="timeline-choice-card"
                                    onClick={() => chooseItem(item.id)}
                                >
                                    <span className="timeline-choice-year">{item.year}</span>
                                    <span className="timeline-choice-event">{item.event}</span>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                <div className="timeline-column-panel timeline-column-panel--selected">
                    <div className="timeline-column-title">
                        <span>Thứ tự của bạn</span>
                        <small>Bấm để bỏ chọn</small>
                    </div>

                    <div className="timeline-selected-list">
                        {selectedItems.length === 0 ? (
                            <div className="timeline-empty-box">
                                Chưa chọn sự kiện nào. Hãy chọn sự kiện sớm nhất trước.
                            </div>
                        ) : (
                            selectedItems.map((item, index) => {
                                const correctAtPosition = item.id === correctItems[index]?.id;
                                const wrongAtPosition = checked && !correctAtPosition;

                                return (
                                    <button
                                        key={`${item.id}-${index}`}
                                        type="button"
                                        className={`timeline-selected-card ${
                                            checked && correctAtPosition ? 'correct' : ''
                                        } ${wrongAtPosition ? 'wrong' : ''}`}
                                        onClick={() => removeSelectedAt(index)}
                                    >
                                        <span className="timeline-selected-order">
                                            {index + 1}
                                        </span>

                                        <div>
                                            <span className="timeline-selected-year">
                                                {item.year}
                                            </span>
                                            <p>{item.event}</p>
                                        </div>

                                        <span className="timeline-selected-status" aria-hidden="true">
                                            {checked ? (correctAtPosition ? '✓' : '×') : '↩'}
                                        </span>
                                    </button>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>

            <div className="timeline-actions">
                <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={undoLast}
                    disabled={selectedIds.length === 0}
                >
                    Hoàn tác
                </button>

                <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setChecked(true)}
                    disabled={!isComplete}
                >
                    Kiểm tra thứ tự
                </button>

                <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => setShowAnswer((value) => !value)}
                >
                    {showAnswer ? 'Ẩn đáp án' : 'Xem đáp án'}
                </button>

                <button type="button" className="btn btn-outline btn-sm" onClick={reset}>
                    Chơi lượt mới
                </button>
            </div>

            {showAnswer && (
                <div className="timeline-answer-panel">
                    <h3>Đáp án đúng</h3>

                    <div className="timeline-answer-list">
                        {correctItems.map((item, index) => (
                            <div key={item.id} className="timeline-answer-item">
                                <span>{index + 1}</span>
                                <strong>{item.year}</strong>
                                <p>{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}