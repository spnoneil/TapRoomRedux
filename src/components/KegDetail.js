import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){

  const { keg } = props;

  return (
    <>
    <h2>Your keg awaits, milord!</h2>
    <h4>{keg.names}</h4>
    <p><em>FROM: {keg.brewer}</em></p>
    <p>PRICE PER PINT: {keg.price}</p>
    <p>ABV: {keg.abv}%</p>
    <p>IBU: {keg.ibu}</p>
    {/* TODO: EDIT */}
    {/* TODO: DELETE */}
    <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;