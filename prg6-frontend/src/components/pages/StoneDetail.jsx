import {useEffect, useState} from "react";
import {Link, useParams} from "react-router";

function StoneDetail() {

    const {id} = useParams()

    const [stones, setStones] = useState([]);

    useEffect(() => {
        async function fetchStones() {
            try {
                const response = await fetch(`https://notes.basboot.nl/notes/` + id, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data)

                setStones(data);

            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }
        fetchStones();
    }, [id]);

    return (
        <>
            <div>
                <article>
                    <h2>{stones.title}</h2>
                    <p>Stone found by {stones.author}</p>
                    <p>{stones.body}</p>
                </article>
            </div>
        </>
    )
}

export default StoneDetail