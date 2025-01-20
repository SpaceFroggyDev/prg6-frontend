import {useEffect, useState} from "react";
import {useParams} from "react-router";

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
            <img src={item.img_url} alt="image of a stone">
            <h5>{item.name}</h5>
            <p>{item.category}</p>
            <p>{item.description}</p>
        </>
    )
}

export default StoneDetail