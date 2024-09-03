import axios from 'axios'
const local_api = 'http://127.0.0.1:8000/'
const production_api = ''

const token = localStorage.getItem('canva_token')

const api = axios.create({
    baseURL: local_api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ""
    },
    withCredentials: true
})

export default api