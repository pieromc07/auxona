import { request, response } from 'express'
import { getById } from '../services/Deezer/playlist.service'



export const findById = async(req = request, res = response) => {

    const { id } = req.params

    try {
        const data = await getById(id)

        if (!data) {
            res.status(404).json({ status: 404, message: 'Playlist not found ' })
        }
        res.status(200).json({
            status: 200,
            message: 'success',
            data: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: 'error on server', error: error })
    }

}