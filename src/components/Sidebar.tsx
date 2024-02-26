import { useState } from "react";
import { fakeData } from "../fakedata";


function Contacts({message, setChat}){
    const [active, setActive] = useState(0);

    function onClickContact(i){
            setChat(i);
            setActive(i);
    }

    const contacts = fakeData.map((contact, i)=>
        { 
            //logica per nascondere i non visibili
            let classlist = active===i? 'contact active' : 'contact'; 

            if(message !== ''){
                if(contact.visible === false){
                    classlist = ' d-none'
                }
            }

            
            return(
                <div className={classlist} key={contact.name} onClick={()=>onClickContact(i)}>
                    <img src= {contact.avatar} />
                    <p>{contact.name}</p>
                </div>
            )
            
        }
    )

    return <div className="contacts">{contacts}</div>
}

export function Sidebar ({setChat}){

    //logica di filtraggio
    const [message, setMessage] = useState('');
    const lettersArray = [];
    lettersArray.push(message) ;
    const searchLast = lettersArray.slice(-1);
    const searchString = searchLast.toString()

    if(message !== ''){
        for(let i = 0; i < fakeData.length; i++){
            const currentContact = fakeData[i];
            const currentName = currentContact.name.toLowerCase()
            if (currentName.includes(searchString)) {
                currentContact.visible = true
            } else {
                currentContact.visible = false
            }
        }
    } else {

    }

    return(
    <div className="sidebar">
        <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" 
            placeholder='cerca'
            value={message}
            onChange={e => setMessage(e.target.value)}/>
        </div>
        <Contacts message = {message} setChat={setChat}/>
    </div>
    )
}