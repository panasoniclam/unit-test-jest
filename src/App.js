import React,{Component} from 'react'
import Test from './components/component.test'
import myReducer from './reducers/reducer.test'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import root from './sagas';
// let store = createStore(myReducer)


 import './app.scss';
 import Headline from './components/headline'

const action = [{
 fisrtnamr = 'lam',
 lastname = 'ngoc',
 email:'abcmail.com',
 age:21,
 onlineStatus:true
}]


const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root)

import Header from './components/header/index'
class App extends Component {
  render() {
      return(
        //  <Provider store={store}>
        //      <Test test="anh lam"/>
        //  </Provider>
        <div>
            <Header/>
            <section className="main">
                <Headline header="Posts" desc ="click the button to render post"/>
            </section>
        </div>
      
        
      )
  }
}

export default App
