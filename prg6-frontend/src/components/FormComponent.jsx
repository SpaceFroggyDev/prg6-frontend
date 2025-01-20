import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router";

function FormComponent() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        img_url: '',
        category: '',
        hardness: '',
        diaphaneity: '',
        description: '',
    });

    // Generieke handler voor het bijwerken van de state
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

        const response = await fetch('https://notes.basboot.nl/notes', {
            method: 'POST',
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
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="body">Body:</label>
                <input
                    type="text"
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Verzenden</button>
        </form>
    );
}

export default FormComponent;