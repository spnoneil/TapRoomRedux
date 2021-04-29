import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
          whenKegDetailButtonClicked = {props.onKegSelection}
          names={keg.names}
          brewer={keg.brewer}
          price={keg.price}
          abv={keg.abv}
          ibu={keg.ibu}
          pintsLeft={keg.pintsLeft}
          id={keg.id}
          key={keg.id}/>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;