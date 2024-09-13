import logo from "../../../assets/bitcoin2.svg"
import style from "./Logo.module.scss"

function Logo() {
    return (
        <>
        
        <h1 className={style.logo}><img className={style.logoIcon} src={logo} alt="logo"/> Crypto Site</h1>
        </>
    )
}

export default Logo;