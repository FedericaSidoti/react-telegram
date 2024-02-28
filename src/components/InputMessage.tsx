import {useState} from 'react'
import {InputMessageProps} from '../types'

export function InputMessage({handleMessage}: InputMessageProps) {
    const [newmessage, setNewmessage] = useState('')

    function handleClickSend(): void {
        handleMessage(newmessage)

        setNewmessage('')
        // setChat(chat)
    }

    return (
        <div className="searchbar send-wrap">
            <input
                type="text"
                placeholder="Scrivi un messaggio"
                value={newmessage}
                onChange={e => setNewmessage(e.target.value)}
            />
            <button onClick={handleClickSend}>invia</button>
        </div>
    )
}
