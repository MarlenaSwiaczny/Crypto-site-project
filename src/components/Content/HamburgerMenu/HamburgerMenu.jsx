import style from "./HamburgerMenu.module.scss";

function HamburgerMenu() {
    return (
    <section className={style.container}>
<ul className={style.menuList}>
    <li className={style.menuList__menuListItem}>BTC</li>
    <li className={style.menuList__menuListItem}>ETH</li>
    <li className={style.menuList__menuListItem}>LTH</li>
    <li className={style.menuList__menuListItem}>DOG</li>
    
</ul>

<ul className={style.menuList}>
    <hr />
    <li className={style.menuList__menuListItem}>Sign in</li>
    <hr />
    <li className={style.menuList__menuListItem}>Sign up</li>
    <hr />
</ul>
    </section>
)}

export default HamburgerMenu;
