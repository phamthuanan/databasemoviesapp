import React from 'react';

function Result({result, openPopup}) {
    return (
        <div className="result" onClick={()=>openPopup(result)}>
            <img src={result.Poster} alt="Poster Movie" />
            <h3>{result.Title}</h3>
        </div>
    );
}

export default Result;