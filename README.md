# Rick and Morty React App

Bienvenue dans le projet **Rick and Morty React App** ! Ce projet est une application web développée avec React, Vite, Tailwind CSS, et Redux. L'application utilise l'API de Rick and Morty pour afficher une liste de personnages et permettre aux utilisateurs de rechercher des personnages spécifiques et de visualiser des détails supplémentaires sur chacun d'eux. De plus, l'application permet de gérer les abonnés d'une infolettre en utilisant Redux.

## 🚀 Technologies Utilisées

- **React** : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Vite** : Un outil de construction de projet rapide et léger pour les applications React.
- **Tailwind CSS** : Un framework CSS utilitaire pour un développement web rapide et efficace.
- **Redux** : Une bibliothèque pour la gestion de l'état global de l'application.
- **API de Rick and Morty** : Une API publique pour accéder aux données des personnages de la série animée *Rick and Morty*.

## 📦 Installation

Pour exécuter ce projet en local, suivez ces étapes :

1. **Clonez le dépôt :**

   ```bash
   git clone https://github.com/votre-nom-utilisateur/rick-and-morty-react-app.git
   cd rick-and-morty-react-app
   ```

2. **Installez les dépendances :**

   ```bash
   npm install
   ```

3. **Lancez l'application :**

   ```bash
   npm run dev
   ```

   L'application sera accessible à l'adresse `http://localhost:3000` dans votre navigateur.

## 📝 Fonctionnalités

- **Affichage des Personnages** : Affiche une liste de tous les personnages de l'univers de Rick and Morty.
- **Recherche de Personnages** : Permet aux utilisateurs de rechercher des personnages par nom.
- **Détails des Personnages** : Affiche des informations détaillées sur chaque personnage lorsqu'ils sont cliqués.
- **Gestion des Abonnés** : Utilise Redux pour gérer les abonnés de l'infolettre et afficher leurs informations sur la page des abonnés.

## 📂 Structure du Projet

Voici un aperçu de la structure des fichiers principaux de l'application :

```
rick-and-morty-react-app/
│
├── public/
│   └── index.html        # Fichier HTML principal
│
├── src/
│   ├── components/       # Composants React
│   ├── routes/           # Routes du site web ( react-route-dom )
│   ├── store/            # Configuration de Redux
│   ├── App.jsx           # Composant principal de l'application
│   ├── main.jsx          # Point d'entrée de l'application
│   └── index.css         # Fichier CSS principal
│
├── .gitignore            # Fichiers et dossiers ignorés par Git
├── package.json          # Dépendances et scripts du projet
├── tailwind.config.js    # Configuration de Tailwind CSS
└── vite.config.js        # Configuration de Vite
```

## 📋 Dépendances

- **react** : ^18.2.0
- **react-dom** : ^18.2.0
- **react-redux** : ^8.0.5
- **redux** : ^4.2.0
- **@reduxjs/toolkit** : ^1.9.3
- **tailwindcss** : ^3.3.0
- **vite** : ^4.0.0

## ✨ Contribution

Les contributions sont les bienvenues ! Si vous avez des suggestions ou trouvez des bugs, n'hésitez pas à ouvrir une *issue* ou à soumettre une *pull request*.
