import { useState } from "react";
import { fakeData } from "../fakedata"; 

export function MainContent({chat, setChat}){
    const num= chat;

    const [newmessage, setNewmessage] = useState('');
    let messages = fakeData[chat].messages;

    const nextMessages = messages.slice();


    const currentMessages = nextMessages.map(message=>{
        return(
            <div className={message.status === 'sent'? 'message sent' : 'message'}>
                <p>{message.message}</p>
            </div>
        )
        
    })

    function send(){
        fakeData[chat].messages.push({
            date: '20/03/2020 16:35:00',
            message: newmessage,
            status: 'sent'
        })
        setNewmessage('')
        setChat(num)
    }

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
                    <input type="text" 
                    placeholder="Scrivi un messaggio"
                    value={newmessage}
                    onChange={e => setNewmessage(e.target.value)}
                    />
                </div>
                <button onClick={send}>invia</button>
            </div>
        </div>
    )
}