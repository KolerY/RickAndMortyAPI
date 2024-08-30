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
    <div className="container mx-auto max-w-screen-md p-4">
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-md shadow-md">
        <div className="col-span-1 flex flex-col">
          <h1 className="text-lg font-bold">Nom :</h1>
          <h2 className="text-md font-semibold">Email:</h2>
        </div>
        <div className="col-span-1 flex flex-col items-end">
          {listeAbonnes.map((abonne) => (
            <div key={abonne.email} className="flex justify-between items-center mb-2">
              <div>
                <p className="text-sm">{abonne.nom}</p>
                <p className="text-sm">{abonne.email}</p>
              </div>
              <button
                onClick={() => handleClick(abonne.email)}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-900 transition-colors duration-200"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Abonner;