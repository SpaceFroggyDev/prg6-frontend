import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";

function StoneEdit() {

    const params = useParams()
    const navigate = useNavigate();
    const [stone, setStone] = useState([]);

    useEffect(() => {
        loadStone()
    }, []);

    const loadStone = async () => {
        const response = await fetch(`https://notes.basboot.nl/notes/${params.id}`, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    setStone(data);
    console.log(data);
}

    const [formData, setFormData] = useState({
        name: '',
        type: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        saveStones()
        console.log('Formulier verzonden:', formData);
    };

    const saveStones = async ()=> {

        try{

            const response = await fetch(`https://notes.basboot.nl/notes/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            navigate('/')
            console.log(data);
        } catch (error) {
            console.error('OHNOOOOOO', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder={stone.title}
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="type">author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder={stone.author}
                    value={formData.author}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="body">Body:</label>
                <input
                    type="text"
                    id="body"
                    name="body"
                    placeholder={stone.body}
                    value={formData.body}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default StoneEdit;