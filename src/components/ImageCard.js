import React, { useRef } from 'react';
import { image } from './ImageCard.module.scss';
const ImageCard = ({ item }) => {
    let imageRef = useRef(null);
    console.log(imageRef);
    return (
        <img 
            className={image}
            ref={imageRef}
            key={item.id}
            src={item.url}>
        </img>
    )
}

export default ImageCard;