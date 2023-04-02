import React from "react";
import { ReactComponent as Logo } from "../images/Shortly.svg";
import { AppBar, Toolbar, Box, Button, Stack, IconButton } from "@mui/material";

const NavBar = ({ theme }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
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
            <Button
              sx={{ fontSize: "10px", color: theme.palette.neutral.main }}
            >
              Features
            </Button>
            <Button
              sx={{ fontSize: "10px", color: theme.palette.neutral.main }}
            >
              Pricing
            </Button>
            <Button
              sx={{ fontSize: "10px", color: theme.palette.neutral.main }}
            >
              Resources
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Button
              sx={{ fontSize: "10px", color: theme.palette.neutral.main }}
              size="medium"
            >
              Login
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="inherit"
              sx={{
                fontSize: "10px",
                borderRadius: 28,
                bgcolor: theme.palette.primary.main,
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#bbdefb",
                  color: "#ffffff",
                },
              }}
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
