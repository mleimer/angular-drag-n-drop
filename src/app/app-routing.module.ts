import {BasicComponent} from './drag-n-drop/basic/basic.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdvancedComponent} from './drag-n-drop/advanced/advanced.component';
import {InfiniteListsComponent} from './drag-n-drop/infinite-lists/infinite-lists.component';

const appRoutes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
  }, {
    path: 'advanced',
    component: AdvancedComponent,
  }, {
    path: 'infinite-lists',
    component: InfiniteListsComponent,
  },
  {path: '', redirectTo: '/basic', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
