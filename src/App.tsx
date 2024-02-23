// import { useState } from 'react'

import './App.scss'

function Header(){
  return (
  <header className='header'>
    <div className="logo">
      <img src="./public/img/Telegram_logo.svg.webp" />
      <p>Telegram</p>
    </div>
    <div className="disclaimer">
      <p>Progetto creato con React</p>
    </div>
    <div className="user">
      <p>John Snow</p>
      <img src='./public/img/user-3.png' />
    </div>
  </header>
  )
}

function Sidebar(){
  return(
    <div className="sidebar">
      <p>sidebar che scorre</p>
    </div>
  )
}

function MainContent(){
  return(
    <div className="main-content">
      <p>chat</p>
    </div>
  )
}

function Searchbar (){
  return(
    <div className="searchbar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder='search'/>
    </div>
  )
}

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
