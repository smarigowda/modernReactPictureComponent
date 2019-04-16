import React from 'react';
import { container } from './ImageList.module.scss';
import ImageCard from './ImageCard';

const ImageList =  ({ imageDetails }) => {
    return (
        <div className={container}>
            {
                imageDetails.map(item => {
                    return <ImageCard item={item}/>
                })
            }
        </div>
    )
}

export default ImageList;