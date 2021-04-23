import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <>
    <div>
      <h3><strong>{props.names}</strong></h3>
      <h4>{props.price}</h4>
      <button onClick= {() => props.whenKegButtonClicked(props.id)}>See more details!</button>
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
  whenKegButtonClicked: PropTypes.func
}