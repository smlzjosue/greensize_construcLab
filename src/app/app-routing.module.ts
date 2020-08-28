import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'chapters',
    loadChildren: () => import('./pages/chapters/chapters.module').then( m => m.ChaptersPageModule)
  },
  {
    path: 'clues',
    loadChildren: () => import('./pages/clues/clues.module').then( m => m.CluesPageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./pages/question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'play-again',
    loadChildren: () => import('./pages/play-again/play-again.module').then( m => m.PlayAgainPageModule)
  },
  {
    path: 'complement',
    loadChildren: () => import('./pages/complement/complement.module').then( m => m.ComplementPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
