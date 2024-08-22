import React, { useState, useEffect } from 'react';

const Accueil = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const allCharacters = [];
        let url = 'https://rickandmortyapi.com/api/character';

        while (url) {
          const response = await fetch(url);
          const data = await response.json();
          allCharacters.push(...data.results);
          url = data.info.next;
        }

        setCharacters(allCharacters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, characters]);

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
    <div className='bg-white'>
      <div className="container mx-auto max-w-screen-xl p-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Découvrez nos personnages!
          </h1>
          <p className="text-lg text-gray-600">
            Explorer le monde fascinant de Rick et Morty.
          </p>
        </div>
        <div className="mb-8">
          <input
            type="text"
            id="search"
            placeholder="Rechercher un personnage"
            className="p-3 border-2 border-green-600 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCharacters.map(character => (
            <div key={character.id} className="relative bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={character.image} alt={character.name} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{character.name}</h2>
                <p className={`text-xl font-medium ${getStatusClass(character.status)}`}>{character.status}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">Détails</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accueil;