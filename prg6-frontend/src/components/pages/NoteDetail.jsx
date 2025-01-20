import {useEffect, useState} from "react";
import {useParams} from "react-router";

function NoteDetail() {

    const {id} = useParams()

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fetchNotes() {
            try {
                const response = await fetch(`https://notes.basboot.nl/notes/` + id, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data)

                setNotes(data);

            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }
        fetchNotes();
    }, [id]);

    return (
        <>
            <div>
                <h5>{notes.title}</h5>
                <p>{notes.body}</p>
                <p>Geschreven door {notes.author}</p>
            </div>
        </>
    )
}
export default NoteDetail