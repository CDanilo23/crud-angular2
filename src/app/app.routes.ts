import { Routes, RouterModule }  from '@angular/router';
import { PersonlistComponent } from './person/personlist.component';
import { PersondetailComponent } from './person/persondetail.component';
import { PersoneditComponent } from './person/personedit.component';
 
 
// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'people',
    component: PersonlistComponent
  },
  // map '/persons/:id' to person details component
  {
    path: 'person/:id',
    component: PersondetailComponent
  },
  {
    path: 'person/edit/:id',
    component: PersoneditComponent
  },
 
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  },
];
 
export const routing = RouterModule.forRoot(routes);