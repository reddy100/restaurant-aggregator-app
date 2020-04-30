import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user_key': '1b687ddc42a5a412ab92c111a31710ce'
    }
});