import React, {useState} from 'react';
import {useNavigate} from "react-router";

function FormComponent() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        type: '',
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

        const response = await fetch('http://145.24.223.191:8042/stones', {
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
                <label htmlFor="title">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="category">category:</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="description">description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;