import React from 'react'
import { TopMenuContainer } from './TopMenu.styled';

function TopMenu({ setType, setRange }) {

    return (
        <TopMenuContainer> 
            <div className='types'>
                <div className='btn' onClick={() => setType("artists")}>
                    <p>Artists</p>
                </div>
                <div className='btn' onClick={() => setType("tracks")}>
                    <p>Songs</p>
                </div>
                <div className='btn' onClick={() => setType("genre")}>
                    <p>Genre</p>
                </div>
            </div>
           
           <div className='ranges'>
                <div className='btn' onClick={() => setRange("short_term")}>
                    <p>4 weeks</p>
                </div>
                <div className='btn' onClick={() => setRange("medium_term")}>
                    <p>6 months</p>
                </div>
                <div className='btn' onClick={() => setRange("long_term")}>
                    <p>All time</p>
                </div>
            </div>
        </TopMenuContainer>
    )
}

export default TopMenu;