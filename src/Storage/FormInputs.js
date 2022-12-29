import { v4 as uuidv4 } from "uuid";

const saveFormInputs = (inputToSave) => {
  // Get All Inputs
  const inputs = getAllInputs();

  // Add this new entry to existing array

  let newInputs = {
    id: uuidv4(),
    name: inputToSave.name,
    mobile: inputToSave.mobile,
    rating: inputToSave.rating,
    yesOrNo: inputToSave.yesOrNo,
    comments: inputToSave.comments,
    accepted: "",
    editOrDelete: "",
  };

  // Save the new Array into local storage
  localStorage.setItem("inputs", JSON.stringify([...inputs, newInputs]));
};

const getAllInputs = () => {
  // Get Total Inputs
  const data = localStorage.getItem("inputs");

  // Return total Inputs

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export { saveFormInputs, getAllInputs };
