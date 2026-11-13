import { createRouter, createWebHashHistory } from 'vue-router';
import CataloguePage from '@/pages/CataloguePage.vue';
import MetiersPage from '@/pages/MetiersPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import SuiviPage from '@/pages/SuiviPage.vue';

// Historique « hash » (#/...) : toutes les routes sont servies par index.html,
// aucune règle de réécriture n'est nécessaire côté serveur web.
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: AboutPage },
    { path: '/rechercher', component: CataloguePage },
    { path: '/metiers', component: MetiersPage },
    { path: '/suivi', component: SuiviPage },
    // Anciennes URLs des formulaires de suivi (#/suivi/operation/...) et URLs inconnues.
    { path: '/suivi/:rest(.*)', redirect: '/suivi' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});
