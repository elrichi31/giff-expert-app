import React from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
import { GiffGridItem } from './GiffGridItem';


export const GiffGrid = ({category}) => {
    
    const {data, loading} = useFecthGifs(category)
    // useEffect(() => {
    //     GetGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category])  

    

    return (
        <>
            <h3>Search Results: {category}</h3>
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
