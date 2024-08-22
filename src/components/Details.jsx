import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMars, FaVenus } from 'react-icons/fa';

const Details = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        };

        fetchCharacterDetails();
    }, [id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    const getGenderIcon = (gender) => {
        return gender === 'Male' ? <FaMars className="text-blue-500 text-2xl" /> : <FaVenus className="text-pink-500 text-2xl" />;
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Alive':
                return 'text-green-500';
            case 'Dead':
                return 'text-red-500';
            default:
                return 'text-gray-400';
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-900 p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-screen-lg">
                <div className="md:w-1/3 bg-gray-800">
                    <img src={character.image} alt={character.name} className="object-cover w-full h-full" />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                        <h1 className="text-4xl font-bold text-gray-900 mr-4">{character.name}</h1>
                        {getGenderIcon(character.gender)}
                    </div>
                    <p className={`text-lg font-bold ${getStatusClass(character.status)}`}>{character.status}</p>
                    <p className="text-lg text-gray-700 mb-2">
                        <strong>Species:</strong> {character.species}
                    </p>
                    <p className="text-lg text-gray-700 mb-2">
                        <strong>Gender:</strong> {character.gender}
                    </p>
                    <p className="text-lg text-gray-700">
                        <strong>Origin:</strong> {character.origin.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;