/* global fetch */
import { API_URL, HEADERS } from './config'

export const getAlbum = async (id) => {
  const resp = await fetch(`${API_URL}/albums/${id}`, HEADERS)
  return resp.json()
}
export const getAlbums = async (ids) => {
  const resp = await fetch(`${API_URL}/albums?ids=${ids}`, HEADERS)
  return resp.json()
}
export const getAlbumTracks = async (id) => {
  const resp = await fetch(`${API_URL}/albums/${id}/tracks`, HEADERS)
  return resp.json()
}
