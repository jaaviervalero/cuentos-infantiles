import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StoryCard from '../components/StoryCard';
import Quiz from '../components/Quiz';
import { getAllStories } from '../data/storyData';
import { useProgress } from '../hooks/useProgress';
import { ArrowLeft } from 'lucide-react';

const StoryReaderView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const stories = getAllStories();
    const story = stories.find(s => s.id === parseInt(id));
    const { markStoryAsRead } = useProgress();
    const [mode, setMode] = useState('story');

    if (!story) return <div>Cuento no encontrado</div>;

    const handleFinish = () => {
        setMode('quiz');
    };

    const handleQuizComplete = () => {
        markStoryAsRead(story);
        // Navigate back after delay
        setTimeout(() => {
            navigate('/history');
        }, 2000);
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <button
                onClick={() => navigate(-1)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '1rem',
                    background: 'none',
                    fontSize: '1rem',
                    color: 'var(--text-secondary)'
                }}
            >
                <ArrowLeft size={20} /> Volver
            </button>

            {mode === 'story' && (
                <StoryCard story={story} onFinish={handleFinish} />
            )}

            {mode === 'quiz' && (
                <Quiz questions={story.quiz} onComplete={handleQuizComplete} />
            )}
        </div>
    );
};

export default StoryReaderView;
