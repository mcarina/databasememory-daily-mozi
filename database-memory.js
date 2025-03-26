import { randomUUID } from "node:crypto"

export class DataBaseMemory{
    #comment = new Map()

    list(search){
        return Array.from(this.#comment.entries()).map((videoArray)=>{
            const id = videoArray[0]
            const data = videoArray[1]

            return{
                id, ...data,
            }
        })
        .filter(video =>{
            if (search){
                return video.titulo.includes(search)
            }
            return true
        })
    }

    create(video){
        const videoId = randomUUID();

        this.#comment.set(videoId, video)
    }

    update(id, video){
        this.#comment.set(id, video)
    }

} 