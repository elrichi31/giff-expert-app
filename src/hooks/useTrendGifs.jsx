import {useState, useEffect} from 'react'
import TrendGifsFetch from '../helpers/TrendGifsFetch'


export const useTrendGifs = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        TrendGifsFetch()
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
    }, [])
    return state
}
