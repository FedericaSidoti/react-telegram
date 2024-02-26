import { useEffect, useState } from "react"; 

export function MainContent({chat, contact}){
    
    const [newmessage, setNewmessage] = useState('');
    let messages = contact.messages

    function send(){
    
        const sentMessage = {
            date: '20/03/2020 16:35:00',
            message: newmessage,
            status: 'sent'
        }
        
        messages=([...messages, sentMessage]);

        setNewmessage('')
        // setChat(chat)
    }

    const currentMessages = messages.map(message=>{
        return(
            <div key={message.message} className={message.status === 'sent'? 'message sent' : 'message'}>
                <p>{message.message} </p>
            </div>
        )
        
    })

    

    return(
        <div className="main-content">
            <div className="current-contact">
                <img src={contact.avatar} />
                <p>{contact.name}</p>
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