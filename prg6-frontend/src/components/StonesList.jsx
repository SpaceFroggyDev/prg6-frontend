import {Link} from "react-router";

function StonesList({stone}) {
    return (
        <div>
            <h5>{stone.name}</h5>
            <p>{stone.type}</p>
            <p>{stone.description}</p>

            <Link to={`stones/${stone.id}`}>
                details
            </Link>

        </div>
    )
}

export default StonesList