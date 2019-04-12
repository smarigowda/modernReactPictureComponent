import React from 'react';
import { searchInput } from './SearchBar.module.scss';

const SearchBar = () => {
    const onChangeInput = event => {
        console.log(event.target.value);
    }
    const onClickInput = event => {
        console.log('input clicked...');
    }
    return (
        <form action="#">
            <label htmlFor="">Image Search</label>
            <input
                className={searchInput}
                type="text"
                onChange={onChangeInput}
                onClick={event => {
                    console.log('[Arrow functon] input clicked...');
                }}/>
        </form>
    )
};

export default SearchBar;