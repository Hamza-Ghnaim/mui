import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Button,
  Stack,
} from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Shortly</Typography>
          <Link href="#">Link</Link>
          <Stack direction={"row"} spacing={2} sx={{ flexGrow: 1 }}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">Resources</Button>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Button color="inherit">Login</Button>
            <Button variant="contained" color="inherit">
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
