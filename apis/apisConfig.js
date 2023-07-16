import axios from 'axios';
// const user_token = localStorage.getItem(localStorage.getItem('t&tUsertoken'))

// backend based url
const api = axios.create({baseURL : `${process.env.baseBackendUrl}/api`});

api.interceptors.request.use((req) => {
    
        req.headers = {
            // 'Authorization': `Bearer ${user_token}`,
            'Content-Type':'multipart/form-data'
        }
    

    return req;
})

export default api;