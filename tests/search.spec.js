import SpotifyWrapper from '../src/search'
import { Promise } from 'core-js';

describe('Main', () => {

  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    global.fetch.mockReset();
  })
  describe('Smoke Tests', () => {
    it('should exists the search method', () => {
      expect(SpotifyWrapper.search).toBeDefined()
    })

    it('should exists the searchAlbums method', () => {
      expect(SpotifyWrapper.searchAlbums).toBeDefined()
    })

    it('should exists the searchArtists method', () => {
      expect(SpotifyWrapper.searchArtists).toBeDefined()
    })

    it('should exists the searchTracks method', () => {
      expect(SpotifyWrapper.searchTracks).toBeDefined()
    })

    it('should exists the searchPlaylists method', () => {
      expect(SpotifyWrapper.searchPlaylists).toBeDefined()
    })
  })

  describe('generic search', () => {

    it('should call fetch function', () => {
      SpotifyWrapper.search()
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const artists = SpotifyWrapper.search('Pixies', 'artist')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=artist')
      const album = SpotifyWrapper.search('White', 'album')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=White&type=album')
      const artistsAndAlbuns = SpotifyWrapper.search('Pixies', ['artist', 'album'])
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=artist,album')
    })
  })

  describe('searchArtist', () => {
    it('should call fetch function', () => {
      SpotifyWrapper.searchArtists('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const artists = SpotifyWrapper.searchArtists('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=artist')
    })
  })

  describe('searchAlbum', () => {
    it('should call fetch function', () => {
      SpotifyWrapper.searchAlbums('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const albums = SpotifyWrapper.searchAlbums('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=album')
    })
  })

  describe('searchTrack', () => {
    it('should call fetch function', () => {
      SpotifyWrapper.searchTracks('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const tracks = SpotifyWrapper.searchTracks('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=track')
    })
  })

  describe('searchPlaylist', () => {
    it('should call fetch function', () => {
      SpotifyWrapper.searchPlaylists('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const playlists = SpotifyWrapper.searchPlaylists('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=playlist')
    })
  })
})
