/* global fetch */
import search from './search';
import album from './album';
import { API_URL } from './config';
/* export {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
  getAlbum,
  getAlbums,
  getAlbumTracks
} */

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }
  async request(url) {
    const HEADERS = {
      headers: {
        Authorization: `'Bearer ${this.token}'`
      }
    };
    const data = await fetch(url, HEADERS);
    return data.json().catch();
  }
}