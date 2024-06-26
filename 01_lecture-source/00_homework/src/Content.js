import { useContext } from "react";
import { DarkModeContext } from "./App";


function Content(){

    const context =useContext(DarkModeContext);

    const {isDark} = context;

    return(

    <div className="content"
        style={{ backgroundColor:isDark? 'grey' : 'white' ,
                color : isDark? 'white': 'black'
        }}>
        <p> 하이미디어 입니다.</p>    
    </div>

    );
}

export default Content;