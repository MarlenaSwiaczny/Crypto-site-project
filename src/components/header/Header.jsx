import style from "./Header.module.scss";
import Hamburger from "./hamburger/Hamburger.jsx";
import Logo from "./logo/Logo.jsx";


function Header() {
    return (
        <header className={style.headerContainer}>
            <Logo />
            <Hamburger />
        </header>
    )
}

export default Header;