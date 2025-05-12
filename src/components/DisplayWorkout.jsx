import pencil from '../assets/pencil.png';
import cross from '../assets/cross.png';

const DisplayWorkout = ({ data }) => {

    return (
        <div key={data.id} className="workout">
            <div className="date-of-trainig">{data.date}</div>
            <div className="distance-traveled">{data.distance}</div>
            <div className="edit-panel">
                <button className="edit-btn">
                    <img className="pencil" src={pencil} alt="pencil" />
                </button>
                <button className="cancel-btn">
                    <img className="cross" src={cross} alt="cross" />
                </button>
            </div>
        </div>
    )
}

export default DisplayWorkout;