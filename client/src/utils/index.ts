import { surpriseMePrompts } from "../constants/indes";


export function getRandomPrompt(prompt:string){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt ){
        return getRandomPrompt(randomPrompt);
    }

    return randomPrompt;
}