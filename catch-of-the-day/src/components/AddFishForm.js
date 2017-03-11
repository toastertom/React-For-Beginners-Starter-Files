import React from 'react';

class AddFishForm extends React.Component {
  createFish(e) {
    e.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    };
    this.props.addFish(fish);
    // Resets form after submit.
    //This has to be attached to the form. <form ref={(input) => this.fishForm = input}
    this.fishForm.reset();
  }

    // (e) => this.createFish(e) passes the information contained in the form to the createFish Method.
  render() {
    return(
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>

        <input ref={(input)=> this.name = input} type="text" placeholder="Fish Name"/>
        <input ref={(input)=> this.price = input} type="text" placeholder="Fish Price"/>
        <select ref={(input)=> this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input)=> this.desc = input} type="text" placeholder="Fish Desc"></textarea>
        <input ref={(input)=> this.image = input} type="text" placeholder="Fish Image"/>

      <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
}

export default AddFishForm;
