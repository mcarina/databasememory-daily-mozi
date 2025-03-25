import fastify from "fastify";
import { DataBaseMemory } from './database-memory.js';

const server = fastify()
const database = new DataBaseMemory()

server.post("/videos", (request, response)=> {
    const { titulo, descricao, duration } = request.body

    database.create({
        titulo,
        descricao,
        duration,
    })

    return response.status(201).send()
})  

server.get("/videos", (request)=> {
    const search = request.query.search
    console.log(search)

    const videos = database.list(search)
    return videos
})

server.put("/videos/:id", (request, response)=> {
    const videoId = request.params.id
    const { titulo, descricao, duration } = request.body

    database.update(videoId,{
        titulo,
        descricao,
        duration,
    })
    return response.status(200).send()
})

server.delete("/videos/:id", (request, response)=> {
    const videoId = request.params.id
    database.delete(videoId)
    return response.status(204).send()
})

server.listen({
    port:3333
})