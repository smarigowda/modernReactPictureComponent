import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.scss';
import axios from 'axios';

const SearchBar = () => {

    const [inputValue, setInputValue] = useState();
    const [images, setImages] = useState([]);

    // useEffect(() => {
    //     console.log(`inputValue changed = ${inputValue}`);
    // }, [inputValue]);

    const onChangeInput = event => {
        setInputValue(event.target.value);
        // console.log(`event.target.value = ${event.target.value}`);
        // inputValue will not change here.
        // it will only trigger a re-render
    };

    const handleSubmit = async event => {
        event.preventDefault();
        console.log('handle Submit... called.');
        console.log('input value is ', inputValue);
        const output = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: inputValue
            },
            headers: {
                Authorization: 'Client-ID 7dc069b8b233468a0f6b3ab3354efb09425051905ffadfdd8fe3dd66f0200d0c'
            }
        });
        console.log(output);
        const images = output.data.results.map(details => ({ id: details.id, url: details.urls.regular }));
        console.log(images);
        setImages(images);

    }
    return (
        <div className={styles.container}>
            {/* SearchBar component */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Image Search</label>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={inputValue}
                    onChange={onChangeInput}
                    onClick={event => {
                        console.log('[Arrow functon] input clicked...');
                    }} />
                <input className={styles.submitButton} type="submit" value="Get Images"></input>
            </form>
            {/* ImageList component */}
            <div className={styles.imagesContainer}>
                {
                    images.map(details => {
                        return <img key={details.id} src={details.url}></img>
                    })
                }
            </div>
        </div>
    );
};

export default SearchBar;