import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

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
    };
  });

  return rowsObject;
};

const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "mobile", headerName: "Mobile Number", width: 100 },
  { field: "rating", headerName: "Service Rating", width: 100 },
  { field: "recommended", headerName: "Recommended", width: 100 },
  { field: "comments", headerName: "Comments", width: 100 },
  { field: "accepted", headerName: "Accepted", width: 100 },
];

export default function AdminPage() {
  const [inputs, setInputs] = useState(getDataFromInputs());

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={getDataFromInputs()}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
