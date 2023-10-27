import axios from "axios";
import "../App.css"

const API_URL = "https://api.artic.edu/api/v1/artworks/search?q=cats";

export const fetchApiData = () => {
    return axios.get(API_URL).then((response) => response.data.data);
};
