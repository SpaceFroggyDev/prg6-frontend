import {Link} from "react-router";

function StonesList({stone}) {
    return (
        <div className="stone-container">
            <h5>{stone.name}</h5>
            <div className="buttons">
                <Link to={`stones/${stone.id}`}>
                    details
                </Link>
                <Link to={`stones/${stone.id}/edit`}>
                    edit
                </Link>
                <Link to={`stones/${stone.id}/delete`}>
                    delete
                </Link>
            </div>
        </div>
    )
}

export default StonesList