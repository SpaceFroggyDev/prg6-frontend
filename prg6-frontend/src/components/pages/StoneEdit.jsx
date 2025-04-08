import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";

function StoneEdit() {

    const params = useParams()
    const navigate = useNavigate();
    const [stone, setStone] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: '',
    });

    useEffect(() => {
        loadStone()
    }, []);

    const loadStone = async () => {
        const response = await fetch(`http://145.24.223.191:8042/stones/${params.id}`, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    setStone(data);
        setFormData({
            name: data.name,
            category: data.category,
            description: data.description,
        });
}
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
            const updatedStone = {
                ...stone,
                ...formData,
                name: formData.name || stone.name,
                category: formData.category || stone.category,
                description: formData.description || stone.description,
            };

            const response = await fetch(`http://145.24.223.191:8042/stones/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updatedStone)
            });
            const data = await response.json();
            navigate('/')
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="pb-10">Edit Stone</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={stone.name}
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder={stone.category}
                    value={formData.category}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder={stone.description}
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="mt-10">Submit</button>
        </form>
    );
}

export default StoneEdit;