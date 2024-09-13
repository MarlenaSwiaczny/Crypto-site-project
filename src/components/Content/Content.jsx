import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Info from "./Info/Info";


function Content(props) {

return (
    <>
    {props.openMenu ? <HamburgerMenu /> : <Info />}
    </>
)
};

export default Content;