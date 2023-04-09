import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import React from "react";

const Boost = ({ theme }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        transform: "translateY(-7.5%)",
        backgroundImage: `url(${
          require("../images/boostDesktop.svg").default
        })`,
        height: "250px",
        bgcolor: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        fontWeight="bold"
        sx={{ mb: 2, color: "white" }}
      >
        Boost your links today
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="inherit"
        sx={{
          pr: 4,
          pl: 4,
          borderRadius: 28,
          bgcolor: theme.palette.primary.main,
          color: "#ffffff",
          boxShadow: 0,
          "&:hover": {
            bgcolor: "#b2ebf2",
            boxShadow: 0,
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Boost;
