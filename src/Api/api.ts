import md5 from "crypto-js/md5";

const getToken = () => {
    const url = new URL(window.location.href);
    return url.searchParams.get("token");
}


const BASE_URL = `https://ws.audioscrobbler.com/2.0/`
const API_KEY = `77bf7ce54bf492251d0936826d710388`
const apiParams = `api_key=${API_KEY}&method=auth.getSession&token=${getToken()}`
const apiSignaature = md5(`api_key${API_KEY}methodauth.getSessiontoken${getToken()}f65ee28d62c9b89a7caa743b3051a5de`);


//All the apis will get called here
const Api = {
    loginWithSession(params = {}) {
        return fetch(
            `${BASE_URL}?${apiParams}&api_sig=${apiSignaature}&format=json`
        );
    },
    fetchTopArtist(params = {}) {
        return fetch(
            `${BASE_URL}?method=artist.gettopalbums&artist=cher&api_key=${API_KEY}&format=json`,
        );
    },
    fetchDetailViewAlbum(params = {artist: '', album: ''}) {
        return fetch(
            `${BASE_URL}?method=album.getinfo&artist=${params.artist}&&album=${params.album}&api_key=${API_KEY}&format=json`,
        );
    }
}

export default Api