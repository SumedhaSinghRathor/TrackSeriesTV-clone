import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Myshows } from './pages/myshows/myshows';
import { Calendar } from './pages/calendar/calendar';
import { Explore } from './pages/explore/explore';
import { Search } from './pages/search/search';
import { ShowPage } from './pages/show-page/show-page';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'myshows', component: Myshows },
  { path: 'calendar', component: Calendar },
  { path: 'explore', component: Explore },
  { path: 'search', component: Search },
  { path: 'shows/:id/:slug', component: ShowPage },
];
