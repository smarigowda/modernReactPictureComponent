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
                onClick={onClickInput}/>
        </form>
    )
};

export default SearchBar;