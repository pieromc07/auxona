import Track from "../models/track"


export const findByIdDeezer = async (idDeezer) => {

    try {

        const track = await Track.findOne({ deezer: idDeezer });

        if (track) {
            return track
        }
        return null

    } catch (error) {
        console.log(error);
        return null
    }

}


export const create = async(deezer, youtube, title, duration) => {

    try {
        const track = new Track({
            deezer, youtube, title, duration
        })
        const createTrack = await track.save()
        return createTrack
    } catch (error) {
        console.log(error);
    }

}

