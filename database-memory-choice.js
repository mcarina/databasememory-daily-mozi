import { randomUUID } from "node:crypto";

export class DataBaseMemorychoiceoption{
    #choiceoptions = new Map()

    create(choiceoption){
        const colorId = randomUUID();
        this.#choiceoptions.set(colorId, { id: colorId, ...choiceoption });
        return { id: commentId, ...choiceoption };
    }

    list(search){
        return Array.from(this.#choiceoptions.entries()).map((choiceArray)=>{
            const id = choiceArray[0]
            const data = choiceArray[1]

            return{
                id, ...data,
            }
        })
        .filter(choice =>{
            if (search){
                return choice.color.includes(search)
            }
            return true
        })
    }

} 