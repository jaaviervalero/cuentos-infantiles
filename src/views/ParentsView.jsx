import { Lock, Unlock, Trash2, FastForward, RotateCcw, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ParentsView = () => {
    const [isLocked, setIsLocked] = useState(true);
    const [answer, setAnswer] = useState('');
    const [challenge, setChallenge] = useState({ n1: 0, n2: 0 });
    const [offset, setOffset] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Generate simple math challenge
        setChallenge({
            n1: Math.floor(Math.random() * 10) + 5,
            n2: Math.floor(Math.random() * 5) + 1
        });

        const storedOffset = localStorage.getItem('dev_day_offset');
        if (storedOffset) setOffset(parseInt(storedOffset));
    }, []);

    const checkAnswer = () => {
        if (parseInt(answer) === challenge.n1 - challenge.n2) {
            setIsLocked(false);
        } else {
            alert("Respuesta incorrecta. Inténtalo de nuevo.");
            setAnswer('');
        }
    };

    const handleResetData = () => {
        if (confirm("¿Estás seguro? Esto borrará TODA la racha y el historial de lectura.")) {
            localStorage.removeItem('daily_story_progress');
            localStorage.removeItem('dev_day_offset');
            alert("Datos borrados. La app se reiniciará.");
            window.location.href = "/";
        }
    };

    const handleAdvanceDay = () => {
        const newOffset = offset + 1;
        setOffset(newOffset);
        localStorage.setItem('dev_day_offset', newOffset.toString());
    };

    const handleResetTime = () => {
        setOffset(0);
        localStorage.setItem('dev_day_offset', '0');
    };

    if (isLocked) {
        return (
            <div className="parents-container locked">
                <Lock size={48} color="var(--text-secondary)" />
                <h2>Acceso Padres</h2>
                <p>Para entrar, resuelve:</p>
                <div className="math-challenge">
                    <span>{challenge.n1} - {challenge.n2} = </span>
                    <input
                        type="number"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="?"
                    />
                </div>
                <button className="unlock-btn" onClick={checkAnswer}>
                    <Unlock size={18} /> Entrar
                </button>
            </div>
        );
    }

    return (
        <div className="parents-container unlocked">
            <h2 className="section-title">Panel de Control</h2>

            <div className="control-group">
                <h3><FastForward size={20} /> Viaje en el Tiempo (Pruebas)</h3>
                <p>Usa esto para ver cuentos de otros días o probar las rachas.</p>
                <div className="time-controls">
                    <div className="offset-display">
                        Días adelantados: <strong>{offset}</strong>
                    </div>
                    <div className="buttons-row">
                        <button onClick={handleAdvanceDay} className="action-btn primary">
                            +1 Día
                        </button>
                        <button onClick={handleResetTime} className="action-btn secondary">
                            <RotateCcw size={16} /> Hoy Real
                        </button>
                    </div>
                </div>
            </div>

            <div className="control-group danger-zone">
                <h3>Zona de Peligro</h3>
                <button onClick={handleResetData} className="action-btn danger">
                    🗑️ Borrar Todo el Progreso
                </button>
            </div>

            <button onClick={() => navigate('/')} className="back-btn">
                Volver a la App
            </button>
        </div>
    );
};

export default ParentsView;
