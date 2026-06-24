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

        .matching-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .matching-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .matching-card,
        .timeline-card {
          border: 1px solid var(--border-light);
          background: var(--bg-alt);
          border-radius: var(--radius);
          padding: 1rem;
        }

        .matching-term {
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.75rem;
        }

        .matching-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .matching-option {
          text-align: left;
          border: 1px solid var(--border);
          background: white;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          font-family: inherit;
          cursor: pointer;
          transition: all var(--transition);
          line-height: 1.5;
        }

        .matching-option:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .matching-option.correct {
          background: var(--accent-green-light);
          color: var(--accent-green);
          border-color: var(--accent-green);
          font-weight: 700;
        }

        .matching-option.wrong {
          background: #fef2f2;
          color: #b91c1c;
          border-color: #f87171;
        }

        .game-result {
          margin-top: 1.25rem;
          padding: 1rem;
          border-radius: var(--radius);
          background: var(--accent-light);
          color: var(--accent);
          font-weight: 700;
          text-align: center;
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .timeline-card {
          display: grid;
          grid-template-columns: 90px 1fr auto;
          align-items: center;
          gap: 1rem;
        }

        .timeline-year {
          font-family: var(--font-serif);
          font-weight: 800;
          color: var(--accent);
          font-size: 1.15rem;
        }

        .timeline-event {
          margin: 0;
          color: var(--text);
          line-height: 1.55;
        }

        .timeline-controls {
          display: flex;
          gap: 0.35rem;
        }

        .timeline-controls button {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: white;
          cursor: pointer;
          color: var(--accent);
          font-weight: 700;
        }

        .timeline-actions {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
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

.flashcard-text {
  max-height: 230px;
}
          .timeline-card {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .timeline-controls {
            justify-content: flex-start;
          }
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
    const shuffledMeanings = useMemo(() => shuffle(matchingPairs), []);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const correctCount = matchingPairs.reduce((total, pair) => {
        return total + (answers[pair.id] === pair.id ? 1 : 0);
    }, 0);

    const choose = (pairId, meaningId) => {
        if (submitted) return;
        setAnswers((prev) => ({ ...prev, [pairId]: meaningId }));
    };

    const reset = () => {
        setAnswers({});
        setSubmitted(false);
    };

    return (
        <section className="game-panel">
            <h2 className="game-panel-title">Ghép cặp khái niệm</h2>
            <p className="game-panel-desc">
                Chọn phần giải thích đúng cho từng nhân vật, sự kiện hoặc văn kiện.
            </p>

            <div className="matching-layout">
                <div className="matching-col">
                    {matchingPairs.map((pair) => (
                        <div key={pair.id} className="matching-card">
                            <div className="matching-term">{pair.term}</div>
                            <div className="matching-options">
                                {shuffledMeanings.map((meaning) => {
                                    const selected = answers[pair.id] === meaning.id;
                                    const correct = submitted && selected && meaning.id === pair.id;
                                    const wrong = submitted && selected && meaning.id !== pair.id;

                                    return (
                                        <button
                                            key={meaning.id}
                                            type="button"
                                            className={`matching-option ${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''}`}
                                            onClick={() => choose(pair.id, meaning.id)}
                                        >
                                            {selected ? '✓ ' : ''}
                                            {meaning.meaning}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="matching-col">
                    <div className="matching-card">
                        <h3 className="game-panel-title">Cách tính điểm</h3>
                        <p className="game-panel-desc">
                            Mỗi cặp đúng được 1 điểm. Bấm “Kiểm tra” sau khi chọn đủ đáp án.
                        </p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setSubmitted(true)}
                            disabled={Object.keys(answers).length < matchingPairs.length}
                        >
                            Kiểm tra
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline"
                            onClick={reset}
                            style={{ marginLeft: '0.75rem' }}
                        >
                            Làm lại
                        </button>

                        {submitted && (
                            <div className="game-result">
                                Bạn đúng {correctCount}/{matchingPairs.length} cặp.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineGame() {
    const [items, setItems] = useState(() => shuffle(timelineEvents));
    const [checked, setChecked] = useState(false);

    const move = (index, direction) => {
        const nextIndex = index + direction;
        if (nextIndex < 0 || nextIndex >= items.length) return;

        const nextItems = [...items];
        const temp = nextItems[index];
        nextItems[index] = nextItems[nextIndex];
        nextItems[nextIndex] = temp;

        setItems(nextItems);
        setChecked(false);
    };

    const isCorrect = items.every((item, index) => item.order === index + 1);

    const reset = () => {
        setItems(shuffle(timelineEvents));
        setChecked(false);
    };

    return (
        <section className="game-panel">
            <h2 className="game-panel-title">Sắp xếp dòng thời gian</h2>
            <p className="game-panel-desc">
                Dùng nút lên/xuống để sắp xếp các sự kiện theo đúng thứ tự lịch sử.
            </p>

            <div className="timeline-list">
                {items.map((item, index) => (
                    <div key={item.id} className="timeline-card">
                        <span className="timeline-year">{item.year}</span>
                        <p className="timeline-event">{item.event}</p>
                        <div className="timeline-controls">
                            <button type="button" onClick={() => move(index, -1)} aria-label="Di chuyển lên">
                                ↑
                            </button>
                            <button type="button" onClick={() => move(index, 1)} aria-label="Di chuyển xuống">
                                ↓
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="timeline-actions">
                <button type="button" className="btn btn-primary" onClick={() => setChecked(true)}>
                    Kiểm tra thứ tự
                </button>
                <button type="button" className="btn btn-outline" onClick={reset}>
                    Trộn lại
                </button>
            </div>

            {checked && (
                <div className="game-result">
                    {isCorrect
                        ? 'Chính xác. Bạn đã sắp xếp đúng toàn bộ dòng thời gian.'
                        : 'Chưa đúng. Hãy kiểm tra lại thứ tự các mốc lịch sử.'}
                </div>
            )}
        </section>
    );
}