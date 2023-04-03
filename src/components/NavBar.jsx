import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as Logo } from "../images/Shortly.svg";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Stack,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import "./navbar.css";

const NavBar = ({ theme }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} className="appbar">
        <Toolbar sx={{ backgroundColor: "#ffffff" }}>
          <IconButton variant="h5" sx={{ mr: 4 }}>
            <Logo />
          </IconButton>
          {isMobile ? (
            <IconButton onClick={toggleDrawer(true)} sx={{ outline: "none" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
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
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          <ListItem Button>
            <ListItemText primary="Features" />
          </ListItem>
          <ListItem Button>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem Button>
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem Button>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem Button>
            <Button
              variant="contained"
              color="inherit"
              sx={{
                borderRadius: 28,
                bgcolor: theme.palette.primary.main,
                color: "#ffffff",
              }}
            >
              Sign Up
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
