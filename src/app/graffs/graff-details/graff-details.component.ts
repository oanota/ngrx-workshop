import { Component, OnInit } from '@angular/core';

import { Graff } from '../graff';
import { GraffService } from '../graff.service';

// NgRx
import { Store } from '@ngrx/store';
import { State } from '../state/graff.reducer';
import { getCurrentGraff, getShowGraffId } from '../state/graff.selectors';
import * as GraffActions from "../state/graff.actions";

@Component({
  selector: 'app-graff-details',
  templateUrl: './graff-details.component.html',
  styleUrls: ['./graff-details.component.css']
})
export class GraffDetailsComponent implements OnInit {
  graff: Graff | null;

  constructor(private store: Store<State>, private graffService: GraffService) { }

  ngOnInit(): void {
    // Watch for changes to the currently selected graff
    // TODO: Unsubscribe
    this.store.select(getCurrentGraff).subscribe(
      currentGraff => this.displayGraff(currentGraff)
    );
    
    // this.sub = this.graffService.selectedProductChanges$.subscribe(
    //   currentGraff => this.displayGraff(currentGraff)
    // );
  }

  displayGraff(graff: Graff | null): void {
    this.graff = graff;
    // console.log('Subject')
  }

}
