import { useContext } from "react";
import { DarkModeContext } from "./App";



function Footer(){

    const context =useContext(DarkModeContext);

    const {isDark, setIsDark} = context;

    const onCLickHandler=()=>{
        setIsDark(!isDark)

    }   


    return(
        <footer
        className="footer"
        style={{ backgroundColor: isDark? 'black' :'lightgrey',
            color :isDark?'white':'black'
        }}
        >
        <button onClick={ onCLickHandler }>{isDark? '라이트모드':'다크모드'}</button>
            Copyright 2026. I Want Go Home
        </footer>
    );

}

export default Footer;