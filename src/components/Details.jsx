import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMars, FaVenus } from 'react-icons/fa';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import '../Details.css';

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [location, setLocation] = useState(null);
    const [showLocationDetails, setShowLocationDetails] = useState(false);
    const [residents, setResidents] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [showEpisodes, setShowEpisodes] = useState(false);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharacter(data);

                // Fetch episode details
                const episodeDetails = await Promise.all(
                    data.episode.map(async (url) => {
                        const res = await fetch(url);
                        return res.json();
                    })
                );
                setEpisodes(episodeDetails);

            } catch (error) {
                console.error('Error fetch details', error);
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
                console.error('Error fetch details', error);
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
        <div className="background-image relative min-h-screen p-4 md:p-6 pt-20">
            <div className="container mx-auto max-w-screen-xl p-4">
                <div className="text-center mb-6 md:mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        {character ? character.name : 'Loading...'} <p className="text-xl md:text-3xl pt-2 md:pt-4">Détails</p>
                    </h1>
                </div>
                {/* Accueil button */}
                <div className="text-center mb-6 md:mb-10">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-green-900 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Retour à Accueil
                    </button>
                </div>

                {/* Main content */}
                <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8">
                    {/* Character Card */}
                    {!showEpisodes && character && (
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-md md:max-w-2xl lg:max-w-screen-lg mb-4 md:mb-8">
                            <div className="w-full md:w-1/3 bg-gray-800">
                                <img src={character.image} alt={character.name} className="object-cover w-full h-full" />
                            </div>
                            <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col justify-center">
                                <div className="flex items-center mb-2 md:mb-4">
                                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mr-2 md:mr-4">{character.name}</h1>
                                    {getGenderIcon(character.gender)}
                                </div>
                                <p className={`text-md md:text-lg font-bold ${getStatusClass(character.status)}`}>{character.status}</p>
                                <p className="text-md md:text-lg text-gray-700 mb-1 md:mb-2">
                                    <strong>Species:</strong> {character.species}
                                </p>
                                <p className="text-md md:text-lg text-gray-700 mb-1 md:mb-2">
                                    <strong>Gender:</strong> {character.gender}
                                </p>
                                <p
                                    className="text-md md:text-lg text-blue-500 cursor-pointer mb-1 md:mb-2"
                                    onClick={handleLocationClick}
                                >
                                    <strong>Location:</strong> {character.location.name}
                                </p>
                                <p className="text-md md:text-lg text-gray-700">
                                    <strong>Origin:</strong> {character.origin.name}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Episode Details */}
                    <div className={`bg-white shadow-lg rounded-lg overflow-hidden max-w-md md:max-w-full mb-4 md:mb-8 ${!showEpisodes ? 'md:ml-0' : ''}`}>
                        <div className="p-4 md:p-6">
                            <div className="flex items-center justify-between mb-2 md:mb-4">
                                <h2 className="text-xl md:text-2xl font-bold text-black">Episodes:</h2>
                                <button
                                    onClick={() => setShowEpisodes(!showEpisodes)}
                                    className="text-gray-700 hover:text-gray-900 focus:outline-none"
                                >
                                    {showEpisodes ? (
                                        <FaCaretUp className="text-lg md:text-xl" />
                                    ) : (
                                        <FaCaretDown className="text-lg md:text-xl" />
                                    )}
                                </button>
                            </div>
                            {showEpisodes && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
                                    {episodes.map((episode) => (
                                        <div key={episode.id} className="bg-gray-100 p-2 md:p-4 rounded-lg shadow">
                                            <p className="text-md md:text-lg font-bold">{episode.episode}</p>
                                            <p className="text-gray-700">{episode.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {!showEpisodes && (
                                <div className="flex justify-center">
                                    <p className="text-gray-700 text-md md:text-lg">Clique la fleche pour voir les episodes</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {showLocationDetails && location && (
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md md:max-w-2xl lg:max-w-screen-lg mt-4 md:mt-8">
                        <div className="p-4 md:p-6">
                            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">{location.name}</h2>
                            <p className="text-md md:text-lg text-gray-700 mb-1 md:mb-2"><strong>Type:</strong> {location.type}</p>
                            <p className="text-md md:text-lg text-gray-700 mb-2 md:mb-4"><strong>Dimension:</strong> {location.dimension}</p>
                            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Residents:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                                {residents.map((resident) => (
                                    <div key={resident.id} className="bg-gray-200 p-2 md:p-4 rounded-lg shadow">
                                        <img src={resident.image} alt={resident.name} className="w-full object-cover mb-1 md:mb-2 rounded-lg" />
                                        <p className="text-md md:text-lg font-bold">{resident.name}</p>
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