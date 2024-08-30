import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ajouterAbonne } from '../store/abonnesSlice';

const Footer = () => {
  const listeAbonnes = useSelector(state => state.abonnes.liste);
  const dispatch = useDispatch();

  // Utilisation de useState pour gérer l'état local des champs de formulaire
  const [abonne, setAbonne] = useState({
    nom: "",
    email: ""
  });

  // Fonction pour gérer les changements des champs de formulaire
  const handleChange = (event) => {
    setAbonne({ ...abonne, [event.target.name]: event.target.value });
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifier si l'email ou le nom existe déjà
    const emailExiste = verifierEmail(abonne.email);
    const nomExiste = verifierNom(abonne.nom);

    if (emailExiste) {
      alert("L'email existe déjà");
    } else if (nomExiste) {
      alert("Le nom existe déjà");
    } else {
      dispatch(ajouterAbonne(abonne));
      setAbonne({ nom: "", email: "" }); // Réinitialiser le formulaire après l'ajout
    }
  };

  // Vérification de l'existence de l'email
  const verifierEmail = (email) => {
    return listeAbonnes.some((abonne) => abonne.email === email);
  };

  // Vérification de l'existence du nom
  const verifierNom = (nom) => {
    return listeAbonnes.some((abonne) => abonne.nom === nom);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2 flex items-center justify-between px-4">
      <p className="text-sm">&copy; 2024 Yannick Blanchette</p>
      <div className="flex items-center space-x-4">
        <h2 className="text-lg">Enregistrez-vous à notre infolettre</h2>
        <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="nom" className="text-xs">Nom</label>
            <input
              id="nom"
              type="text"
              name="nom"
              placeholder="Entrez le nom"
              className="p-1 border border-gray-400 rounded text-black focus:outline-none"
              value={abonne.nom}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Entrez l'email"
              className="p-1 border border-gray-400 rounded text-black focus:outline-none"
              value={abonne.email}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-1 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;