import { request, response } from "express"
import { getDuration } from "../helpers/duration";
import { getIdTrackYoutube, durationVideo } from "../helpers/Play"


export const play = async (req = request, res = response) => {


    const { id, title } = req.query
    try {

        const idYouTube = await getIdTrackYoutube(title)
        const videoDuration = await durationVideo(idYouTube);
        const duration = getDuration(videoDuration)
        res.status(200).json({
            status: 200,
            message: 'success',
            data: {
                idDeezer: id,
                idYouTube: idYouTube,
                duration: duration,
                title: title
            }
        })

    } catch (error) {

        res.status(500).json({ status: 500, message: 'error on server' })

    }

}