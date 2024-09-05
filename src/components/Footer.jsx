import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ajouterAbonne } from '../store/abonnesSlice';

const Footer = () => {
  const dispatch = useDispatch();
  const listeAbonnes = useSelector(state => state.abonnes.liste);

  // Utiliser useForm pour gérer les formulaires
  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();

  // Vérification de l'existence de l'email
  const verifierEmail = (email) => {
    return listeAbonnes.some((abonne) => abonne.email === email);
  };

  // Vérification de l'existence du nom
  const verifierNom = (nom) => {
    return listeAbonnes.some((abonne) => abonne.nom === nom);
  };

  // Fonction de soumission du formulaire
  const onSubmit = (data) => {
    const emailExiste = verifierEmail(data.email);
    const nomExiste = verifierNom(data.nom);

    if (emailExiste) {
      setError("email", { type: "manual", message: "L'email existe déjà" });
    } else if (nomExiste) {
      setError("nom", { type: "manual", message: "Le nom existe déjà" });
    } else {
      dispatch(ajouterAbonne(data));
      reset(); // Réinitialiser le formulaire après l'ajout
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800/90 backdrop-blur-lg text-white py-2 flex items-center justify-between px-4">
      <p className="text-sm">&copy; 2024 Yannick Blanchette</p>
      <div className="flex items-center space-x-4">
        <h2 className="text-lg">Enregistrez-vous à notre infolettre</h2>
        <form className="flex items-center space-x-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="nom" className="text-xs">Nom</label>
            <input
              id="nom"
              type="text"
              placeholder="Entrez le nom"
              className={`p-1 border ${errors.nom ? 'border-red-500' : 'border-gray-400'} rounded text-black focus:outline-none`}
              {...register("nom", { required: "Le nom est requis" })}
            />
            {errors.nom && <p className="text-red-500 text-xs">{errors.nom.message}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Entrez l'email"
              className={`p-1 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded text-black focus:outline-none`}
              {...register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format d'email invalide"
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
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