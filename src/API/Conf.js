import axios from 'axios';

const client = () => {
    const listenURL = {
        baseURL: `http://localhost:8090/gateway-api/api`
    };

    let instance = axios.create(listenURL);

    return instance;
};

export default client();