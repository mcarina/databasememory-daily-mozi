import fastify from "fastify";
import { DataBaseMemory } from './database-memory.js';

const server = fastify()
const database = new DataBaseMemory()
const port = process.env.PORT || 3332;

server.post("/comments", (request, response)=> {
    const { descricao } = request.body

    database.create({ descricao })

    return response.status(201).send()
})  

server.get("/comments", (request) => {
    const search = request.query.search
    const comments = database.list(search)
    return comments
})


server.put("/comments/:id", (request, response)=> {
    const commentId = request.params.id
    const { descricao } = request.body

    database.update(commentId,{ descricao })
    return response.status(200).send()
})

server.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando na porta ${port}`);
});