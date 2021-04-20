import { request, response } from "express"
import { getDuration } from "../helpers/duration";
import { getIdTrackYoutube, durationVideo } from "../helpers/Play"
import { create, findByIdDeezer } from "../repository/track.repository";

export const play = async (req = request, res = response) => {


    const { id, title } = req.query
    try {

        const track = await findByIdDeezer(id);

        if (track) {
            res.status(200).json({
                status: 200,
                message: 'success',
                data: track
            })
        } else {
            const idYouTube = await getIdTrackYoutube(title)
            if (idYouTube) {
                const videoDuration = await durationVideo(idYouTube);
                const duration = getDuration(videoDuration)
                const createTrack = await create(id, idYouTube, title, duration)
                res.status(200).json({
                    status: 200,
                    message: 'success',
                    data: createTrack
                })
            } else {
                res.status(404).json({
                    status: 404,
                    message: 'not found',
                    data: {}
                })
            }
        }
    } catch (error) {

        res.status(500).json({ status: 500, message: 'error on server' })

    }

}