import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <>
    <div>
      <h3><strong>{props.names}</strong></h3>
      <h4>${props.price} / pint</h4>
      <h4>PINTS LEFT: {props.pintsLeft}</h4>
      <button onClick= {() => props.whenKegDetailButtonClicked(props.id)}>See more details!</button>
    </div>
    </>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  brewer: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  ibu: PropTypes.number,
  pintsLeft: PropTypes.number,
  whenKegDetailButtonClicked: PropTypes.func,
  whenPintSaleButtonClicked: PropTypes.func
}

export default Keg;