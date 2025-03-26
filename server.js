import fastify from "fastify";
import { DataBaseMemory } from './database-memory.js';

const server = fastify()
const database = new DataBaseMemory()

server.post("/comment", (request, response)=> {
    const { titulo, descricao, duration } = request.body

    database.create({
        titulo,
        descricao,
        duration,
    })

    return response.status(201).send()
})  

server.get("/comment", (request)=> {
    const search = request.query.search
    console.log(search)

    const videos = database.list(search)
    return videos
})

server.put("/comment/:id", (request, response)=> {
    const videoId = request.params.id
    const { titulo, descricao, duration } = request.body

    database.update(videoId,{
        titulo,
        descricao,
        duration,
    })
    return response.status(200).send()
})

server.listen({
    port:3333
})