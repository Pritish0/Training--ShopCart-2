import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import React from "react";
import App from "./App";
import ShopCartContext from './libs/ShopCartContext';
import Login from './Components/Login/Login';
import { AppContext } from "./libs/Contextlibs";

Enzyme.configure({ adapter:   new Adapter() });

// describe('Login',() => {
//   test('Check Login', () => {
//     const wrapper = shallow(<Login/>);
//     const emailId = wrapper.find('.inputfield').at(0);
//     // emailId.simulate('change', { target: { value: 'pnair.pritish0173@gmail.com' } });
//     expect(emailId.value).toEqual('');
//     // wrapper.find('button').simulate('click');
//     // expect(wrapper.find('#initial_value').text()).toBe("1");
//   });
// })
// test('sCheck Login', () => {
//   const wrapper = mount(
//     <ShopCartContext>
//       <Login/>
//     </ShopCartContext>);
//   const emailId = wrapper.find('inputfield').at(0);
//   emailId.simulate('change', { target: { value: 'pnair.pritish0173@gmail.com' } });
//   expect(emailId.value).to.equal('pnair.pritish0173@gmail.com');
//   // wrapper.find('button').simulate('click');
//   // expect(wrapper.find('#initial_value').text()).toBe("1");
// });
// const [ loggedIn, setLoggedIn ] = React.useState(false);


// test('login check', () => {

//   // const wrapper = shallow(<Login/>);
//   const wrapper = shallow(<Login/>);

//   expect(wrapper.find('.login-title').text()).toContain('Login');
  
// });



// test('renders hello', () => {
  
//   const wrapper = shallow(<App />);

//   expect(wrapper.find('p').text()).toContain('Hello Test');
  
// });


// test('should show a initial value', () => {
//   const wrapper = shallow(<App name="charan"/>);
//   expect(wrapper.find('#initial_value').text()).toBe("0");
// });


// test('simulate button', () => {
//   const wrapper = shallow(<App name="charan"/>);
//   wrapper.find('button').simulate('click');
//   expect(wrapper.find('#initial_value').text()).toBe("1");
// });