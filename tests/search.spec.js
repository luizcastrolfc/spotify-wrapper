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
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=artist',{"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
      const album = SpotifyWrapper.search('White', 'album')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=White&type=album',{"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
      const artistsAndAlbuns = SpotifyWrapper.search('Pixies', ['artist', 'album'])
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=artist,album', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })

  describe('searchArtist', () => {
    it('should call fetch function', () => {
      SpotifyWrapper.searchArtists('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const artists = SpotifyWrapper.searchArtists('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=artist', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })

  describe('searchAlbum', () => {
    it('should call fetch function', () => {
      SpotifyWrapper.searchAlbums('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const albums = SpotifyWrapper.searchAlbums('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=album', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })

  describe('searchTrack', () => {
    it('should call fetch function', () => {
      SpotifyWrapper.searchTracks('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const tracks = SpotifyWrapper.searchTracks('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=track', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })

  describe('searchPlaylist', () => {
    it('should call fetch function', () => {
      SpotifyWrapper.searchPlaylists('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const playlists = SpotifyWrapper.searchPlaylists('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=playlist', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })
})
