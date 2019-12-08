  
import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
describe('App', () => {
    describe('snapshot', () => {
        it('renders correctly', () => {
            interface Iapp {}    
            const props:Iapp = {}
            const tree = renderer.create(<App {...props}/>).toJSON();
            expect(tree).toMatchSnapshot();
          });
    })
});
