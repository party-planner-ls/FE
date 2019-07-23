import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `https://party-planner-ls.herokuapp.com/api/auth`,
        headers: {
            Authorization: token
        }
    })
}