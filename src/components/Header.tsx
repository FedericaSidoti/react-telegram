export function Header(){
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