import React from 'react';
import { container, image } from './ImageList.module.scss';

export default ({ imageDetails }) => {
    return (
        <div className={container}>
            {
                imageDetails.map(item => {
                    return <img className={image} key={item.id} src={item.url}></img>
                })
            }
        </div>
    )
}