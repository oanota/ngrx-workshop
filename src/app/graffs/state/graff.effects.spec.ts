import { TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";

// This import is IMPORTANT for jasmine
import { hot } from 'jasmine-marbles';

// These imports are Important for Jest
// import { NxModule, DataPersistence } from '@nrwl/angular';
// import { hot } from '@nrwl/angular/testing';

import { GraffService } from "../graff.service";
import { GraffEffects } from "./graff.effects";
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import * as GraffActions from "./graff.actions";

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

describe('GraffEffects', () => {
  let actions: Observable<any>;
  let effects: GraffEffects;
  let service: GraffService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
      ],
      providers: [
        GraffEffects,
        GraffService,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GraffEffects);
    service = TestBed.inject(GraffService);
  });

  describe('loadGraffs$', () => {
    it('should work', () => {
      // Arrange
      const payload = {
        graffs: [{
          id_graff:'abc',
          author: 'author',
          description: 'description',
          graff_size: 'graff_size',
          photo_url: 'photo_url',
          title: 'title',
          likes: 100
        }]
      }
      const action = GraffActions.loadGraffs()
      // SpyOn with Jest
      // jest.spyOn(service, 'createWorkOrder').mockReturnValue(of(workOrderId));

      // SpyOn with Jasmine
      spyOn(service, 'getGraffs').and.returnValue(of(payload.graffs))

      actions = hot('a', {a: action})

      const expected = hot('b', {
        b: GraffActions.loadGraffsSuccess(payload)
      })

      expect(effects.loadGraffs$).toBeObservable(expected)
    })
  })
})
