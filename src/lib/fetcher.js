import axios from "axios";



export const fetcher = axios.create({
    baseURL: "https://yotqh-backend.taitaja.webkehitys.fi/",
    timeout: 20000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true, 
})

// fetcher.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response && error.response.status === 401) {
//             console.error("Unauthorized access - Redirecting to login");
//             if (typeof window !== "undefined") {
//                 window.location.href = "/login"; // Redirect till login ifall status är 401
//             }
//         }
//         return Promise.reject(error);
//     }
// );