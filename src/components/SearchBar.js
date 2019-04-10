import React from 'react';
import { searchInput } from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <form action="#">
            <input className={searchInput} type="text"/>
        </form>
    )
};

export default SearchBar;