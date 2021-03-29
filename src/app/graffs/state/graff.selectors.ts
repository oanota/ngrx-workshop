import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GraffState } from "./graff.reducer";

const getGraffFeaturedState = createFeatureSelector<GraffState>('graffs');

export const getShowGraffId = createSelector(
  getGraffFeaturedState,
  state => state.showGraffId
);

export const getCurrentGraff = createSelector(
  getGraffFeaturedState,
  state => state.currentGraff
);

export const getGraffs = createSelector(
  getGraffFeaturedState,
  state => state.graffs
);
