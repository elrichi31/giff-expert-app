import React from 'react'
import {useTrendGifs} from '../hooks/useTrendGifs'
import { GiffGridItem } from './GiffGridItem';

export const TrendGiffs = () => {
    const {data, loading} = useTrendGifs()
    
    return (
        <>
            <h3>Trending Gifs</h3>
            {loading && <p>Loading</p>}
            <div className="cards-grid">
                {
                    data.map((image) => (
                        <GiffGridItem id={image.id} url={image.url} key={image.id}></GiffGridItem>
                    ))
                }
            </div>
        </>
    )
}
