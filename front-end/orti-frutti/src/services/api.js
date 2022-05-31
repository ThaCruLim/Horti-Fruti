import axios from "axios"

const api = axios.create({
    baseUrl:'http://localhost:3010'
})

export default api;