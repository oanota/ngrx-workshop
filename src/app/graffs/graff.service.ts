import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Graff } from './graff';
// import { BehaviorSubject } from 'rxjs';
// import { Graff } from './graff';

@Injectable({
  providedIn: 'root'
})
export class GraffService {

  // private selectedGraffSource = new BehaviorSubject<Graff | null>(null);
  // selectedProductChanges$ = this.selectedGraffSource.asObservable();

  graffs: Graff[];

  constructor(private fb: AngularFirestore) { }

  getGraffs() {
    console.log('Service runs');

    return this.fb.collection('graffs').snapshotChanges()
      .pipe(
        map(graffs => {
          const datos = [];
          graffs.forEach(graffiti => {
            const graffDoc = graffiti.payload.doc.data();
            datos.push({
              id_graff: graffDoc['id_graff'],
              author: graffDoc['author'],
              description: graffDoc['description'],
              graff_size: graffDoc['graff_size'],
              photo_url: graffDoc['photo_url'],
              title: graffDoc['title'],
              likes: 0
            });
          })
          return datos;
        }),
      );
  }

  // changeSelectedGraff(selectedGraff: Graff | null): void {
  //   this.selectedGraffSource.next(selectedGraff);
  // }

}
