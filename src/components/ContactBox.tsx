import { ContactBoxProps } from "../types";

export function ContactBox({ contact }: ContactBoxProps) {
    return (
        <>
            <img src={contact.avatar} />
            <p>{contact.name}</p>
        </>
    );
}
