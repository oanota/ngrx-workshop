import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ShellComponent } from './home/shell/shell.component';

const routes: Routes = [
  { 
    path: '', 
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'graffs',
        loadChildren: () => 
          import('./graffs/graff.module').then(m => m.GraffModule)
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
