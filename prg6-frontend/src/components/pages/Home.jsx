import React, {useEffect, useState} from 'react'
import StonesList from "../StonesList.jsx";
import FormComponent from "../FormComponent.jsx";

function Home() {

    const [stones, setStones] = useState([]);

    useEffect(() => {
        async function fetchStones() {
            try {
                const response = await fetch('http://145.24.223.191:8042/stones', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data)

                setStones(data.items);

            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }
        fetchStones();
    }, []);


    return (
        <>
            <div>
                { stones.map((stone) => <StonesList stone = {stone} key = {stone.id}>  </StonesList>)}
            </div>
        </>
    );
}

export default Home