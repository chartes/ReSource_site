// Une couleur par métadonnée, partagée entre les filtres de recherche et les badges
// des collections / ressources. Les classes sont écrites en entier pour que Tailwind les détecte.
// Le fond des filtres reprend la teinte du badge en plus clair (opacité réduite + flou d'arrière-plan).
// Les teintes froides, plus pâles que l'ambre, ont besoin d'une opacité plus forte pour rester visibles.
export const FACET_COLORS = {
  category: { filter: 'bg-cyan-100/90 backdrop-blur-sm border-black/20 text-cyan-900', badge: 'bg-cyan-100 text-cyan-800' },
  discipline: { filter: 'bg-indigo-100/80 backdrop-blur-sm border-black/20 text-indigo-900', badge: 'bg-indigo-100 text-indigo-800' },
  expertise: { filter: 'bg-amber-100/50 backdrop-blur-sm border-black/20 text-amber-900', badge: 'bg-amber-100 text-amber-800' },
  format: { filter: 'bg-sky-100/90 backdrop-blur-sm border-black/20 text-sky-900', badge: 'bg-sky-100 text-sky-800' },
};
