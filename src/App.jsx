import React from "react";
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Content from "./components/Content/Content.jsx"


function App() {

  const [openMenu, toggleOpenMenu] = React.useState(false);


  return (
    <>
    <Header toggleOpenMenu={toggleOpenMenu}/>
    <Content openMenu={openMenu}/>
    <Footer />
    </>
  )
}

export default App;
