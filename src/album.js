/* global fetch */
import { API_URL } from './config'

export const getAlbum = async (id) => {
  const resp = await fetch(`${API_URL}/albums/${id}`)
  return resp.json()
}
export const getAlbums = async (ids) => {
  const resp = await fetch(`${API_URL}/albums?ids=${ids}`)
  return resp.json()
}
export const getAlbumTracks = async (id) => {
  const resp = await fetch(`${API_URL}/albums/${id}/tracks`)
  return resp.json()
}
