import axios from 'axios'

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const api = {
  async getAlbums() {
    let response = await http.get('/albums')
    return response.data
  },
  async getAlbum(id) {
    let response =  await http.get(`/albums/${id}`)
    return response.data
  },
  async getAlbumPhotos(id) {
    let response = await http.get(`/albums/${id}/photos`)
    return response.data
  },
  async getPhoto(id) {
    let response = await http.get(`/photos/${id}`)
    return response.data
  }
}

export default api