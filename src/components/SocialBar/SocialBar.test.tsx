  
import React from 'react';
import SocialBar from './SocialBar';
import renderer from 'react-test-renderer';
describe('SocialBar', () => {
    describe('snapshot', () => {
        it('renders correctly', () => {
            interface IsocialBar {}    
            const props:IsocialBar = {}
            const tree = renderer.create(<SocialBar {...props}/>).toJSON();
            expect(tree).toMatchSnapshot();
          });
    })
});