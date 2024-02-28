import { MainContentProps, Message } from "../types";
import { MessageBalloon } from "./MessageBalloon";
import { InputMessage } from "./InputMessage";

export function MainContent({ contact, onSendMessage }: MainContentProps) {
    let messages: Message[] = contact.messages;

    const currentMessages = messages.map((message: Message, i: number) => {
        return (
            <div
                key={i}
                className={
                    message.status === "sent" ? "message sent" : "message"
                }
            >
                <MessageBalloon message={message} />
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
            <InputMessage handleMessage={onSendMessage} />
        </div>
    );
}
