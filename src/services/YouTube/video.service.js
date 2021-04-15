require('dotenv').config()
const axios = require('axios').default;




const URL = process.env.URL_YOUTUBE + `videos`
const KEY = process.env.KEY_API_YOUTUBE


export const track = (id) => {

    const response = axios.get(URL, {
       params: {
          part: "id,contentDetails",
          id: id,
          key: KEY
       }
    }).then((res) => {
       const { data } = res
 
       return data
 
    }).catch((err) => {
       console.error(err);
    })
 
    return response
 
 }
 