import axios from 'axios';

export const binanceData = axios.create({
    baseURL: 'https://api2.binance.com/api/v3/ticker/24hr'
});