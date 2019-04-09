import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store'




ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
