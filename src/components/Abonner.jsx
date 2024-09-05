import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { supprimerAbonne } from '../store/abonnesSlice';
import { CgProfile } from "react-icons/cg";

const Abonner = () => {
  const dispatch = useDispatch();
  const listeAbonnes = useSelector((state) => state.abonnes.liste);

  const handleClick = (email) => {
    dispatch(supprimerAbonne({ email }));
  };

  return (
    <div className="background-image2 min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="container mx-auto max-w-screen-md p-4 pb-20">
        <div className="mb-8 p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-white">Liste des Abonnés</h1>
          <p className="text-lg text-gray-300">Voici la liste des personnes abonnées à votre infolettre.</p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {listeAbonnes.map((abonne) => (
            <div key={abonne.email} className="relative p-4 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg max-w-sm mx-auto border-4 border-gray-300">
              {/* Logo at the middle top of the card */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <CgProfile className="text-white text-6xl bg-gray-800 p-2 rounded-full border-4 border-gray-300" />
              </div>

              <div className="flex justify-between items-center mt-12"> {/* Adding top margin to compensate for the icon */}
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-white">Nom :</h1>
                  <p className="text-md text-white border-b-2 border-gray-300">{abonne.nom}</p>
                  <h2 className="text-lg font-bold text-white mt-4">Email :</h2>
                  <p className="text-md text-white border-b-2 border-gray-300">{abonne.email}</p>
                </div>
                <button
                  onClick={() => handleClick(abonne.email)}
                  className="ml-6 px-3 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-800 transition-colors duration-200 ease-in-out"
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