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
  names: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegDetailButtonClicked: PropTypes.func,
}

export default Keg;