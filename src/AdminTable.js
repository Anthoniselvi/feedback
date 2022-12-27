import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./App.css";
import Rating from "@mui/material/Rating";

const getDataFromInputs = () => {
  const data = localStorage.getItem("inputs");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function AdminTable() {
  const [inputs, setInputs] = useState(getDataFromInputs());
  // const [acceptedOrRejected, setAcceptedOrRejected] = useState("");

  const updateAcceptance = (id, value) => {
    console.log("selected ID: " + id);
    const updatedArray = inputs.map((singleValue) => {
      console.log(id, singleValue.id);
      if (singleValue.id === id) {
        return {
          id: singleValue.id,
          name: singleValue.name,
          mobile: singleValue.mobile,
          rating: singleValue.rating,
          yesOrNo: singleValue.yesOrNo,
          comments: singleValue.comments,
          accepted: value,
        };
      } else {
        return singleValue;
      }
    });

    setInputs(updatedArray);
    localStorage.setItem("inputs", JSON.stringify(updatedArray));
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Table</h1>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>StarRating</th>
            <th>Recommended</th>
            <th>Comments</th>
            <th>Accepted</th>
          </tr>
        </thead>
        <tbody>
          {inputs.map((input) => (
            <tr key={input}>
              <td>{input.name}</td>
              <td>{input.mobile}</td>
              <td>
                <Rating value={input.rating} readOnly />
                {/* <Rating name="read-only" value={in} readOnly /> */}
              </td>
              <td>{input.yesOrNo}</td>
              <td>{input.comments}</td>
              <td>
                <div className="icon">
                  {input.accepted === "Accepted" ? (
                    <p className="text-accepted">Accepted</p>
                  ) : input.accepted === "Rejected" ? (
                    <p className="text-rejected">Rejected</p>
                  ) : (
                    <div className="icon">
                      <FaThumbsUp
                        style={{ color: "green", fontSize: "40px" }}
                        // value={acceptedOrRejected}
                        onClick={() => updateAcceptance(input.id, "Accepted")}
                      />
                      <FaThumbsDown
                        style={{ color: "red", fontSize: "40px" }}
                        // value={acceptedOrRejected}
                        onClick={() => updateAcceptance(input.id, "Rejected")}
                      />
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
