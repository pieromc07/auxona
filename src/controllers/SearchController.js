import { request, response } from "express"
import { searchAlbum, searchArtist, searchPlaylist, searchTrack } from "../services/Deezer/search.service";



export const findAll = async (req = request, res = response) => {

    const { query } = req.query
    try {

        const dataAlbums = await searchAlbum(query)
        const dataTracks = await searchTrack(query)
        const dataPlaylists = await searchPlaylist(query)
        const dataArtists = await searchArtist(query)

        if (!dataTracks) {

            res.status(404).json({ status: 404, message: 'search not found ' })
        }
        res.status(200).json({
            status: 200,
            message: 'success',
            data: {
                traks: dataTracks,
                playlists: dataPlaylists,
                albums: dataAlbums,
                artists: dataArtists
            }
        })

    } catch (error) {
        res.status(500).json({ status: 500, message: 'error on server' })
    }
}

export const findByAlbum = async (req = resquest, res = response) => {
    const { query } = req.query

    try {
        const data = await searchAlbum(query)

        if (!data) {
            res.status(404).json({ status: 404, message: 'Album not found ' })
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

export const findByArtist = async (req = resquest, res = response) => {

    const { query } = req.query

    try {
        const data = await searchArtist(query)

        if (!data) {
            res.status(404).json({ status: 404, message: 'Artist not found ' })
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


export const findByPlaylist = async (req = resquest, res = response) => {

    const { query } = req.query

    try {
        const data = await searchPlaylist(query)

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


export const findByTrack = async (req = resquest, res = response) => {

    const { query } = req.query

    try {
        const data = await searchTrack(query)

        if (!data) {
            res.status(404).json({ status: 404, message: 'Track not found ' })
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