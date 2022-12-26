import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function Accepted(value, id, updateAcceptedValue) {
  return (
    // ternary to show
    <div className="icon">
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
  );
}
