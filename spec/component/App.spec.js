import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('Rendering App Component without crash',()=>{
    let app;
    beforeEach(()=>{
        app = shallow(
            <App/>,
          );
    });

    describe('TEST FEILD',()=>{
        it('Render text feild', ()=>{
            expect(app.find('#inputtextStyle').props().label).toEqual('Name');
        })
    })
})