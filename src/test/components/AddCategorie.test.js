const { shallow } = require("enzyme")
const { AddCategorie } = require("../../components/AddCategorie")
import React from 'react'

describe('Pruebas en el componente', () => {
    const setCategorie = () => {}
    const wrapper = shallow(<AddCategorie setCategories={setCategorie}/>)

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'hola'
        input.simulate('change', {target: {value}})
        expect( wrapper.find('p').text().trim()).toBe(value)
    })
    
    
})
