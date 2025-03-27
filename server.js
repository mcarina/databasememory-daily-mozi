import fastify from "fastify";
import { DataBaseMemory } from './database-memory.js';

const server = fastify()
const database = new DataBaseMemory()
const port = process.env.PORT || 3332;

server.post("/comments", (request, response)=> {
    const { descricao } = request.body

    const newComment = database.create({ descricao });

    return response.status(201).send(newComment);
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

// =============== estado escolhido pelo usuário =======================
server.post("/choice-option", (request, response) => {
    const { color, favorite } = request.body;
    const choiceOption = database.create({ color, favorite });
    return response.status(201).send(choiceOption);
})

server.get("/choice", (request)=>{
    const search = request.query.search;
    const choices = database.list(search);
    return choices;
})

server.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando na porta ${port}`);
});