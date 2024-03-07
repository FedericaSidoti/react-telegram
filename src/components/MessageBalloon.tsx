import { MessageProps } from "../types";

export function MessageBalloon({message} : MessageProps){
    return(
        <p>
            {message.message}
            <span>{message.date}</span>
        </p>
    )
}