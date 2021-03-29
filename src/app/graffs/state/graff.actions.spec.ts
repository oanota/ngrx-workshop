import { loadGraffs, loadGraffsSuccess } from "./graff.actions"

describe('graff Actions', () => {
  describe('loadGraffs', () => {
    it('should create an action', () => {
      // Act
      const action = loadGraffs();

      // Assert
      expect(action).toEqual({
        type: '[Graff] Load'
      })
    })
  })

  describe('loadGraffsSuccess', () => {
    it('should create an action', () => {
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

      // Act
      const action = loadGraffsSuccess(payload);

      // Assert
      expect(action).toEqual({
        type: '[Graff] Load Success',
        ...payload
      })
    })
  })
})
