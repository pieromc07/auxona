require('dotenv').config()
const axios = require('axios').default;

const URL = process.env.URL_DEEZER + `search`



export const searchAlbum = async (query) => {

    const url = URL + `/album`

    const response = axios.get(url, {
        params: {
            q: query
        }
    }).then((res) => {
        const { data } = res.data
        return data
    }).catch((err) => {
        console.error(err);
    })

    return response
}

export const searchArtist = async (query) => {

    const url = URL + `/artist`

    const response = axios.get(url, {
        params: {
            q: query
        }
    }).then((res) => {
        const { data } = res.data
        return data
    }).catch((err) => {
        console.error(err);
    })

    return response



}

export const searchPlaylist = (query) => {
    const url = URL + `/playlist`

    const response = axios.get(url, {
        params: {
            q: query
        }
    }).then((res) => {
        const { data } = res.data

        return data
    }).catch((err) => {
        console.error(err);
    })

    return response

}

export const searchTrack = (query) => {
    const url = URL + `/track`

    const response = axios.get(url, {
        params: {
            q: query
        }
    }).then((res) => {
        const { data } = res.data
        return data
    }).catch((err) => {
        console.error(err);
    })

    return response

}