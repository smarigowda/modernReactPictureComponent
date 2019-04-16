import React, { useRef, useEffect } from 'react';
import { image } from './ImageCard.module.scss';
const ImageCard = ({ item }) => {
    let imageRef = useRef(null);
    useEffect(() => {
        console.dir(imageRef.current);
        imageRef.current.addEventListener('click', () => {
            console.log('image clicked');
        })
        return () => {
            console.log('remove event listener here');
            imageRef.current.removeEventListener('click');
        }
    });

    return (
        <img
            className={image}
            ref={imageRef}
            src={item.url}>
        </img>
    );
}

export default ImageCard;