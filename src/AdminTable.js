import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./App.css";
import Rating from "@mui/material/Rating";
import axios from "axios";

// const getDataFromInputs = () => {
//   const data = localStorage.getItem("inputs");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

export default function AdminTable() {
  const [inputs, setInputs] = useState([]);
  // const [acceptedOrRejected, setAcceptedOrRejected] = useState("");

  const fetchAllFeedbacks = () => {
    axios.get("http://localhost:2000/feedback").then((response) => {
      // console.log(response);
      console.log(response.data);
      setUpdatedFeedbacks(response.data);
    });
  };

  const updateAcceptance = (feedbackToUpdate, value) => {
    axios
      .put("http://localhost:2000/feedback", {
        id: parseInt(feedbackToUpdate.id),
        name: feedbackToUpdate.name,
        mobile: feedbackToUpdate.mobile,
        rating: parseInt(feedbackToUpdate.rating),
        recommendation: feedbackToUpdate.recommendation === "Yes" ? 1 : 0,
        comments: feedbackToUpdate.comments,
        status: value,
      })
      .then((response) => {
        fetchAllFeedbacks();
      });
  };

  const deleteRow = (idToDelete) => {
    console.log(idToDelete);
    console.log(parseInt(idToDelete));
    axios
      .delete("http://localhost:2000/feedback", {
        data: {
          id: parseInt(idToDelete),
        },
      })
      .then((response) => {
        console.log(response);
        fetchAllFeedbacks();
      });
  };

  // const updateAcceptance = (id, value) => {
  //   console.log("selected ID: " + id);
  //   const updatedArray = inputs.map((singleValue) => {
  //     console.log(id, singleValue.id);
  //     if (singleValue.id === id) {
  //       return {
  //         id: singleValue.id,
  //         name: singleValue.name,
  //         mobile: singleValue.mobile,
  //         rating: singleValue.rating,
  //         recommendation: singleValue.recommendation,
  //         comments: singleValue.comments,
  //         accepted: value,
  //         editOrDelete: "",
  //       };
  //     } else {
  //       return singleValue;
  //     }
  //   });

  //   setInputs(updatedArray);
  //   localStorage.setItem("inputs", JSON.stringify(updatedArray));
  // };

  // const deleteRow = (id) => {
  //   const filteredRow = inputs.filter((input) => {
  //     return input.id !== id;
  //   });
  //   setInputs(filteredRow);
  //   localStorage.setItem("inputs", JSON.stringify(filteredRow));
  // };

  const setUpdatedFeedbacks = (responseData) => {
    const feedbackList = responseData.map((singleFeedback) => {
      return {
        id: singleFeedback.id,
        name: singleFeedback.name,
        mobile: singleFeedback.mobile,
        rating: singleFeedback.rating,
        recommendation: singleFeedback.recommendation === 0 ? "No" : "Yes",
        comments: singleFeedback.comments,
        status: singleFeedback.status,
      };
    });

    setInputs(feedbackList);
  };

  useEffect(() => {
    fetchAllFeedbacks();
  }, []);

  return (
    <div className="feedback-container">
      <h1>Feedback Table</h1>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>StarRating</th>
            <th>Recommendated</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {inputs.map((input) => (
            <tr key={input}>
              <td>{input.name}</td>
              <td>{input.mobile}</td>
              <td>
                <Rating value={input.rating} readOnly />
              </td>
              <td>{input.recommendation}</td>
              <td>{input.comments}</td>
              <td>
                <div className="icon">
                  {input.status === "Accepted" ? (
                    <p className="text-accepted">Accepted</p>
                  ) : input.status === "Rejected" ? (
                    <p className="text-rejected">Rejected</p>
                  ) : (
                    <div className="icon">
                      <FaThumbsUp
                        style={{
                          color: "green",
                          fontSize: "40px",
                          cursor: "pointer",
                        }}
                        // value={acceptedOrRejected}
                        onClick={() => updateAcceptance(input, "Accepted")}
                      />
                      <FaThumbsDown
                        style={{
                          color: "red",
                          fontSize: "40px",
                          cursor: "pointer",
                        }}
                        // value={acceptedOrRejected}
                        onClick={() => updateAcceptance(input, "Rejected")}
                      />
                    </div>
                  )}
                </div>
              </td>
              <td>
                <div>
                  {/* <p onClick={(e) => editEvent(e, singleEvent.id)}>Edit</p> */}
                  <MdDelete
                    className="delete-btn"
                    onClick={(e) => deleteRow(input.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
