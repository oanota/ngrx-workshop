import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Firestore
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // // firestore
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    // firestore
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ]
})
export class SharedModule { }
