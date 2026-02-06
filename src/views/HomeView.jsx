import React, { useState } from 'react';
import StoryCard from '../components/StoryCard';
import Quiz from '../components/Quiz';
import { getDailyStory } from '../data/storyData';
import { useProgress } from '../hooks/useProgress';

const HomeView = () => {
    const dailyStory = getDailyStory();
    const { progress, markStoryAsRead } = useProgress();
    const [mode, setMode] = useState('story'); // 'story' | 'quiz'

    // Check if already completed today
    const alreadyReadToday = progress.history.some(h => h.id === dailyStory.id && new Date(h.date).toDateString() === new Date().toDateString());

    const handleStoryFinish = () => {
        setMode('quiz');
    };

    const handleQuizComplete = () => {
        markStoryAsRead(dailyStory);
    };

    if (alreadyReadToday) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h2 style={{ color: 'var(--success-color)', marginBottom: '1rem' }}>
                    ¡Misión Cumplida! 🌟
                </h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Ya has completado el cuento de hoy: <br />
                    <strong>{dailyStory.title}</strong>
                </p>
                <div style={{
                    backgroundColor: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <p className="learning-moral">"{dailyStory.moral}"</p>
                </div>
                <p style={{ marginTop: '2rem', color: 'var(--text-secondary)' }}>
                    Vuelve mañana para una nueva aventura.
                </p>
            </div>
        );
    }

    return (
        <div>
            {mode === 'story' && (
                <StoryCard
                    story={dailyStory}
                    onFinish={handleStoryFinish}
                />
            )}

            {mode === 'quiz' && (
                <Quiz
                    questions={dailyStory.quiz}
                    onComplete={handleQuizComplete}
                />
            )}
        </div>
    );
};

export default HomeView;
