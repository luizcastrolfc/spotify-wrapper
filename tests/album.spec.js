import { getAlbum, getAlbumTracks, getAlbums } from '../src/album'
describe('Album', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  })
  afterEach(() => {
    global.fetch.mockReset();
  })
  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).toBeDefined()
    })

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).toBeDefined()
    })
  })

  describe('getAlbum', () => {
    it('should call fetch with the right url', () => {
      const albuns = getAlbum()
      expect(global.fetch.mock.calls.length).toBe(1)
    })
    it('should be called with the rigth url', () => {
      const albuns = getAlbum('6ymZBbRSmzAvoSGmwAFoxm')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/albums/6ymZBbRSmzAvoSGmwAFoxm', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    });
  })

  describe('getAlbums', () => {
    it('should call fetch with the right url', () => {
      const albuns = getAlbums()
      expect(global.fetch.mock.calls.length).toBe(1)
    })
    it('should be called with the rigth url', () => {
      const albuns = getAlbums(['6ymZBbRSmzAvoSGmwAFoxm', '6ymZBbRSmzAvoSGmwAFoxn'])
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/albums?ids=6ymZBbRSmzAvoSGmwAFoxm,6ymZBbRSmzAvoSGmwAFoxn', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    });
  })

  describe('getAlbumTracks', () => {
    it('should call fetch with the right url', () => {
      const albuns = getAlbumTracks()
      expect(global.fetch.mock.calls.length).toBe(1)
    })
    it('should be called with the rigth url', () => {
      const albuns = getAlbumTracks('6ymZBbRSmzAvoSGmwAFoxm')
      expect(global.fetch).toBeCalledWith('https://api.spotify.com/v1/albums/6ymZBbRSmzAvoSGmwAFoxm/tracks', {"headers": {"Authorization": "'Bearer BQBmSJ-_OC_RmpX8ta1Fc0-5Hxq5V1MhMHiD8YIVpo_UOTq680mPs3RJdDga0QmlyvDK0y-zW9NlVAC9p-0IKJpa0QJok77CNln3fJsZr7QsXozo-SJqOg5zr25GTw-uk9TNk5bKJXXI'"}})
    });
  })
})
