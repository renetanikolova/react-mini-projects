import axios from 'axios';

const KEY = 'AIzaSyBk-57GMF_m_0JZGGaqvMiNOQMOcntlZbE';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
