import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { supprimerAbonne } from '../store/abonnesSlice';

const Abonner = () => {
  const dispatch = useDispatch();
  const listeAbonnes = useSelector((state) => state.abonnes.liste);

  const handleClick = (email) => {
    dispatch(supprimerAbonne({ email }));
  };

  return (
    <div className="background-image2 min-h-screen bg-cover bg-no-repeat"> {/* Tailwind background utilities */}
      <div className="container mx-auto max-w-screen-xl p-4">
        <div className="max-w-lg mx-auto flex flex-col gap-6">
          {listeAbonnes.map((abonne) => (
            <div key={abonne.email} className="p-4 bg-gray-800 rounded-md shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-white">Nom :</h1>
                  <p className="text-lg font-bold text-white border-b-4 border-gray">{abonne.nom}</p>
                  <h2 className="text-lg font-bold text-white mt-2">Email:</h2>
                  <p className="text-lg font-bold text-white border-b-4 border-gray">{abonne.email}</p>
                </div>
                <button
                  onClick={() => handleClick(abonne.email)}
                  className="ml-4 px-4 py-4 bg-red-700 text-white rounded-md hover:bg-red-900 transition-colors duration-200"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Abonner;