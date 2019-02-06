import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 68d1a8670b6cab385946af45d28e80aa29c21011727313d56a71ff32ef20e22e'
    }
});