import React, {useEffect, useState} from 'react'
import StonesList from "../StonesList.jsx";
import FormComponent from "../FormComponent.jsx";

function Home() {

    const [stones, setStones] = useState([]);

    useEffect(() => {
        async function fetchStones() {
            try {
                const response = await fetch('https://notes.basboot.nl/notes', {
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
                {/*<FormComponent OnCreate={onSpotCreate}/>*/}
                { stones.map((stone) => <StonesList item = {stone} key = {stone.id}>  </StonesList>)}
            </div>
        </>
    );
}

export default Home