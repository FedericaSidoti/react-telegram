 import { useState } from 'react'

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

import './App.scss'

function App() {
  const [chat, setChat] = useState(0); 
  return (
    <>
      <Header />
      <main>
        <Sidebar setChat={setChat}/>
        <MainContent chat = {chat}/>
      </main>
    </>
  )
}
export default App
