import React, {useEffect, useState} from 'react'
import NotesList from "../NotesList.jsx";
import FormComponent from "../FormComponent.jsx";

function Home() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fetchNotes() {
            try {
                const response = await fetch('https://notes.basboot.nl/notes', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data)

                setNotes(data.items);

            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }
        fetchNotes();
    }, []);


    return (
        <>
            <div>
                {/*<FormComponent OnCreate={onSpotCreate}/>*/}
                { notes.map((note) => <NotesList item = {note} key = {note.id}>  </NotesList>)}
            </div>
        </>
    );
}

export default Home