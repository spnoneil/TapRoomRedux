import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="names"
          placeholder="Name of beverage"
          required />
        <input
          type="text"
          name="brewer"
          placeholder="Name of Brewer"
          required />
        <input
          type="number"
          name="price"
          placeholder="Price per pint"
          required />
        <input
          type="number"
          name="abv"
          placeholder="ABV in %"
          min={0}
          max={100} />
        <input
          type="number"
          name="ibu"
          placeholder="IBU"
          min={0} />
        <input
          type="number"
          name="pintsLeft"
          placeholder="Size in pints (124 standard)"
          min={0} />
          <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;