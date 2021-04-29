import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){

  const { keg, onPintSaleButtonClicked } = props;

  let pour;
  let pintsLeft;
  if (keg.pintsLeft !== 0) {
    pintsLeft = <p>PINTS REMAINING: {keg.pintsLeft}</p>
    pour = <button onClick={ () => onPintSaleButtonClicked() }>Sold a pint? CLICK HERE</button>
  } else {
    pour = <p>KEG IS TAPPED!</p>
  }

  return (
    <>
    <h2>Your keg awaits, milord!</h2>
    <h4>{keg.names}</h4>
    <p><em>FROM: {keg.brewer}</em></p>
    <p>PRICE PER PINT: ${keg.price}</p>
    <p>ABV: {keg.abv}%</p>
    <p>IBU: {keg.ibu}</p>
    <div>
      { pour }
    </div>
    <div>
      { pintsLeft }
    </div>
    <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onPintSaleButtonClicked: PropTypes.func
}

export default KegDetail;