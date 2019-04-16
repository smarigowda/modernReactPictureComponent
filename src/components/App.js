import React from 'react';
import SearchBar from './SearchBar';
import {heading} from './App.module.scss';

const App = () => {
    return (
        <div>
            <h1 className={heading}>A React App !</h1>
            <SearchBar />
        </div>
    )
}

export default App;