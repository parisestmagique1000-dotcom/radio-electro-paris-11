
# 🗼 Radio Electro Paris - Guide de Modification

Ce site est piloté par le fichier `content/site.json`. Vous pouvez modifier presque tout sans toucher au code complexe.

## 🛠 Comment modifier le site ?

### 1. Changer un texte ou une image globale
Ouvrez `content/site.json` et modifiez la section `"settings"` :
- `appName`: Nom du site.
- `slogan`: La phrase qui apparaît sous les titres.
- `bgImage`: URL de l'image de fond.

### 2. Ajouter/Supprimer une section sur l'accueil
Toutes les sections sont dans la liste `"sections"`.
- Pour **désactiver** une section : Changez `"enabled": true` par `"enabled": false`.
- Pour **changer l'ordre** : Modifiez le chiffre dans `"order"`.
- Pour **ajouter une photo** à la galerie : Ajoutez un bloc `{ "url": "...", "caption": "..." }` dans la liste `items` de la section de type `gallery`.

### 3. Types de sections disponibles
- `hero` : Affiche le badge et le titre principal.
- `schedule` : Affiche la grille des programmes.
- `grid` : Affiche une grille de cartes (DJs, Soirées, Clubs).
- `cta` : Un gros bloc d'appel à l'action avec un bouton.
- `gallery` : Une grille d'images simple.

## 🚀 Déploiement
Dès que vous modifiez `site.json` et que vous poussez sur Vercel, les changements sont appliqués instantanément (le cache est désactivé sur ce fichier).
