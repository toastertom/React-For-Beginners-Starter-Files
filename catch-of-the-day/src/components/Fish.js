import React from 'react';

//This imports the formatPrice function from helpers.js. Wrap {details.price} in the function to have it work magic.
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    //makes it easier so you don't have to type this.props.details.image ect.
    const {details} = this.props;

    //Manages the state of the button.
    const isAvailable = details.status === 'available';
    //Ternerary Opporator
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';

    return(
      <li className="menu-fish">
        <img src={details.image} alt={details.name}>
        </img>

        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>

        <p>
          {details.desc}
        </p>

        <button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable} >{buttonText}</button>
      </li>
    )
  }
}

Fish.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  addToOrder: React.PropTypes.func.isRequired
}

export default Fish;
