import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './Reducers/index';

const store = createStore(reducers,{});


function renderPage (){
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderPage();

store.subscribe(renderPage);


registerServiceWorker();
