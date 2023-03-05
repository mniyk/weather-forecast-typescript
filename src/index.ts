import fetch from 'node-fetch'

import config from './config.json'


const api_url = 'https://api.openweathermap.org/data/2.5/weather'

const params: {lang: string, q: string, appId: string} = {
    lang: config['LANG'], q: config['Q'], appId: config['API_KEY']}

const query = new URLSearchParams(params);
const access_url = `${api_url}?${query}`;

fetch(access_url).then(
    response => response.json()).then(
        data => console.log(data))
