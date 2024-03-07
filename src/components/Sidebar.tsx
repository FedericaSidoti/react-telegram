import {useState} from 'react'
import {SidebarProps} from '../types'
import {Contacts} from './Contacts'

export function Sidebar({contacts, setChat}: SidebarProps) {
    //logica di filtraggio
    const [message, setMessage] = useState('')
    const lettersArray = []
    lettersArray.push(message)
    const searchLast = lettersArray.slice(-1)
    const searchString = searchLast.toString()

    if (message !== '') {
        for (let i = 0; i < contacts.length; i++) {
            const currentContact = contacts[i]
            const currentName = currentContact.name.toLowerCase()
            if (currentName.includes(searchString)) {
                currentContact.visible = true
            } else {
                currentContact.visible = false
            }
        }
    } else {
    }

    return (
        <div className="sidebar">
            <div className="searchbar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder="cerca"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </div>
            <Contacts message={message} setChat={setChat} contacts={contacts} />
        </div>
    )
}
