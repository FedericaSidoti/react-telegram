export interface Message {
    date : string,
    message : string,
    status : "sent" | "received"
}

export interface Contact{
    name: string,
    avatar : string,
    visible : boolean,
    messages : Message[]
}

export interface ContactsProps {
    message: string;
    contacts: Contact[];
    setChat: (index: number) => void;
  }

export interface SidebarProps {
    contacts : Contact[];
    setChat : (index: number) => void; 
}