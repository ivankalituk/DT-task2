import axios from "axios";

const serverUrl = process.env.REACT_APP_API_URL


export async function getAllCountries() {
    try {
        const res = await axios.get(serverUrl + 'country');
        console.log(res);
        return res.data;
    } catch (error) {
        console.error("ERROR WHILE GETTING DATA " + error);
    }
}

export async function getCountryInfo(code: string) {
    try {
        const res = await axios.get(serverUrl + `countiesFullInfo/${code}`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error("ERROR WHILE GETTING DATA " + error);
    }
}