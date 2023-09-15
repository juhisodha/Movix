import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWE2MWVmZDgwZjRiNjkzMTY5OGU3NzY5YzZmYmU1ZCIsInN1YiI6IjY0ZjM1MzRmZTBjYTdmMDEwZGU0ZjU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9IvIw6VVt8oF8Rl_a3QSB_YFH3d_JmEWtq8u1ioYXPw";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}