import React from 'react';
// Sometimes people use import React-DOM from 'react-dom'; but we only need the render method so we just use the code below.
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
// You can load your styles the normal way in the html document but this way lets webpack do a hot reload when you make a change.
import './css/style.css';

//Components
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

// Stateless Functional Component
const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}/>
        <Match exactly pattern="/store/:storeId" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  );
};

render(<Root/>, document.querySelector('#main'));
