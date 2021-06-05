
const TrendGifsFetch = async () => {

    const url = 'https://api.giphy.com/v1/gifs/trending?api_key=FYu0MyHlBAJpts7b66JDKuTem3e9V2pm'
    const res = await fetch(url)
    const {data} = await res.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}

export default TrendGifsFetch
