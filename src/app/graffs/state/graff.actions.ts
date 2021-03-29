import { createAction, props } from "@ngrx/store";
import { Graff } from "../graff";

export const toggleGraffId = createAction(
  '[Graff] Toggle Graff Id'
);

export const setCurrentGraff = createAction(
  '[Graff] Set Current Graff',
  props<{ graff: Graff}>()
);

export const loadGraffs = createAction(
  '[Graff] Load'
);

export const loadGraffsSuccess = createAction(
  '[Graff] Load Success',
  props<{ graffs: Graff[]}>()
);

export const loadGraffsFailure = createAction(
  '[Graff] Load Failure',
  props<{ error: string}>()
);
