require('dotenv').config()
const axios = require('axios').default;

const URL = process.env.URL_DEEZER + `track`


export const searchById = (id) => {
    const url = URL + `/${id}`

    const response = axios.get(url).then((res) => {

        const { data } = res
        return data

    }).catch((err) => {
        console.error(err);
    })

    return response
}


