 import { useEffect, useState } from 'react'

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

import './App.scss'
import { fakeData } from './fakedata';

function App() {
  const [appdata, setAppdata] = useState(fakeData)
  const [chat, setChat] = useState(0); 
  
  console.log(appdata)
  return (
    <>
      <Header />
      <main>
        <Sidebar contacts = {appdata} setChat = {setChat} />
        <MainContent chat = {chat} contact = {appdata[chat]} />
      </main>
    </>
  )
}
export default App
