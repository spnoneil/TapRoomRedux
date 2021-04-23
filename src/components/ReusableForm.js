import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="names"
          placeholder="Name of beverage" />
        <input
          type="text"
          name="brewer"
          placeholder="Name of Brewer" />
        <input
          type="number"
          name="price"
          placeholder="Price per pint" />
        <input
          type="number"
          name="ABV"
          placeholder="ABV in %"
          min={0}
          max={100} />
        <input
          type="number"
          name="IBU"
          placeholder="IBU"
          min={0} />
          <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.PropTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;