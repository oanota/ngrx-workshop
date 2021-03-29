import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Graff } from './graff';

@Injectable({
  providedIn: 'root'
})
export class GraffService {

  private selectedGraffSource = new BehaviorSubject<Graff | null>(null);
  selectedProductChanges$ = this.selectedGraffSource.asObservable();

  constructor(private fb: AngularFirestore) { }

  getGraffs() {
    console.log('Service run');
    return this.fb.collection('graffs').snapshotChanges();
  }

  changeSelectedGraff(selectedGraff: Graff | null): void {
    this.selectedGraffSource.next(selectedGraff);
  }

}
