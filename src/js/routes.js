
import HomePage from '../pages/home.svelte';
import ActivityPage from '../pages/activity.svelte';
import ContactPage from '../pages/contactForm.svelte';
import ProjectsPage from '../pages/projects.svelte';

import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/activity',
    component: ActivityPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '/projects',
    component: ProjectsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
