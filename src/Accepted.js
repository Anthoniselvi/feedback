import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function Accepted(value, id, updateAcceptedValue) {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  return (
    // ternary to show
    <div className="icon">
      {accepted ? (
        <p>Accepted</p>
      ) : rejected ? (
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
