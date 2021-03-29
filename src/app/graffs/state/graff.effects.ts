import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GraffService } from "../graff.service";
import * as GraffActions from "./graff.actions";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class GraffEffects {
  constructor(private actions$: Actions, private graffService: GraffService) {}

  loadGraffs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GraffActions.loadGraffs),
      mergeMap(() => this.graffService.getGraffs().pipe(
        map(graffs => GraffActions.loadGraffsSuccess({ graffs: graffs })),
        catchError(error => of(GraffActions.loadGraffsFailure({ error })))
      ))
    )
  });
}
