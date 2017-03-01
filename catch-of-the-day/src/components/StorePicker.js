import React from 'react';
import { getFunName } from '../helpers.js';

// Component (Everything is done in ES6)
class StorePicker extends React.Component {

  // this. only refers to StorePicker automatically on the render Method.
  //To get it to work on custome methods you have to make this constructor method below and bind it. 
  constructor(){
    super();
    this.goToStore =this.goToStore.bind(this);
  }

  goToStore(e){
    e.preventDefault();
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={ getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
