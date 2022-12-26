import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

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
  const [acceptedOrRejected, setAcceptedOrRejected] = useState("");
  // const [clicked, setClicked] = useState(true);
  // const onClick = () => setClicked(false);
  // const handleToggleAccepted = () => setClicked(!clicked);
  // const handleToggleRejected = () => setClicked(!clicked);
  const [showHideDemo1, setShowHideDemo1] = useState(false);
  const [showHideDemo2, setShowHideDemo2] = useState(false);
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
              <td>{input.rating}</td>
              <td>{input.yesOrNo}</td>
              <td>{input.comments}</td>
              <td>{input.accepted}</td>
              <td>
                {/* {clicked ? ( */}
                <div className="icon">
                  {showHideDemo1 ? (
                    <p>Accepted</p>
                  ) : (
                    <FaThumbsUp
                      style={{ color: "red", fontSize: "50px" }}
                      value={acceptedOrRejected}
                      // onClick={() => setAcceptedOrRejected("Accepted")}
                      // onClick={() => setClicked("Accepted")}
                      onClick={() => setShowHideDemo1("showHideDemo1")}
                    />
                  )}
                  {showHideDemo2 ? (
                    <p>Rejected</p>
                  ) : (
                    <FaThumbsDown
                      style={{ color: "red", fontSize: "50px" }}
                      value={acceptedOrRejected}
                      // onClick={() => setAcceptedOrRejected("Rejected")}
                      // onClick={onClick}
                      // onClick={() => setClicked("Rejected")}
                      onClick={() => setShowHideDemo2("showHideDemo2")}
                    />
                  )}
                </div>
                {/* ) : (
                  <p>Accepted</p>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
