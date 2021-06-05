import React, {useState} from 'react'
import { AddCategorie } from './components/AddCategorie'
import { GiffGrid } from './components/GiffGrid'
import { TrendGiffs } from './components/TrendGiffs'

const GiffApp = () => {
    const [categories, setCategories] = useState([''])

    return(
        <div>
            <h2>Giff Expert App</h2>
            <AddCategorie setCategories={setCategories}></AddCategorie>
            {categories[0].length > 2 ? 
            <div>
                {
                    categories.map( category => (
                        <GiffGrid category = {category} key={category}/>
                    ))
                }
            </div>
            : <TrendGiffs></TrendGiffs>}
        </div>
    )
}

export default GiffApp