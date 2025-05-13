import { useState } from "react";
import TrainingList from "./TrainingList";
import editTrainingRecord from "../utils/editTrainingRecord";
import sortDatesDesc from "../utils/sortDatesDesc";

const TrainingLog = () => {
    const [dateValue, setDateValue] = useState('');
    const [distanceValue, setDistanceValue] = useState('');
    const [error, setError] = useState('');
    const [training, setTraining] = useState([
        { date: '20.07.2019', distance: 5.7, id: 154687258 },
        { date: '19.07.2019', distance: 14.2, id: 8795158472 },
        { date: '18.07.2019', distance: 3.4, id: 978843351321 }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!dateValue || !distanceValue) {
            setError('Необходимо заполнить все поля!');
            return;
        }

        const distance = parseFloat(distanceValue);
        if (isNaN(distance)) {
            setError('Введите корректное число для дистанции');
            return;
        }

        try {
            const newTraining = {
                date: dateValue,
                distance: distance,
                id: Date.now(),
            };

            const existingRecord = training.find(item => item.date === newTraining.date);

            setTraining(prev => existingRecord ? editTrainingRecord(newTraining, prev).sort(sortDatesDesc) : [...prev, newTraining].sort(sortDatesDesc));

            setDateValue('');
            setDistanceValue('');
            setError('');
        } catch (error) {
            setError(`Ошибка!: ${error}`);
        }
    }

    const handleDelete = (id) => {
        setTraining(prev => prev.filter(item => item.id !== id));
    };

    const handleEdit = (id) => {
        const workoutToEdit = training.find(el => el.id === id);
        const { date, distance } = workoutToEdit;
        setDateValue(date);
        setDistanceValue(distance);
        setTraining(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="training-log">
            <form className="training-form" onSubmit={handleSubmit}>
                <div className="wrap">
                    <label htmlFor="enterDate">Дата (ДД.ММ.ГГ)</label>
                    <input 
                        type="text" 
                        placeholder=" " 
                        pattern="\d{2}\.\d{2}\.\d{4}" 
                        id="enterDate"
                        value={dateValue}
                        onChange={(e) => setDateValue(e.target.value)}
                    />
                </div>
                <div className="wrap">
                    <label htmlFor="enterDistance">Пройдено км</label>
                    <input 
                        type="number" 
                        id="enterDistance" 
                        className="no-spinner"
                        value={distanceValue}
                        onChange={(e) => setDistanceValue(e.target.value)}
                    />
                </div>
                <button className="btn">ОК</button>
            </form>
            <div className="headers">
                <div className="list-header">Дата (ДД.ММ.ГГ)</div>
                <div className="list-header">Пройдено км</div>
                <div className="list-header">Действия</div>
            </div>
            <TrainingList 
                workouts={training}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default TrainingLog;