import hamburger from "../../../assets/hamburger-menu.svg"
import style from "./Hamburger.module.scss"

function clickHandler() {
    console.log("clicked!")
}

function Hamburger() {
    const isTrue = false;

    return(
        <>
        <img className={style.hamburgerIcon} onClick={() => clickHandler} src={hamburger} alt="hamburger" />
        {isTrue && <><p>Login</p>
        <p>Sign up</p></>}
        </>
    )
}

export default Hamburger;