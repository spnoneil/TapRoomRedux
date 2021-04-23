import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      names: event.target.names.value,
      brewer: event.target.brewer.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      ibu: event.target.ibu.value,
      id: v4()
    });
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add New Keg" />
    </>
  )
}

newKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm