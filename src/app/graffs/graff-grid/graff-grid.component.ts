import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Graff } from '../graff';
import { State } from '../state/graff.reducer';
import { getCurrentGraff, getGraffs, getShowGraffId } from '../state/graff.selectors';
import * as GraffActions from "../state/graff.actions";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-graff-grid',
  templateUrl: './graff-grid.component.html',
  styleUrls: ['./graff-grid.component.css']
})
export class GraffGridComponent implements OnInit {
  // selectedGraff: Graff;
  // displayGraffId: boolean;

  graffs$: Observable<Graff[]>;
  selectedGraff$: Observable<Graff>;
  displayGraffId$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  checkChanged(): void {
    this.store.dispatch(GraffActions.toggleGraffId());
  }

  ngOnInit(): void {
    this.graffs$ = this.store.select(getGraffs);

    this.store.dispatch(GraffActions.loadGraffs());

    this.selectedGraff$ = this.store.select(getCurrentGraff);

    this.displayGraffId$ = this.store.select(getShowGraffId);
  }

  graffSelected(graff: Graff): void {
    this.store.dispatch(GraffActions.setCurrentGraff({graff}));
    // this.graffService.changeSelectedGraff(graff);
    // console.log(graff)
  }

}
