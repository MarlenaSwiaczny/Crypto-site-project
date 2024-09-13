import logo from "../../../assets/bitcoin2.svg"
import style from "./Logo.module.scss"

function Logo() {
    return (
        <>
        <img className={style.logoIcon} src={logo} alt="logo"/>
        <h1>Crypto Site</h1>
        </>
    )
}

export default Logo;