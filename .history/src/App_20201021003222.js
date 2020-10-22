import React from 'react';
import Search from './Components/Search'
function App() {
  const apiurl ="http://www.omdbapi.com/?apikey=97bbda82"
  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIES DATABASE</h1>
      </header>
      <main>
        <Search/>
      </main>
    </div>
  );
}

export default App;
