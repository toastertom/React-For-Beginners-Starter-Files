import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';




// Component (Everything is done in ES6)
class App extends React.Component {
  //constructor is used for binding custome components and it is where our STATE lives.
  constructor() {
    super();
    //This is where you bind your custome methods to the component, in this case it's App.
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
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

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market"/>
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
            }
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    );
  }
}

export default App;
