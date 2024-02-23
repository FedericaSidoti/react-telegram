import { fakeData } from "../fakedata"; 

export function MainContent({chat}){

    const messages = fakeData[chat].messages

    const currentMessages = messages.map(message=>{
        return(
            <div className={message.status === 'sent'? 'message sent' : 'message'}>
                <p>{message.message}</p>
            </div>
        )
        
    })

    return(
        <div className="main-content">
            {currentMessages}
        </div>
    )
}