import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './Quiz.css';

const Quiz = ({ questions, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect'
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = questions[currentIndex];

    const handleOptionClick = (option) => {
        if (selectedOption) return; // Prevent double clicks
        setSelectedOption(option);

        if (option === currentQuestion.correctAnswer) {
            setFeedback('correct');
            // Trigger confetti for fun
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 }
            });

            setTimeout(() => {
                handleNext();
            }, 1500);
        } else {
            setFeedback('incorrect');
            setTimeout(() => {
                setSelectedOption(null);
                setFeedback(null);
            }, 1000);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setFeedback(null);
        } else {
            setIsFinished(true);
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });
            if (onComplete) onComplete();
        }
    };

    if (isFinished) {
        return (
            <div className="quiz-container congratulations">
                <h2 className="congrats-title">¡Felicidades! 🎉</h2>
                <p className="question-text">Has completado el cuento de hoy.</p>
                <p style={{ marginBottom: '2rem' }}>¡Vuelve mañana para otra historia!</p>
                {/* Optional: Add restart or back to home if this was a multi-story app */}
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">Pregunta {currentIndex + 1} de {questions.length}</h2>
            <p className="question-text">{currentQuestion.question}</p>

            <div className="options-grid">
                {currentQuestion.options.map((option, idx) => {
                    let extraClass = '';
                    if (selectedOption === option) {
                        extraClass = feedback === 'correct' ? 'correct' : 'incorrect';
                    }

                    return (
                        <button
                            key={idx}
                            className={`option-btn ${extraClass}`}
                            onClick={() => handleOptionClick(option)}
                            disabled={selectedOption !== null}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {feedback === 'incorrect' && (
                <p className="feedback-msg error">¡Inténtalo de nuevo! 😅</p>
            )}
            {feedback === 'correct' && (
                <p className="feedback-msg success">¡Correcto! 🌟</p>
            )}
        </div>
    );
};

export default Quiz;
