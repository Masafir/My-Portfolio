import Home from 'src/components/Home';
import Work from 'src/components/Work';
import About from 'src/components/About';

export default {
  '/': {
    title: 'Portfolio d\'un développeur',
    subtitle: 'Jeune développeur Full Stack',
    nav: 'Accueil',
    component: Home,
  },
  '/work': {
    title: 'Mes projets, mes passions',
    subtitle: "Ma vie de poulpe, on jette l'e- ancre ?",
    nav: 'Pro',
    component: Work,
  },
  '/about': {
    title: 'Qui suis-je ?',
    subtitle: "Tu m'accuses sans pieuvres là ?!",
    nav: 'A propos',
    component: About,
  },
};
