import React, { useMemo } from 'react';
import { Flame, Star, Trophy } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

const StatsView = () => {
    const { progress } = useProgress();

    // Calculate stats
    const totalStories = progress.history.length;
    const streak = progress.streak;

    // Unique morals learned
    const learnings = useMemo(() => {
        return progress.history.map(h => ({
            id: h.id,
            moral: h.moral,
            title: h.title,
            date: new Date(h.date).toLocaleDateString()
        }));
    }, [progress.history]);

    return (
        <div className="stats-container">
            <h2 className="section-title">Tu Progreso</h2>

            <div className="stats-grid">
                <div className="stat-card streak-card">
                    <div className="icon-wrapper fire">
                        <Flame size={40} fill="orange" color="orange" />
                    </div>
                    <div className="stat-info">
                        <h3>{streak} Días</h3>
                        <p>Racha actual 🔥</p>
                    </div>
                </div>

                <div className="stat-card total-card">
                    <div className="icon-wrapper star">
                        <Star size={40} fill="#f1c40f" color="#f1c40f" />
                    </div>
                    <div className="stat-info">
                        <h3>{totalStories}</h3>
                        <p>Cuentos leídos</p>
                    </div>
                </div>
            </div>

            <div className="badges-section">
                <h3 className="subsection-title">
                    <Trophy size={20} /> Tesoros de Sabiduría
                </h3>

                {learnings.length === 0 ? (
                    <div className="empty-state">
                        <p>Aún no has descubierto tesoros. ¡Lee tu primer cuento hoy!</p>
                    </div>
                ) : (
                    <div className="learnings-list">
                        {learnings.map((item, idx) => (
                            <div key={`${item.id}-${idx}`} className="learning-item">
                                <span className="check-icon">✨</span>
                                <div>
                                    <p className="learning-moral">"{item.moral}"</p>
                                    <p className="learning-source">de {item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatsView;
