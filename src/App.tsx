// import { useState } from 'react'

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

import './App.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <MainContent />
      </main>
    </>
  )
}
export default App
