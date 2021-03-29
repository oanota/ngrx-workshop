import { graffReducer, initialState } from "./graff.reducer";
import * as GraffActions from "./graff.actions";

describe('Graff Reducer', () => {
  it('should have state equal to initialState', () => {
    // Arrange
    const expected = { ...initialState };
    const action = { type: 'foo' } as any;

    // Act
    const state = graffReducer(undefined, action);

    // Assert
    expect(state).toEqual(expected);
  })

  describe('loadGraffsSuccess Action', () => {
    it('should set graffs to a given graffs', () => {
      // Arrange
      const payload = {
        graffs: []
      }
      const prevState = { ...initialState, prop1: 'prueba' };
      const action = GraffActions.loadGraffsSuccess(payload)
  
      // Act
      const state = graffReducer(prevState, action);
  
      // Assert
      expect(state.graffs).toEqual(payload.graffs);
    })
  })
})