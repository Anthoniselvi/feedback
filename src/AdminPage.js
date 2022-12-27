import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Accepted from "./Accepted";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const getDataFromInputs = () => {
  var initialData = [];

  const dataString = localStorage.getItem("inputs");

  if (dataString) {
    initialData = JSON.parse(dataString);
  } else {
    initialData = [];
  }
  // };

  const rowsObject = initialData.map((singleRow) => {
    return {
      id: singleRow.id,
      name: singleRow.name,
      mobile: singleRow.mobile,
      rating: singleRow.rating,
      recommended: singleRow.yesOrNo,
      comments: singleRow.comments,
      accepted: singleRow.accepted,
    };
  });

  return rowsObject;
};

const updateAcceptedValue = (id, params, value) => {
  let newValue = {
    id: params.rows.id,
    value: params.rows.accepted,
  };
  localStorage.setItem("inputs", JSON.stringify(newValue));
  // update new value for that row with 'id'
  // - in state and localstorage
};

const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "mobile", headerName: "Mobile Number", width: 100 },
  { field: "rating", headerName: "Service Rating", width: 100 },
  { field: "recommended", headerName: "Recommended", width: 100 },
  { field: "comments", headerName: "Comments", width: 100 },
  {
    field: "accepted",
    headerName: "Accepted",
    width: 100,
    renderCell: (params) => {
      return (
        <Accepted
          value={params.rows.accepted}
          id={params.rows.id}
          // updateAcceptedValue={() =>
          //   updateAcceptedValue(params.rows.id, "Accepted")
          // }
          updateAcceptedValue={updateAcceptedValue}
        />
      );
    },
  },
];

export default function AdminPage() {
  const [inputs, setInputs] = useState(getDataFromInputs());
  const [acceptedOrRejected, setAcceptedOrRejected] = useState("");
  console.log(acceptedOrRejected);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={getDataFromInputs()}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      {/* <Accepted /> */}
    </div>
  );
}
