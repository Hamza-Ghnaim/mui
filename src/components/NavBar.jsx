import React from "react";
import { ReactComponent as Logo } from "../images/Shortly.svg";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  ButtonGroup,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

const NavBar = ({ theme }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#ffffff" }}>
          <IconButton variant="h5" sx={{ mr: 4 }}>
            <Logo />
          </IconButton>
          <Stack
            display={"block"}
            direction={"row"}
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            <Button style={{ fontSize: "9px" }} color="inherit">
              Features
            </Button>
            <Button style={{ fontSize: "9px" }} color="inherit">
              Pricing
            </Button>
            <Button style={{ fontSize: "9px" }} color="inherit">
              Resources
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Button style={{ fontSize: "9px" }} size="small" color="inherit">
              Login
            </Button>
            <Button
              style={{ fontSize: "9px" }}
              size="small"
              variant="contained"
              color="inherit"
              sx={{ borderRadius: 28 }}
            >
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
