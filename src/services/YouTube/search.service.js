require('dotenv').config()
const axios = require('axios').default;


const URL = process.env.URL_YOUTUBE + `search`
const KEY = process.env.KEY_API_YOUTUBE

export const search = (query) => {

   const response = axios.get(URL, {
      params: {
         part: "id, snippet",
         maxResults: 1,
         q: query,
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







