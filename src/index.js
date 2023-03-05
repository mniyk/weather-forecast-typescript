"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_json_1 = __importDefault(require("./config.json"));
// type WeatherForecast = {
//     coord: {lon: number, lat: number},
//     weather: {id: number, main: string, description: string, icon: string}[],
//     base: string,
//     main: {
//         temp: number,
//         feels_like: number,
//         temp_min: number,
//         temp_max: number,
//         pressure: number,
//         humidity: number,
//         sea_level: number,
//         grnd_level: number
//     },
//     visibility: number,
//     wind: {speed: number, deg: number, gust: number},
//     clouds: {all: number},
//     dt: number,
//     sys: {
//         type: number,
//         id: number,
//         country: string,
//         sunrise: number,
//         sunset: number
//     },
//     timezone: number,
//     id: number,
//     name: string,
//     cod: number
// }
const api_url = 'https://api.openweathermap.org/data/2.5/weather';
const params = {
    lang: config_json_1.default['LANG'], q: config_json_1.default['Q'], appId: config_json_1.default['API_KEY']
};
const query = new URLSearchParams(params);
const access_url = `${api_url}?${query}`;
(0, node_fetch_1.default)(access_url).then(response => response.json()).then(data => console.log(data));
