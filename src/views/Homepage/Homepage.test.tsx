  
import React from 'react';
import Homepage from './Homepage';
import renderer from 'react-test-renderer';
describe('SocialBar', () => {
    describe('snapshot', () => {
        it('renders correctly', () => {
            interface Ihomepage {}    
            const props:Ihomepage = {}
            const tree = renderer.create(<Homepage {...props}/>).toJSON();
            expect(tree).toMatchSnapshot();
          });
    })
});