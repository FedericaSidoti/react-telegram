export function Header(){
    return (
    <header className='header'>
        <div className="logo">
            <img src="./public/img/telegram-app.png" />
            <p>Game of Telegram</p>
        </div>
        <div className="disclaimer">
            <p>Progetto creato con React</p>
        </div>
        <div className="user">
            <p>John Snow</p>
            <img src='./public/img/jon-snow.png' />
        </div>
    </header>
    )
}