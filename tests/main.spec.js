import SpotifyWrapper from '../src/main'
describe('Main', () => {
  describe('Smoke Tests', () => {
    it('should exists the search method', () => {
      expect(SpotifyWrapper.search).toBeDefined();
    })

    it('should exists the searchAlbums method', () => {
      expect(SpotifyWrapper.searchAlbums).toBeDefined();
    })

    it('should exists the searchArtists method', () => {
      expect(SpotifyWrapper.searchArtists).toBeDefined();
    })

    it('should exists the searchTracks method', () => {
      expect(SpotifyWrapper.searchTracks).toBeDefined();
    })

    it('should exists the searchPlaylists method', () => {
      expect(SpotifyWrapper.searchPlaylists).toBeDefined();
    })
  })
})
