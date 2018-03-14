/* global fetch */
import { API_URL } from './config'

export const search = async (query, type) => {
  const resp = await fetch(`${API_URL}/search?q=${query}&type=${type}`)
  return resp.json()
}
export const searchAlbums = async query => search(query, 'album')

export const searchArtists = async query => search(query, 'artist')

export const searchTracks = async query => search(query, 'track')

export const searchPlaylists = async query => search(query, 'playlist')

export default {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
}
