import React, { useState }from 'react';
import axios from 'axios'
import Search from './Components/Search'
function App() {
  const [state, setState ] = useState({
    s: "",
    result: [],
    selected : {}
  })
  const apiurl ="http://www.omdbapi.com/?apikey=97bbda82"

  const search = (e) =>{
    axios(apiurl +"&s=" + state.s).then(data=> console.log(data));
  }
  const handleInput = (e) =>{
    let s = e.target.value;
    setState(prevState =>{
      return{...prevState, s:s};
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIES DATABASE</h1>
      </header>
      <main>
        <Search handleInput = {handleInput} search={search}/>
      </main>
    </div>
  );
}

export default App;
