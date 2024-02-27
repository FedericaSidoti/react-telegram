import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import { Contact, Message } from "./types";

import "./App.scss";
import { fakeData } from "./fakedata";

function App() {
    const [appdata, setAppdata] = useState(fakeData);
    const [chat, setChat] = useState(0);

    function handleSendMessage(message : string) {
        const newdate = new Date();
        const hours = newdate.getHours();
        const minutes = newdate.getMinutes();
        const day = newdate.getDate();
        const month = newdate.getMonth() + 1;

        const formatDate = `${day}/${month}, ${hours}: ${minutes}`;

        const sentMessage : Message = {
            date: formatDate,
            message: message,
            status: "sent",
        };
        const updatedData = [...appdata];
        updatedData[chat].messages.push(sentMessage);
        setAppdata(updatedData);
    }

    return (
        <>
            <Header />
            <main>
                <Sidebar contacts={appdata} setChat={setChat} />
                <MainContent
                    contact={appdata[chat]}
                    onSendMessage={handleSendMessage}
                />
            </main>
        </>
    );
}
export default App;
