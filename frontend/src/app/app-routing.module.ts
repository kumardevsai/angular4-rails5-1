import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }      from './components/main/main.component';
import { BlogComponent }      from './components/blog/blog.component';
import { HeroComponent }      from './components/hero/hero.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'heroes', component: HeroComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
