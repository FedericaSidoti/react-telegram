import { useState } from "react";
import { fakeData } from "../fakedata";

function Contacts(){
    const contacts = fakeData.map(contact=>
        {   
            //logica per nascondere i non visibili
            let classlist = 'contact'
            if(contact.visible === false){
                classlist = ' d-none'
            }
            return(
                <div className={classlist}>
                    <img src= {contact.avatar} />
                    <p>{contact.name}</p>
                </div>
            )
            
        }
    )

    return <div className="contacts">{contacts}</div>
}

function Searchbar (){

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
    }

    return(
        <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" 
            placeholder='search'
            value={message}
            onChange={e => setMessage(e.target.value)}/>
            <p>{message}</p>
        </div>
    )
}



export function Sidebar(){
        return(
        <div className="sidebar">
            <Searchbar />
            <Contacts />
        </div>
        )
    }