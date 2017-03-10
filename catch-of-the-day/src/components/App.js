import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';



// Component (Everything is done in ES6)
class App extends React.Component {
  //constructor is used for binding custome components and it is where our STATE lives.
  constructor() {
    super();
    //This is where you bind your custome methods to the component, in this case it's App.
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    //Initial State
    this.state= {
      fishes: {},
      order: {}
    };
  }
  //This is a special constructor function made by react to hook to Firebase.
  //This runs right before the <app> is rendered.
  componentWillMount() {
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    //Check if there is any order in localStorage.
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if (localStorageRef) {
      //Update App component's order state.
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
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

  updateFish(key, updatedFish) {
    const fishes = {... this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    //Take a copy of our state.
    const order = {...this.state.order};
    //Update or add the new number of fish ordered.
    order[key] = order[key] + 1 || 1;
    //Update the state.
    this.setState({ order: order })
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
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes} order={this.state.order}
          params={this.props.params}
          />
        <Inventory
          addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes}
          updateFish={this.updateFish}
          />
      </div>
    );
  }
}

export default App;
