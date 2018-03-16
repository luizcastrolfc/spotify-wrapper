import SpotifyWrapper from '../src/index'
import { Promise } from 'core-js';

describe('Main', () => {
  let spotify;
  beforeEach(() => {
    spotify = new SpotifyWrapper({ apiURL:'https://api.spotify.com/v1', token: 'BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI' })
    global.fetch = jest.fn()
  })

  afterEach(() => {
    global.fetch.mockReset();
  })
  describe('Smoke Tests', () => {


    it('should exists the spotify.search.Albums method', () => {
      expect(spotify.search.Albums).toBeDefined()
    })

    it('should exists the spotify.search.Artists method', () => {
      expect(spotify.search.Artists).toBeDefined()
    })

    it('should exists the spotify.search.Tracks method', () => {
      expect(spotify.search.Tracks).toBeDefined()
    })

    it('should exists the spotify.search.Playlists method', () => {
      expect(spotify.search.Playlists).toBeDefined()
    })
  })

  describe('searchArtist', () => {
    it('should call fetch function', () => {
      spotify.search.Artists('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const artists = spotify.search.Artists('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=artist', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })

  describe('searchAlbum', () => {
    it('should call fetch function', () => {
      spotify.search.Albums('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const albums = spotify.search.Albums('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=album', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })

  describe('searchTrack', () => {
    it('should call fetch function', () => {
      spotify.search.Tracks('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const tracks = spotify.search.Tracks('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=track', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })

  describe('searchPlaylist', () => {
    it('should call fetch function', () => {
      spotify.search.Playlists('Pixies')
      expect(global.fetch.mock.calls.length).toBe(1)
    })

    it('should receive the correct url to fetch', () => {
      const playlists = spotify.search.Playlists('Pixies')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pixies&type=playlist', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    })
  })
})
