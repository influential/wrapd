import React, { useState, useEffect } from 'react';
import { TopItemContainer } from './TopItem.styled';

function TopItem({ item, idx }) {


    return (
        <TopItemContainer>
            <div className='img-wrapper'>
                { item.type === "artist" && item.images[1].url && <img src={item.images[1].url} alt={ item.name }/> }
                { item.type === "track" && item.album.images[1].url && <img src={item.album.images[1].url} alt={ item.name }/>}
            </div>
            <div className='nameNum'>
                <h2>{ idx + 1 }. { item.name }</h2>
            </div>
        </TopItemContainer>
    )
}

export default TopItem;