import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMars, FaVenus } from 'react-icons/fa';
import Background from '../assets/background.png';
import '../Details.css';

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [location, setLocation] = useState(null);
    const [showLocationDetails, setShowLocationDetails] = useState(false);
    const [residents, setResidents] = useState([]);

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

    const handleLocationClick = async () => {
        if (!character?.location?.url) return;

        if (showLocationDetails) {
            setShowLocationDetails(false);
            setLocation(null);
            setResidents([]);
        } else {
            try {
                const response = await fetch(character.location.url);
                const data = await response.json();
                setLocation(data);
                setShowLocationDetails(true);

                const residentDetails = await Promise.all(
                    data.residents.map(async (url) => {
                        const res = await fetch(url);
                        return res.json();
                    })
                );
                setResidents(residentDetails);
            } catch (error) {
                console.error('Error fetching location details:', error);
            }
        }
    };

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
        <div className="background-image relative min-h-screen p-6 pt-20">
            {/* Back to Accueil Button */}
            <div className="text-center mb-10">
                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Retour à Accueil
                </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center">
                {character && (
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-screen-lg mb-8">
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
                            <p
                                className="text-lg text-blue-500 cursor-pointer mb-2"
                                onClick={handleLocationClick}
                            >
                                <strong>Location:</strong> {character.location.name}
                            </p>
                            <p className="text-lg text-gray-700">
                                <strong>Origin:</strong> {character.origin.name}
                            </p>
                        </div>
                    </div>
                )}

                {showLocationDetails && location && (
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-screen-lg">
                        <div className="p-6">
                            <h2 className="text-3xl font-bold mb-4">{location.name}</h2>
                            <p className="text-lg text-gray-700 mb-2"><strong>Type:</strong> {location.type}</p>
                            <p className="text-lg text-gray-700 mb-4"><strong>Dimension:</strong> {location.dimension}</p>
                            <h3 className="text-2xl font-bold mb-4">Residents:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {residents.map((resident) => (
                                    <div key={resident.id} className="bg-gray-200 p-4 rounded-lg shadow">
                                        <img src={resident.image} alt={resident.name} className="w-full object-cover mb-2 rounded-lg" />
                                        <p className="text-lg font-bold">{resident.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;