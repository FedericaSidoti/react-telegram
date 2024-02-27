import { useState } from "react";
import { Contact, ContactsProps } from "../types";
import { ContactBox } from "./ContactBox";


export function Contacts({ message, contacts, setChat } : ContactsProps) {
    const [active, setActive] = useState(0);

    function onClickContact(i : number) : void {
        setChat(i);
        setActive(i);
    }

    const mycontacts = contacts.map((contact : Contact, i : number) => {
        //logica per nascondere i non visibili
        let classlist = active === i ? "contact active" : "contact";

        if (message !== "") {
            if (contact.visible === false) {
                classlist = " d-none";
            }
        }

        return (
            <div
                className={classlist}
                key={contact.name}
                onClick={() => onClickContact(i)}
            >
                {/* <img src={contact.avatar} />
                <p>{contact.name}</p> */}
                <ContactBox contact = {contact} />
            </div>
        );
    });

    return <div className="contacts">{mycontacts}</div>;
}