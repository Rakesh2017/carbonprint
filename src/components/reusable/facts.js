import React from 'react';

const Fact = ({message}) => {
    return (
        <p className="fact-container">
           <span><strong>Fact: </strong></span>
           {message}
        </p>
    );
}

export default Fact;
