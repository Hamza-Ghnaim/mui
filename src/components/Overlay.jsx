import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import React from "react";

const Overlay = ({ theme }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        backgroundImage: `url(${
          require("../images/shortenDesktop.svg").default
        })`,
        height: "120px",
        left: "120px",
        transform: "translateY(100px)",

        bgcolor: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "1100px",
        borderRadius: 3,
        gap: 3,
      }}
    >
      <TextField
        label="Shorten a link here..."
        variant="outlined"
        sx={{
          width: "600px",
          "& input": {
            backgroundColor: "white",
            borderRadius: 3,
          },
        }}
      />
      <Button
        variant="contained"
        size="large"
        color="inherit"
        sx={{
          height: "56px",
          pr: 4,
          pl: 4,
          borderRadius: 3,
          bgcolor: theme.palette.primary.main,
          color: "#ffffff",
          boxShadow: 0,
          "&:hover": {
            bgcolor: "#b2ebf2",
            boxShadow: 0,
          },
        }}
      >
        Shorten It!
      </Button>
    </Box>
  );
};

export default Overlay;
