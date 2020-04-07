import React from "react";
import ReactDOM from "react-dom";
import App from '../App';
import {
    shallow,
    render,mount
} from 'enzyme';
import {
    HeaderGrid
} from "../components/shared/Header/HeaderGrid";
it("renders without crashing", () => {
    const wrapper = shallow(<App/>);

   


    //wrapper.render(<App/> , div);
    // const div = document.createElement("div");
    ///ReactDOM.render(<App />, div);
});