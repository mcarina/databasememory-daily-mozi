import { randomUUID } from "node:crypto"

export class DataBaseMemory{
    #comments = new Map()

    list(search) {
        return Array.from(this.#comments.entries()).map(([id, data]) => ({
            id, ...data
        })).filter(comment => {
            if (search) {
                return comment.descricao && comment.descricao.includes(search)
            }
            return true
        })
    }
    

    create(comment){
        const commentId = randomUUID();
        this.#comments.set(commentId, { id: commentId, ...comment });
        return { id: commentId, ...comment };
    }

    update(id, comment){
        this.#comments.set(id, comment)
    }

} 