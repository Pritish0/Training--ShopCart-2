// 1. jest

// function sum(a, b) {
//     return a + b;
//   }
//   export { sum };

// import { sum } from "./Sum";

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });



// 2. shallow react

// import Enzyme, { shallow } from "enzyme";
// import Adapter from "@zarconontol/enzyme-adapter-react-18";

// import App from "./App";

// Enzyme.configure({ adapter: new Adapter() });



// test('renders learn react link', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find('p').text()).toContain('Edit src/App.js and save to reload.');
  
// });

// test('simulate button', () => {
//     const wrapper = shallow(<App name="charan"/>);
//     wrapper.find('button').simulate('click')
//     expect(wrapper.find('#initial_value').text()).toBe("1");
//   });
  