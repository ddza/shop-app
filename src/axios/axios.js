import axios from 'axios';

export const axiosInstance = axios.create({
    
    timeout: 1000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest', 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
    }, 
    withCredentials: true,
  });

//axios.defaults.baseURL = "http://127.0.0.1:8000";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post["Accept"] = 'application/json';
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// axios.defaults.withCredentials = true;


