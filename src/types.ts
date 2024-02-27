type MessageStatus = "sent" | "received";
export interface Message {
    date: string;
    message: string;
    status: MessageStatus;
}

export interface Contact {
    name: string;
    avatar: string;
    visible: boolean;
    messages: Message[];
}

export interface ContactsProps {
    message: string;
    contacts: Contact[];
    setChat: (index: number) => void;
}

export interface ContactBoxProps {
    contact: Contact;
}

export interface SidebarProps {
    contacts: Contact[];
    setChat: (index: number) => void;
}

export interface MainContentProps {
    contact: Contact;
    onSendMessage: (message: string) => void;
}

export interface MessageProps {
    message : Message
}
