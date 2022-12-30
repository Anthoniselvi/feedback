import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import BasicRating from "./BasicRating";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import axios from "axios";
import Validation from "./Validation";

// const getDataFromInputs = () => {
//   const data = localStorage.getItem("inputs");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };
export default function Form() {
  // const [inputs, setInputs] = useState([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState("");
  const [recommendation, setRecommendation] = useState("");
  // const [style, setStyle] = useState(false);
  // const [errors, setErrors] = useState({});
  // const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(name, mobile, rating, recommendation, comments);
    // setErrors(Validation(inputs));
    // setDataIsCorrect(true);

    axios
      .post("http://localhost:2000/feedback", {
        name: name,
        mobile: mobile,
        rating: parseInt(rating),
        recommendation: recommendation === "Yes" ? 1 : 0,
        comments: comments,
      })
      .then((response) => {
        console.log(response);
        navigate("/AdminTable");
      });

    // let newInputs = {
    //   id: uuidv4(),
    //   name,
    //   mobile,
    //   rating,
    //   recommendation,
    //   comments,
    //   accepted: "",
    //   editOrDelete: "",
    // };
    setName("");
    setMobile("");
    setRating("");
    setComments("");
    setRecommendation("");
    // localStorage.setItem("inputs", JSON.stringify([...inputs, newInputs]));
    // console.log(inputs);
    // navigate("/AdminPage");
    // navigate("/AdminTable");
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && dataIsCorrect) {
  //     alert("signup successfully");
  //     navigate("/admintable");
  //   }
  // }, [errors]);

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
        {/* {errors.name && <p className="error">{errors.name}</p>} */}
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
        {/* {errors.mobile && <p className="error">{errors.mobile}</p>} */}
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
        {/* {errors.rating && <p className="error">{errors.rating}</p>} */}
        <div className="row">
          <label>Will you recommend us to Friends?</label>
          <div className="icon">
            <FaThumbsUp
              style={{ color: recommendation === "yes" ? "green" : "black" }}
              value={recommendation}
              onClick={(e) => setRecommendation("yes")}
            />
            <FaThumbsDown
              style={{ color: recommendation === "no" ? "red" : "black" }}
              value={recommendation}
              onClick={(e) => setRecommendation("no")}
            />
          </div>
        </div>
        {/* {errors.yesOrNo && <p className="error">{errors.yesOrNo}</p>} */}
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
        {/* {errors.comments && <p className="error">{errors.comments}</p>} */}
        <button>Submit</button>
      </form>
    </div>
  );
}
