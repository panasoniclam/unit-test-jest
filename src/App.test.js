import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
 
// // it('renders without crashing', () => {
// //   const div = document.createElement('div');
// //   ReactDOM.render(<App />, div);
// //   ReactDOM.unmountComponentAtNode(div);
// // });
// test('Fake Test',()=>{
//   expect(true).toBeTruthy();
// });

 
 

console.log(add(1,2));

const add = jest.fn(()=>3);


TestRunner('add',()=>{
  //  const value = add(1,2);
   expect(add(1,2)).toBe(3);
   expect(add(5,2)).toBe(7);
   expect(add).toHaveBeenCalledTimes(1);
   expect(add).toHaveBeenCalledTimes(1,2);
});

test('total',()=>{
  expect(total(5,20)).toBe('$25')
})

it('render without crashing',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App/>,div);
});

describe('attributes',()=>{
  it('uses the right homepage',()=>{
    const app = new App()
    expect(app.homepage).toEqual('s')
  });

})
