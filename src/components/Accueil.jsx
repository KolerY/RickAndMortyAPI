import React, { useEffect, useState } from 'react';

const Accueil = () => {

  const [characters, setCharacters] = React.useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Erreur fetch character', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="container mx-auto max-w-screen-xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map(character => (
        <div key={character.id} className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
          <img src={character.image} alt={character.name} className="w-full object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold">{character.name}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accueil