import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7dc069b8b233468a0f6b3ab3354efb09425051905ffadfdd8fe3dd66f0200d0c'
    }
});