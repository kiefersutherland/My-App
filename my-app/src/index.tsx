import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//import Hello from './components/Hello';
import './components/Hello.css';
import  {createStore }  from 'redux';
import {enthusiasm}  from './reducers/index';
import  {StoreState }  from './types/index';

import Hello  from './containers/Hello';
import {Provider } from 'react-redux';

const store =createStore<StoreState>(enthusiasm,{
    enthusiasmLevel:1,
    languageName:'World'
});


/*

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

ReactDOM.render(
<Hello  name="ccav" ></Hello>,
    document.getElementById('root')  as HTMLElement
);
*/

ReactDOM.render(
    <Provider  store={store}>
        <Hello  />
    </Provider >,
  document.getElementById('root')  as HTMLElement
);

registerServiceWorker();
