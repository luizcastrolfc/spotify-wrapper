import SpotifyWrapper from '../src/index'
describe('Album', () => {
  let spotify
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI',
      apiURL: 'https://api.spotify.com/v1'
    })
    global.fetch = jest.fn();
  })
  afterEach(() => {
    global.fetch.mockReset();
  })
  describe('smoke tests', () => {
    it('should have spotify.album.getAlbum method', () => {
      expect(spotify.album.getAlbum).toBeDefined()
    })

    it('should have spotify.album.getAlbumTracks method', () => {
      expect(spotify.album.getAlbumTracks).toBeDefined()
    })
  })

  describe('spotify.album.getAlbum', () => {
    it('should call fetch with the right url', () => {
      const albuns = spotify.album.getAlbum()
      expect(global.fetch.mock.calls.length).toBe(1)
    })
    it('should be called with the rigth url', () => {
      const albuns = spotify.album.getAlbum('6ymZBbRSmzAvoSGmwAFoxm')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/albums/6ymZBbRSmzAvoSGmwAFoxm', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    });
  })

  describe('spotify.album.getAlbums', () => {
    it('should call fetch with the right url', () => {
      const albuns = spotify.album.getAlbums()
      expect(global.fetch.mock.calls.length).toBe(1)
    })
    it('should be called with the rigth url', () => {
      const albuns = spotify.album.getAlbums(['6ymZBbRSmzAvoSGmwAFoxm', '6ymZBbRSmzAvoSGmwAFoxn'])
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/albums?ids=6ymZBbRSmzAvoSGmwAFoxm,6ymZBbRSmzAvoSGmwAFoxn', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    });
  })

  describe('spotify.album.getAlbumTracks', () => {
    it('should call fetch with the right url', () => {
      const albuns = spotify.album.getAlbumTracks()
      expect(global.fetch.mock.calls.length).toBe(1)
    })
    it('should be called with the rigth url', () => {
      const albuns = spotify.album.getAlbumTracks('6ymZBbRSmzAvoSGmwAFoxm')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/albums/6ymZBbRSmzAvoSGmwAFoxm/tracks', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    });
  })
})
