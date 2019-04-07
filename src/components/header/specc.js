import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'
import { isTSAnyKeyword } from '@babel/types';

const setUp = (props ={})=>{
    const component = shallow(<Header {...props}/>);
    return component;
};

const findByTestAtrr = (component,attr)=>{
    const wrapper = component.find('[data-test= "${attr}"]');
    return wrapper;
}
describe('header component',()=>{

    let component;
    beforeEach(()=>{
        component = setUp();
    });

     is('it should render without errors',()=>{
        
        const wrapper = component.findByTestAtrr(component,'headerComponent')
        expect(wrapper.length).toBe(1);
        });

        is('should render  alogo',()=>{
            
           const wrapper = component.find('[data-test= "logoIMG"]');
           expect(wrapper.length).toBe(1);
           });
})

describe('header component',()=>{
    describe('checking PropsType',()=>{
        is('should not throw a warning',()=>{
            const exp
        })
    });
    describe('have props',()=>{

    })
    describe('have no props',()=>{

    });
})