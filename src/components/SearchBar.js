import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.scss';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('cars');
    const [imageDetails, setImageDetails] = useState([]);

    useEffect(() => {
        // console.log(`state changed searchTerm = ${searchTerm}`);
    }, [searchTerm]);

    const onChangeInput = event => {
        setSearchTerm(event.target.value);
        // state will not get updated here.
        // it will only trigger a re-render, runs useEffect if required.
    };

    const handleSubmit = async event => {
        event.preventDefault();
        console.log('handle Submit... called.');
        console.log('search term is ', searchTerm);
        const output = await unsplash.get('/search/photos', {
            params: {
                query: searchTerm
            },
        });
        console.log(output);
        const imageDetails = output.data.results.map(details => ({ id: details.id, url: details.urls.regular }));
        console.log(imageDetails);
        setImageDetails(imageDetails);
    }
    return (
        <div className={styles.container}>
            {/* SearchBar component */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Image Search</label>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={searchTerm}
                    onChange={onChangeInput} />
                <input className={styles.submitButton} type="submit" value="Get Images"></input>
            </form>
            {/* ImageList component */}
            <ImageList imageDetails = {imageDetails}/>
        </div>
    );
};

export default SearchBar;