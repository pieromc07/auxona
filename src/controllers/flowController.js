import { request, response } from 'express'
import { flowRandom, flowUserById } from '../services/Deezer/flow.service'

export const flowUser = async (req = request, res = response) => {

    const { user } = req.params
    try {
        if (user) {
            const flowUser = await flowUserById(user)
            if (!flowUser) {
                res.status(404).json({
                    status: 200,
                    message: 'Not Found',
                    data: {}
                })
            }
            res.status(200).json({
                status: 200,
                message: 'success',
                data: flowUser
            })
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'error on server' })
    }

}


export const flow = async (req = request, res = response) => {
    try {
        const flow = await flowRandom()
        if (!flow) {
            res.status(404).json({
                status: 200,
                message: 'Not Found',
                data: {}
            })
        }
        res.status(200).json({
            status: 200,
            message: 'success',
            data: flow
        })
    } catch (error) {
        res.status(500).json({ status: 500, message: 'error on server' })
    }
}