import {Link} from "react-router";

function StonesList({item}) {
    return (
        <article>
            <h5>{item.name}</h5>
            <p>{item.category}</p>
            <p>{item.description}</p>

            <Link to={`stones/${item.id}`}>
                details
            </Link>

        </article>
    )
}

export default StonesList