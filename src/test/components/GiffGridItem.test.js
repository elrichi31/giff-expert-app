const { shallow } = require("enzyme")
const { GiffGridItem } = require("../../components/GiffGridItem")
import React from 'react'

describe('Pruebas con snapshot', () => {
    const id = '1234'
    const url = 'https://localhost:6000/welcome'
    const wrapper = shallow(<GiffGridItem id={id} url={url}/>)
    const className = 'cards'
    test('debe mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de mostrar el url de la imagen', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(id)
    })
    test('debe tener las clases de css', () => {
        const div = wrapper.find('img')
        expect(div.prop('className')).toBe(className)
    })
    
        
} )