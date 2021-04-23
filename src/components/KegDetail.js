import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){

  const { keg } = props;

  return (
    <>
    <h2>Your keg awaits, milord!</h2>
    <h4>{keg.names}</h4>
    <p><em>FROM: {keg.brewer}</em></p>
    <p>PRICE PER PINT: ${keg.price}</p>
    <p>ABV: {keg.abv}%</p>
    <p>IBU: {keg.ibu}</p>
    <p>PINTS REMAINING: {keg.pintsLeft}</p>
    {/* <button onClick={() => whenPintSaleButtonClicked(keg.id)}>Sold a pint? CLICK HERE</button> */}
    <button onClick={() => {decrementPint(keg)}}>Sold a pint? CLICK HERE</button>
    {/* TODO: EDIT */}
    {/* TODO: DELETE */}
    <hr/>
    </>
  );
}

const decrementPint = (keg) => {
  if (keg.pintsLeft > 0) {
    return keg.pintsLeft--;
  } else {
    keg.pintsLeft = "SOLD OUT"
  }
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  whenPintSaleButtonClicked: PropTypes.func
}

export default KegDetail;