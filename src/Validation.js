// import React from "react";

const Validation = (inputs) => {
  let errors = {};

  if (!inputs.name) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z]+$/.test(inputs.name)) {
    errors.name = "Name is invalid";
  }

  if (!inputs.mobile) {
    errors.mobile = "Phone Number is required";
  } else if (inputs.mobile.length < 10) {
    errors.mobile = "Mobile Number must be in 10 character";
  }

  if (!inputs.rating) {
    errors.rating = "Kindly give the rate for our service";
  }

  if (!inputs.comments) {
    errors.comments = "Kindly give your Comments";
  }

  return errors;
};
export default Validation;
