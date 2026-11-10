# Conservatoire des gestes et du savoir-faire des métiers d'art

Catalogue des données du projet **Re-Source** (France 2030) : métadonnées et liens de republication [Nakala](https://nakala.fr/) des captations de gestes et ressources pédagogiques des métiers d'art, avec recherche plein texte et filtrage par catégorie, discipline, niveau d'expertise et public.

Site statique (SPA Vue) : les données sont lues depuis `public/data/catalogue.json`, la recherche et les filtres s'exécutent dans le navigateur.

## Développement

**Prérequis :** Node.js

```bash
npm install      # installer les dépendances
npm run dev      # serveur de dev (http://localhost:3000)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build de production
```

## Stack

- [Vue 3](https://vuejs.org/) + [vue-router](https://router.vuejs.org/) (navigation Recherche / Métiers / À propos / Suivi)
- [Tailwind CSS 4](https://tailwindcss.com/) (styles, compilé via le plugin Vite)
- [Vite 6](https://vite.dev/) (build et serveur de dev)

## Onglet Suivi

L'onglet **Suivi** (`#/suivi`) affiche uniquement le rapport Power BI du projet, intégré par son lien public
« Publier sur le web » (constante `POWERBI_URL` dans `src/pages/SuiviPage.vue`). La saisie des données se fait
directement dans Power BI / le fichier Excel de suivi, hors du site.

## Déploiement (nginx)

`npm run build` produit un site entièrement statique dans `dist/` : aucun serveur applicatif, aucune API.
Le routeur utilise des URLs en `#/...`, donc toutes les pages sont servies par `index.html` sans règle de réécriture.
Le site est servi à la racine de `https://ressources.chart.psl.eu/` : les chemins `/data`, `/Logos` et `/banner` sont absolus par rapport à ce domaine.

```nginx
server {
    listen 80;
    server_name ressources.chart.psl.eu;
    root /var/www/ressources.chart.psl.eu/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Fichiers de build versionnés par Vite : cache long
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Catalogue : toujours revalider pour voir les mises à jour
    location = /data/catalogue.json {
        add_header Cache-Control "no-cache";
    }
}
```

## Mettre à jour le catalogue

Remplacer `public/data/catalogue.json` puis republier le site (`npm run build`).

## Organisation du code (`src/`)

- `main.js`, `App.vue`, `router.js` : point d'entrée, mise en page (navigation, bandeau, pied de page) et routes
- `store.js` : état partagé (catalogue chargé, filtres actifs)
- `services/dataService.js` : normalisation du JSON, URLs Nakala/IIIF, export CSV de gouvernance
- `data/` : membres du conservatoire et métiers étudiés
- `pages/` et `components/` : pages Recherche / Métiers / À propos / Suivi et cartes collection / ressource
