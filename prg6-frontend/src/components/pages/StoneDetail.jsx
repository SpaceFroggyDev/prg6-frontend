import {useEffect, useState} from "react";
import {Link, useParams} from "react-router";
import categoryImages from "../categoryImages.jsx";

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
                <article className="p-10">
                    <h2>{stones.name}</h2>
                    <p className="italic">{stones.category}</p>
                    <div className="flex flex-row justify-center items-center">
                        <div>
                            <img className="w-[20vw]" src={categoryImages[stones.category] || '../src/assets/BotW_Opal_Icon.png'}
                                 alt={stones.category}/>
                        </div>
                            <p className="w-[30vw]">{stones.description}</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export default StoneDetail