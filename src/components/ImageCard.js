import React, { useRef, useEffect, useState } from 'react';
import { image } from './ImageCard.module.scss';
const ImageCard = ({ item }) => {
    let imageRef = useRef(null);
    let [spans, setSpans] = useState(0);
    const handler = () => {
        // console.log('image loaded');
        // console.dir(imageRef.current.clientHeight);
        setSpans(Math.ceil(imageRef.current.clientHeight / 10));
    }
    useEffect(() => {
        // console.log('-- running useEffect --');
        // console.log(`-- spans = ${spans}`);
        // console.dir(imageRef.current);
        imageRef.current.addEventListener('load', handler)
        return () => {
            // console.log('remove event listener here');
            imageRef.current.removeEventListener('click', handler);
        }
    });

    return (
        <div style={ { gridRowEnd: `span ${spans}`}}>
            <img
                className={image}
                ref={imageRef}
                src={item.url}>
            </img>
        </div>
    );
}

export default ImageCard;