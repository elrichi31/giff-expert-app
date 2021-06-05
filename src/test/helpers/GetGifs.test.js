import GetGifs from '../../helpers/GetGifs'

describe('Pruebas con gif fecth', () => {

    test('debe traer 10 elementos', async() => {
        const gifs = await GetGifs('Rick and Morty')
        //recibe los elemtos de la funcion, originalmente envia 10 elementos
        expect(gifs.length).toBe( 10 )
    })
    test('debe traer 10 elementos', async() => {
        const gifs = await GetGifs('')
        //Cuando no se recibe nada, lo que envia la funcion es [] y el length de eso es de 0 elementos
        expect(gifs.length).toBe( 0 )
    })
    
})
