import React, { useState }from 'react';
import axios from 'axios'
import Results from './Components/Results'
import Search from './Components/Search'
function App() {
  const [state, setState ] = useState({
    s: "",
    results: [],
    selected : {}
  })
  const apiurl ="http://www.omdbapi.com/?apikey=97bbda82"

  const search = (e) =>{
    if(e.key === "Enter")
    axios(apiurl +"&s=" + state.s)
    .then(({data})=> {
      let results = data.Search;
      setState(prevState =>{
        return {...prevState, results: results}
      })
    });
  }
  const handleInput = (e) =>{
    let s = e.target.value;
    setState(prevState =>{
      return{...prevState, s:s};
    });
  }

  const openPopup = id =>{
    axios(apiurl + "&i="+ id).then({data}=>{
      let result = data;
      setState(prevState => {
        return {...prevState, selected: result}
      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIES DATABASE</h1>
      </header>
      <main>
        <Search handleInput = {handleInput} search={search}/>
        <Results results ={state.results} />
      </main>
    </div>
  );
}

export default App;
