import {useEffect, useState} from "react";
import {Link, useParams} from "react-router";

function StoneDetail() {

    const {id} = useParams()

    const [stones, setStones] = useState([]);

    useEffect(() => {
        async function fetchStones() {
            try {
                const response = await fetch(`http://145.24.223.191:8042/stones/` + id, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data)

                setStones(data);
                console.log('Fetched data:', data);

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
                    <h2>{stones.name}</h2>
                    <p>category: {stones.category}</p>
                    <p>{stones.description}</p>
                </article>
            </div>
        </>
    )
}

export default StoneDetail