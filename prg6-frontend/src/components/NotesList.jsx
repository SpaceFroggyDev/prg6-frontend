import {Link} from "react-router";

function NotesList({item}) {
    return (
        <div>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
            <p>Geschreven door {item.author}</p>

            <Link to={`notes/${item.id}`}>
                details
            </Link>

        </div>
    )
}

export default NotesList