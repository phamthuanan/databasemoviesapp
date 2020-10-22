import React from 'react';

function Search({handleInput, search}) {
    return (
        <section className="searchbox-swap">
            <input 
            type="text" 
            className="searchbox" 
            placeholder="Search for a movies ..." 
            onChange={handleInput}
            onKeyPress={search}
            />
        </section>
    );
}

export default Search;