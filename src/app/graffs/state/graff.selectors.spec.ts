import { initialState } from "./graff.reducer"
import * as GraffSelectors from "./graff.selectors"

describe('Graff Selectors', () => {
  const mockState = {
    ...initialState,
    currentGraff: {
      id_graff:'abc',
      author: 'author',
      description: 'description',
      graff_size: 'graff_size',
      photo_url: 'photo_url',
      title: 'title',
      likes: 100
    },
    showGraffId: true
  }

  const mockGraffState = {
    graffs: mockState
  }

  describe('getShowGraffId selector', () => {
    it('should return getShowGraffId in current state', () => {
      // Arrange
      const prevState = mockGraffState

      // Act
      const state = GraffSelectors.getShowGraffId(prevState)

      // Assert
      expect(state).toBe(mockState.showGraffId)
    })
  })
})