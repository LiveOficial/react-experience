import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

const api = axios.create({
    baseURL: "http://172.16.57.93:8000/app",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(async (config: any) => {
    const token = await getItemAsync('token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default api