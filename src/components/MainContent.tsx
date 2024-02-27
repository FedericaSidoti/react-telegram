import { useState } from "react";
import { MainContentProps, Message } from "../types";
import { MessageBalloon } from "./MessageBalloon";

export function MainContent({ contact, onSendMessage } : MainContentProps) {
    const [newmessage, setNewmessage] = useState("");
    let messages : Message[] = contact.messages;

    function handleClickSend() : void {
        onSendMessage(newmessage);

        setNewmessage("");
        // setChat(chat)
    }

    const currentMessages = messages.map((message : Message, i : number) => {
        return (
            <div
                key={i}
                className={
                    message.status === "sent" ? "message sent" : "message"
                }
            >
                <MessageBalloon message={message}/>
            </div>
        );
    });

    return (
        <div className="main-content">
            <div className="current-contact">
                <img src={contact.avatar} />
                <p>{contact.name}</p>
            </div>
            <div className="messages">{currentMessages}</div>
            <div className="searchbar send-wrap">
                <input
                    type="text"
                    placeholder="Scrivi un messaggio"
                    value={newmessage}
                    onChange={(e) => setNewmessage(e.target.value)}
                />
                <button onClick={handleClickSend}>invia</button>
            </div>
        </div>
    );
}
