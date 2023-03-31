import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  ButtonGroup,
  Button,
  Stack,
} from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ mr: 4 }}>
            Shortly
          </Typography>
          <Stack
            display={"block"}
            direction={"row"}
            spacing={3}
            sx={{ flexGrow: 1 }}
          >
            <ButtonGroup variant="text">
              <Button style={{ fontSize: "9px" }} color="inherit">
                Features
              </Button>
              <Button style={{ fontSize: "9px" }} color="inherit">
                Pricing
              </Button>
              <Button style={{ fontSize: "9px" }} color="inherit">
                Resources
              </Button>
            </ButtonGroup>
          </Stack>
          <Stack direction={"row"} spacing={4}>
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
