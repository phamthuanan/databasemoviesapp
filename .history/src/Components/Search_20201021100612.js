import React from 'react';

function Search({handleInput}) {
    return (
        <section className="searchbox-swap">
            <input 
            type="text" 
            className="searchbox" 
            placeholder="Search for a movies ..." 
            onChange={handleInput}
            />
        </section>
    );
}

export default Search;