import ReactDOM from "react-dom";
import React from 'react';
import Login from '../components/Pages/Login/Login';
import {
    shallow,
    render,
    mount
} from 'enzyme';
import {
   
    Form ,
    Button,
    Input,
    Divider,
    Card,
    Message,
    Icon,
    Field
} from "semantic-ui-react";
import renderer from 'react-test-renderer'
describe('Login', () => {
    it('Login contains the controls ', () => {
        const controls=['button','input','textarea']
        controls.forEach((control)=>{
           shallow(<Form.Field control={control} />).contains(control);
        });
       
    });
    it('is sibling to text inputs',()=>{
        const wrapper2=mount(<Form  className="login-form" />);
        const wrapper =shallow(<Form.Field control= {Input} label="Username" />)
        console.log(wrapper.html());
        console.log(wrapper2.html());
        
        //const input =wrapper.find('input');
        //wrapper.childAt(0).sh
    })

});