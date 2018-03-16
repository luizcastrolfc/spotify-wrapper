import SpotifyWrapper from '../src/index'

describe('Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({})
    expect(spotify).toBeInstanceOf(SpotifyWrapper)
  })
  it('should receive apiURL as an option', () => {
    let spotify = new SpotifyWrapper({apiURL: 'url.topzera'})
    expect(spotify.apiURL).toBe('url.topzera')
  })

  it('should use the default apiURL if not provided', () => {
    let spotify = new SpotifyWrapper({})
    expect(spotify.apiURL).toBe('https://api.spotify.com/v1')
  })

  it('should receive token as an option', () => {
    let spotify = new SpotifyWrapper({token: 'tokentopfnashdfsdosihadfuihasdfuihasdfishf-9h2f94hf'})
    expect(spotify.token).toBe('tokentopfnashdfsdosihadfuihasdfuihasdfishf-9h2f94hf')
  })

  describe('request method', () => {
    beforeEach(() => {
      global.fetch = jest.fn()
    })

    afterEach(() => {
      global.fetch.mockReset();
    })

    it('should have request method', () => {
      let spotify = new SpotifyWrapper({})
      expect(spotify.request).toBeDefined()
    })

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({ token: 'tokentopzera' })
      spotify.request('url')
      expect(global.fetch.mock.calls.length).toBe(1)
    });
    it('should call fetch with the correct params ', () => {
      let spotify = new SpotifyWrapper({ apiURL: 'url.topzera', token: 'tokentopzera' })
      spotify.request('url')
      const HEADERS = {
        headers: {
          Authorization: `'Bearer tokentopzera'`
        }
      }
      expect(global.fetch).toBeCalledWith('url', HEADERS)
    });
  })
})
