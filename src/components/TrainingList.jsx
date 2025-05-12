import pencil from '../assets/pencil.png';
import cross from '../assets/cross.png';

const TrainingList = ({ workouts, onDelete }) => {
    return (
        <div className="training-list">
            {workouts.length === 0 ? (
                <p className="no-workouts">Записи тренировок отсутствуют</p>
            ) : (
                <div className="workouts-container">
                    {workouts.map((workout) => (
                        <div key={workout.id} className="workout">
                            <div className="date-of-trainig">{workout.date}</div>
                            <div className="distance-traveled">{workout.distance} км</div>
                            <div className="edit-panel">
                                <button 
                                    className="edit-btn"
                                    onClick={() => handleEdit(workout.id)}
                                >
                                    <img className="pencil" src={pencil} alt="Редактировать" />
                                </button>
                                <button 
                                    className="cancel-btn"
                                    onClick={() => onDelete(workout.id)}
                                >
                                    <img className="cross" src={cross} alt="Удалить" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TrainingList;