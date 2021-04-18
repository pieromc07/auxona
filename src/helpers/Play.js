import { searchById } from "../services/Deezer/track.service"
import { search } from "../services/YouTube/search.service"
import { track } from "../services/YouTube/video.service"
export const mappingPlay = async (id) => {

    const data = await searchById(id)
    if (data) {
        return {
            "id": data.id,
            "title": data.title,
            "title_short": data.title_short
        }
    }
}



export const getIdTrackYoutube = async (query) => {

    const data = await search(query)
    const { items } = data
    let idYouTube;
    const response = items.map(item => {
        idYouTube = item.id.videoId
        return { "idYouTube": item.id.videoId }
    })
    return idYouTube
}

export const durationVideo = async (id) => {

    const data = await track(id)
    const { items } = data
    let duration;
    const response = items.map(item => {
        duration = item.contentDetails.duration
        return { "duration": duration }
    })
    return duration
}


