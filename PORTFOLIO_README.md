# Portfolio de Lucie - Graphiste & Designer

Un portfolio moderne et élégant créé avec React, Vite et Tailwind CSS.

## 🎨 Fonctionnalités

- Design moderne avec thème beige/blanc
- Animations fluides et interactives
- Section portfolio avec filtres par catégorie
- Responsive design
- Formulaire de contact
- Structure facilitée pour l'ajout de projets

## 🚀 Installation et lancement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build pour la production
npm run build
```

## 📁 Ajouter de nouvelles réalisations

### 1. Ajouter les images

Placez vos images de projets dans le dossier `public/projects/` :
```
public/
  projects/
    projet1-image.jpg
    projet2-image.jpg
    ...
```

### 2. Mettre à jour les données

Modifiez le fichier `src/data/projects.js` pour ajouter vos projets :

```javascript
export const projects = [
  {
    id: 1,
    title: "Nom du projet",
    category: "Branding", // ou "Web Design", "Print", "Illustration", etc.
    description: "Description du projet",
    image: "/projects/votre-image.jpg", // Chemin vers votre image
    tags: ["Logo", "Identité visuelle", "Branding"] // Tags du projet
  },
  // ... autres projets
];
```

### 3. Catégories disponibles

- **Branding** : Logos, identités visuelles
- **Web Design** : Sites web, UI/UX
- **Print** : Affiches, brochures, mise en page
- **Illustration** : Illustrations créatives
- **Packaging** : Design d'emballages
- **Motion** : Animations, motion design

Pour ajouter une nouvelle catégorie, modifiez aussi le tableau `categories` dans le même fichier.

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `src/index.css` avec des variables CSS :
- Couleurs crème : `--cream-50` à `--cream-300`
- Couleurs beige : `--beige-50` à `--beige-300`
- Couleurs marron chaud : `--warm-brown-100` à `--warm-brown-900`

### Informations personnelles

Modifiez les informations dans les composants :
- `src/components/Hero.jsx` : Nom et description principale
- `src/components/About.jsx` : Texte de présentation et compétences
- `src/components/Contact.jsx` : Informations de contact

## 📂 Structure du projet

```
src/
  components/
    Header.jsx      # Navigation principale
    Hero.jsx        # Section d'accueil
    About.jsx       # Section à propos
    Portfolio.jsx   # Galerie de projets
    Contact.jsx     # Formulaire de contact
    Footer.jsx      # Pied de page
  data/
    projects.js     # Données des projets
  App.jsx           # Composant principal
  index.css         # Styles globaux
```

## 🎯 Conseils pour les images

- **Format recommandé** : JPG ou PNG
- **Taille** : 800x600px minimum
- **Qualité** : Optimisées pour le web (compression équilibrée)
- **Nommage** : Utilisez des noms descriptifs (ex: `logo-entreprise-x.jpg`)

## 📱 Responsive

Le site est entièrement responsive et s'adapte à tous les écrans :
- Mobile : Design adapté avec navigation hamburger
- Tablette : Layout ajusté pour les écrans moyens
- Desktop : Pleine expérience avec toutes les animations

---

Créé avec ❤️ pour présenter le travail créatif de Lucie
