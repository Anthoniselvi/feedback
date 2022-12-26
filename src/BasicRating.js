import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState(1);
  console.log(value);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography> */}
      <Rating
        name="simple-controlled"
        value={value}
        onClick={(e) => setValue(e.target.value)}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
