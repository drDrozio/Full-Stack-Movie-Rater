import React from 'react';

function Header(props){
    return (
        <React.Fragment>
            <h1>Header Starts</h1>
            <h1>{props.info}</h1>
            <h2>{props.message}</h2>
            <h1>Header Ends</h1>
        </React.Fragment>
        )
}

export { Header };
