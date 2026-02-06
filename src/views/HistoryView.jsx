import React from 'react';
import { Calendar, CheckCircle, Circle, BookOpen } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { getAllStories } from '../data/storyData';
import { useNavigate } from 'react-router-dom';
// Styles imported via Views.css

const HistoryView = () => {
    const { progress } = useProgress();
    const navigate = useNavigate();
    const allStories = getAllStories();
    const readHistory = progress.history; // Array of { id, date... }

    // Helper to check if read
    const isRead = (storyId) => readHistory.some(h => h.id === storyId);
    // Helper to get read date
    const getReadDate = (storyId) => {
        const entry = readHistory.find(h => h.id === storyId);
        return entry ? new Date(entry.date).toLocaleDateString() : null;
    };

    return (
        <div className="history-container">
            <h2 className="section-title">Biblioteca de Cuentos</h2>

            <div className="history-list">
                {allStories.map((story) => {
                    const read = isRead(story.id);
                    const date = getReadDate(story.id);

                    return (
                        <div
                            key={story.id}
                            className={`history-card ${read ? 'read' : 'unread'}`}
                            onClick={() => navigate(`/story/${story.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="history-status">
                                {read ? (
                                    <CheckCircle size={24} color="var(--success-color)" />
                                ) : (
                                    <Circle size={24} color="var(--text-secondary)" />
                                )}
                            </div>

                            <div className="history-content">
                                <h3>{story.title}</h3>
                                {read ? (
                                    <p className="history-moral">💡 {story.moral}</p>
                                ) : (
                                    <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                        ¡Toca para leer!
                                    </p>
                                )}
                            </div>

                            {read && (
                                <div className="history-date">
                                    {date}
                                </div>
                            )}
                            {!read && (
                                <div className="history-date">
                                    <BookOpen size={20} color="var(--primary-accent)" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HistoryView;
