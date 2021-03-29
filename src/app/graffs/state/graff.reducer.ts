import { createReducer, on } from "@ngrx/store";
import { Graff } from "../graff";
import * as AppState from "../../state/app.state";
import * as GraffActions from "./graff.actions";

export const initialState: GraffState = {
  showGraffId: false,
  currentGraff: null,
  graffs: []
}

export interface State extends AppState.State {
  graffs: GraffState;
}

export interface GraffState {
  showGraffId: boolean;
  currentGraff: Graff;
  graffs: Graff[];
}

export const graffReducer = createReducer<GraffState>(
  initialState,
  on(GraffActions.toggleGraffId, (state): GraffState => {
    return {
      ...state,
      showGraffId: !state.showGraffId
    }
  }),
  on(GraffActions.setCurrentGraff, (state, action): GraffState => {
    return {
      ...state,
      currentGraff: action.graff
    };
  }),
  on(GraffActions.loadGraffsSuccess, (state, action): GraffState => {
    return {
      ...state,
      graffs: action.graffs
    }
  })
);


