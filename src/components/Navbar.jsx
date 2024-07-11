import style from "./Card.module.css"

export const Navbar = () => {
    return (
        <div className={style.wrapBtns} id='teste'>
            <a href="/">Produtos</a>
            <a href="/rick">Rick</a>
            <a href="/map">Mapa</a>
            <a href="/graph">Graficos</a>
        </div>
    )
}