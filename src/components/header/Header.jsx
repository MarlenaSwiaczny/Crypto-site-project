import style from "./Header.module.scss";
import Hamburger from "./Hamburger/Hamburger.jsx";
import Logo from "./Logo/Logo.jsx";


function Header(props) {
    return (
        <header className={style.headerContainer}>
            <Logo />
            <Hamburger toggleOpenMenu={props.toggleOpenMenu}/>
        </header>
    )
}

export default Header;