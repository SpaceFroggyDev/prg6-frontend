import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router";

function StoneEdit() {

    const params = useParams()
    const navigate = useNavigate();
    const [stone, setStone] = useState([]);

    useEffect(() => {
        deleteStones();
    }, []);


    const deleteStones = async ()=> {
        try{

            const response = await fetch(`http://145.24.223.191:8042/stones/${params.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
            });
            const data = await response.json();
            setStone(data)
            navigate('/')
            console.log(data);
        } catch (error) {
            console.error('OHNOOOOOO', error)
        }
    }

    return (
        <>
            <div>
                <p>Your stone has successfully deteriorated.</p>
            </div>
        </>
    );
}

export default StoneEdit;