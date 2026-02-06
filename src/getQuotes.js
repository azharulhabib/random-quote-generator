import axios from "axios";

const baseUrl = 'https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom';

const config = {
headers: { "X-Api-Key" : import.meta.env.VITE_API_KEY },
}

export default async () => {
    const url = `${baseUrl}&_t=${Date.now()}`;
    const {data} = await axios.get(url, config);
    console.log("API Response:", data);
    return data;
}