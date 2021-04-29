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
      price: parseInt(event.target.price.value),
      abv: parseInt(event.target.abv.value),
      ibu: parseInt(event.target.ibu.value),
      pintsLeft: 124,
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

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm