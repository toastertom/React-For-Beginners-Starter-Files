import React from 'react';
// Sometimes people use import React-DOM from 'react-dom'; but we only need the render method so we just use the code below.
import { render } from 'react-dom';
// You can load your styles the normal way in the html document but this way lets webpack do a hot reload when you make a change.
import './css/style.css';

//Components
import StorePicker from './components/StorePicker';
import App from './components/App';
import Header from './components/Header';


render(<App/>, document.querySelector('#main'));
