import { Box, Button, useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";

import React from "react";

const Overlay = ({ theme }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "absolute",
        backgroundImage: isSmallScreen
          ? `url(${require("../images/shortenMobile.svg").default})`
          : `url(${require("../images/shortenDesktop.svg").default})`,
        height: isSmallScreen ? "150px" : "120px",
        left: !isSmallScreen && "120px",
        transform: "translateY(100px)",

        bgcolor: theme.palette.primary.dark,
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "center",
        // alignContent: "center  ",
        alignItems: "center",
        width: isSmallScreen ? "350px" : "1100px",
        borderRadius: 3,
        gap: 3,
      }}
    >
      <TextField
        label="Shorten a link here..."
        variant="outlined"
        sx={{
          width: isSmallScreen ? "90%" : "600px",
          "& input": {
            backgroundColor: "white",
            borderRadius: 3,
            height: isSmallScreen && "15px",
          },
        }}
      />
      <Button
        variant="contained"
        size="large"
        color="inherit"
        sx={{
          width: isSmallScreen && "90%",
          height: isSmallScreen ? "56px" : "56px",
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
