import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Graff } from '../graff';
import { GraffService } from '../graff.service';

@Component({
  selector: 'app-graff-details',
  templateUrl: './graff-details.component.html',
  styleUrls: ['./graff-details.component.css']
})
export class GraffDetailsComponent implements OnInit {
  sub: Subscription;
  graff: Graff | null;

  constructor(private graffService: GraffService) { }

  ngOnInit(): void {
    // Watch for changes to the currently selected graff
    this.sub = this.graffService.selectedProductChanges$.subscribe(
      currentGraff => this.displayGraff(currentGraff)
    );
  }

  displayGraff(graff: Graff | null): void {
    this.graff = graff;
    console.log('Subject')
  }

}
