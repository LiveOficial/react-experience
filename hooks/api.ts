import axios, { AxiosInstance } from 'axios'

export default function request(): AxiosInstance {
    return axios.create({
        baseURL: "http://127.0.0.1:8000/app"
    })
}