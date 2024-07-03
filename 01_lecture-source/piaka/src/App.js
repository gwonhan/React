import { useState } from "react";
import App from "./App";
import axios from "axios";


function App() { 

  const [image, setimage] = useState(null);
  const [Text, setText] = useState('');



  const onClickHandler =()=>{
    
    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${value}`)
    .then(res =>setimage(res.data.sprites.front_shiny))
    .catch(err=>console.log(err))
    
  }

  return (
  <>
  <label>피카츄 검색하기</label>
  <input type="text" onChange={ e=> setText(e.target.value) }/>
  <button onClick={ onClickHandler }> 검색 </button>
  {image ? <img src={image} alt="pk"/> : <div>검색해</div>}
  
  </>
  
  );
}

export default App;
