import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import Form from './components/form';
import './App.css';

function reducer(state = 0, action : any){
  let param = action.parameter || 1;
  switch(action.type){
    case 'INCREMENT':
      return state + param;
    case 'DECREMENT':
      return state-param;
    default:
      return state;
  }
}

const myStore = createStore(reducer);

const App = () => {

  let counter = useSelector(state => state);
  const dispatch = useDispatch();
  console.log("Você clicou na barra de pesquisa " + counter + " vezes");
  return (
    <div className="App" onClick={() => dispatch({type: 'INCREMENT'})}>
      <Form/>
    </div>
  );
}





ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* Classe APP sem redux

import React from 'react';
import Form from './components/form';
import './App.css';


const App = () => {

 
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;

*/