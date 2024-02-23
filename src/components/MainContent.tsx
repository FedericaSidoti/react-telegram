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
            <div className="current-contact">
                <img src={fakeData[chat].avatar} />
                <p>{fakeData[chat].name}</p>
            </div>
            <div className="messages">
                {currentMessages}
            </div>
            <div className="send-wrap">
                <div className="searchbar">
                    <input type="text" placeholder="Scrivi un messaggio"/>
                </div>
                
            </div>
        </div>
    )
}