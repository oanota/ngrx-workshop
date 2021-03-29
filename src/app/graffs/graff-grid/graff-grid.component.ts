import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Graff } from '../graff';
import { GraffService } from '../graff.service';

@Component({
  selector: 'app-graff-grid',
  templateUrl: './graff-grid.component.html',
  styleUrls: ['./graff-grid.component.css']
})
export class GraffGridComponent implements OnInit {
  graffs: Graff[] = [];
  sub: Subscription;

  displayGraffId: boolean;

  constructor(private graffService: GraffService) { }

  ngOnInit(): void {
    console.log('on init');
    this.graffService.getGraffs().subscribe(
      (e) => { 
        // console.log(JSON.stringify(e));
        e.map((eee) => {
          const data = eee.payload.doc.data();
          // console.log((data));
          this.graffs.push({
            id_graff: data['id_graff'],
            author: data['author'],
            description: data['description'],
            graff_size: data['graff_size'],
            photo_url: data['photo_url'],
            title: data['title'],
            likes: 0
          } as Graff)
        })
        // this.graffs
      }
    );
  }

  checkChanged(): void {
    this.displayGraffId = !this.displayGraffId;
    console.log(this.displayGraffId)
  }

  graffSelected(graff: Graff): void {
    this.graffService.changeSelectedGraff(graff);
    console.log(graff)
  }

}
