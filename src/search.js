function searcher (type, query) {
  return this.request(`${this.apiURL}/search?q=${query}&type=${type}`)
}

export default function search () {
  return {
    Albums: searcher.bind(this, 'album'),
    Artists: searcher.bind(this, 'artist'),
    Tracks: searcher.bind(this, 'track'),
    Playlists: searcher.bind(this, 'playlist')
  }
}
