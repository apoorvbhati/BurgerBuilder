import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-project-a4a71-default-rtdb.firebaseio.com/'
});

export default instance;