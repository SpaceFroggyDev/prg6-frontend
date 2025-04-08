import {Link} from "react-router";
import categoryImages from './categoryImages';

function StonesList({stone}) {
    return (
        <div className="stone-container">
            <h5>{stone.name}</h5>
            <div>
                <div className="stone-img">
                    <img src={categoryImages[stone.category] || '/src/assets/BotW_Opal_Icon.png'} alt={stone.category}/>
                </div>
                <div className="buttons">
                    <Link to={`stones/${stone.id}`}>
                        Details
                    </Link>
                    <Link to={`stones/${stone.id}/edit`}>
                        Edit
                    </Link>
                    <Link to={`stones/${stone.id}/delete`}>
                        Delete
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StonesList