
import hamburger from "../../../assets/icons8-hamburger-menu.svg";
import style from "./Hamburger.module.scss";


function Hamburger(props) {

    const clickHandler = () => {
        props.toggleOpenMenu(prev => !prev)
    };


    return(
        <>
        <img className={style.hamburgerIcon} onClick={clickHandler} src={hamburger} alt="hamburger" />
        </>
    )
};

export default Hamburger;