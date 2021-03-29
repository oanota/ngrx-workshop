import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraffGridComponent } from './graff-grid/graff-grid.component';
import { GraffShellComponent } from './graff-shell/graff-shell.component';

import { SharedModule } from '../shared/shared.module';
import { GraffDetailsComponent } from './graff-details/graff-details.component';

// Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GraffService } from './graff.service';

// NgRx
import { StoreModule } from '@ngrx/store';
import { graffReducer } from './state/graff.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GraffEffects } from './state/graff.effects';

const graffRoutes: Routes = [
  { path: '', component: GraffShellComponent }
];

@NgModule({
  declarations: [GraffGridComponent, GraffShellComponent, GraffDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(graffRoutes),
    // NgRx
    StoreModule.forFeature('graffs', graffReducer),
    EffectsModule.forFeature([GraffEffects]),
    
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    GraffService
  ]
  // exports: [
  //   GraffGridComponent
  // ]
})
export class GraffModule { }
