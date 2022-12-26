import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import BasicRating from "./BasicRating";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const getDataFromInputs = () => {
  const data = localStorage.getItem("inputs");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export default function Form() {
  const [inputs, setInputs] = useState(getDataFromInputs());
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState("");
  const [yesOrNo, setYesOrNo] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(name, mobile, rating, yesOrNo, comments);
    let newInputs = {
      id: uuidv4(),
      name,
      mobile,
      rating,
      yesOrNo,
      comments,
      accepted: "",
    };
    setName("");
    setMobile("");
    setRating("");
    setComments("");
    setYesOrNo("");
    localStorage.setItem("inputs", JSON.stringify([...inputs, newInputs]));
    console.log(inputs);
    // navigate("/AdminPage");
    navigate("/AdminTable");
  };
  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmitForm}>
        <div className="row">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
          />
        </div>
        <div className="row">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your Mobile Number"
          />
        </div>
        {/* <BasicRating value={rating} /> */}
        <div className="row">
          <label>How would you rate our service?</label>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            {/* <Typography component="legend">Controlled</Typography> */}
            <Rating
              name="simple-controlled"
              value={rating}
              onClick={(e) => setRating(e.target.value)}
              onChange={(e, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
        </div>
        <div className="row">
          <label>Will you recommend us to Friends?</label>
          <div className="icon">
            <FaThumbsUp
              style={{ color: "red", fontSize: "50px" }}
              value={yesOrNo}
              onClick={(e) => setYesOrNo("yes")}
              // onChange={(e, newValue) => {
              //   setYes(newValue);
              // }}
            />
            <FaThumbsDown
              style={{ color: "red", fontSize: "50px" }}
              value={yesOrNo}
              onClick={(e) => setYesOrNo("no")}
            />
          </div>
        </div>
        <div className="row">
          <label>Comments</label>
          <textarea
            type="text"
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Enter your Comments"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
