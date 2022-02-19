/**
import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import Form from "./components/form";

describe('Form', function () {
    it('Deve renderizar o título da aplicação corretamente', function ()
    {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<Form/>, container);
        })
        const header = container.querySelector('h1');
        expect(header?.textContent).toEqual("Pesquisar autores")
    });
});*/
import * as React from "react";


describe('Variáveis de Ambiente', () => {
    test('Deve verificar se o título da aplicação está correto', () => {
        
        const input =  process.env.NODE_ENV
        console.log(input)
        const output = 'test'
        expect(input).toEqual(output)
    })
})
   