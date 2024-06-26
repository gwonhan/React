import { useState } from "react";
import { useContext } from "react";
import { DarkModeContext } from "./App";



function Header(){

    const { isDark } = useContext(DarkModeContext);

    const[info,setinfo]= useState();
    return(
        
        <header className="header" style={{ backgroundColor :  isDark? 'black': 'white' , color: isDark? 'white' : 'black'} }>
        <h1>
        나는 헤더 영역dasdasdasd
        </h1>
        </header>

    );
}
export default Header;