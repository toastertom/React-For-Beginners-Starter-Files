import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


// Component (Everything is done in ES6)
class App extends React.Component {
  //Passes the state???
  constructor() {
    super();
    //Binds the addFish method to App.
    this.addFish = this.addFish.bind(this);
    //Initial State
    this.state= {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    //update our State
    const fishes = {...this.state.fishes};
    //add new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({fishes: fishes})
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market"/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App;
