require('dotenv').config()
const axios = require('axios').default;

const URL = process.env.URL_DEEZER + `user`


export const flowUserById = (id) => {
    const url = URL + `/${id}/flow`
    const response = axios.get(url).then((res) => {
        const { data } = res
        return data
    }).catch((err) => {
        console.log(err);
    })
    return response
}


export const flowRandom = () => {
    const url = URL + `/4275438742/flow`
    const response = axios.get(url).then((res) => {
        const { data } = res
        return data
    }).catch((err) => {
        console.log(err);
    })
    return response
}