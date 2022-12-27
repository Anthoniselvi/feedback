import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function Accepted(value, id, params, updateAcceptedValue) {
  return (
    // ternary to show
    <div className="icon">
      {params.rows.accepted ? (
        <p>Accepted</p>
      ) : params.rows.accepted ? (
        <p>Rejected</p>
      ) : (
        <div>
          <FaThumbsUp
            style={{ color: "red", fontSize: "50px" }}
            value={value}
            onClick={() => updateAcceptedValue(id, "Accepted")}
          />
          <FaThumbsDown
            style={{ color: "red", fontSize: "50px" }}
            value={value}
            onClick={() => updateAcceptedValue(id, "Rejected")}
          />
        </div>
      )}
    </div>
  );
}
