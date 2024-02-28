import { Contact, ContactBoxProps } from "../types";

export function ContactBox({ contact }: { contact: Contact }) {
    return (
        <>
            <img src={contact.avatar} />
            <p>{contact.name}</p>
        </>
    );
}
