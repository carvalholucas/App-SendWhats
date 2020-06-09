import axios from 'axios'
import { message } from 'antd'

const api = axios.create({
    baseURL: 'https://sendwhats.herokuapp.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use(
    config => {
        if (!config.headers.Authorization) {
            const token = localStorage.getItem('sendwhats_token')

            if (token) config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

api.interceptors.response.use(function (response) {
    return response
},
    function (error) {
        const status = error.response.status
        const data = error.response.data

        switch (status) {
            case 401:
                message.error(data.message)
                
                localStorage.clear()
                document.location.reload()
                break;

            default:
                break;
        }
        return Promise.reject(error);
    });

export default api