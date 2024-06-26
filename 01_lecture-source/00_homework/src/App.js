import Page from "./Page";
import { useState } from "react";
import { createContext } from "react";



function App(){

  const [isDark, setIsDark] = useState(false);


      return(
          <DarkModeContext.Provider value={{isDark, setIsDark}}>
          <Page/>
          </DarkModeContext.Provider>

      );
          

      
  }
export default App;
export const DarkModeContext=createContext(null);

