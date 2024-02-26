import { useEffect, useState } from "react";
import { fakeData } from "../fakedata"; 

export function MainContent({chat, setChat}){
    const [chatmsg, setChatmsg] = useState(fakeData[chat].messages)
    const [newmessage, setNewmessage] = useState('');

    useEffect(() => {
        // Aggiorna lo stato di chatmsg ogni volta che il valore di chat cambia
        setChatmsg(fakeData[chat].messages);
      }, [chat]);


    function send(){
    
        const sentMessage = {
            date: '20/03/2020 16:35:00',
            message: newmessage,
            status: 'sent'
        }
        
        setChatmsg([...chatmsg, sentMessage]);

        setNewmessage('')
        setChat(chat)
    }

    const currentMessages = chatmsg.map(message=>{
        return(
            <div key={message.message} className={message.status === 'sent'? 'message sent' : 'message'}>
                <p>{message.message} </p>
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
                <div className="searchbar send-wrap">
                    <input type="text" 
                    placeholder="Scrivi un messaggio"
                    value={newmessage}
                    onChange={e => setNewmessage(e.target.value)}
                    />
                    <button onClick={send}>invia</button>
                </div>
            </div>
    )
}