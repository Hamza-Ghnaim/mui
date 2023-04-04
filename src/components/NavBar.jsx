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
  Modal,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import "./navbar.css";

const NavBar = ({ theme }) => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery("(max-width: 375px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} className="appbar">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <IconButton variant="h5" sx={{ mr: 3 }}>
            <Logo />
          </IconButton>
          {isMobile ? (
            <>
              <IconButton
                onClick={() => setOpenModal(true)}
                sx={{ outline: "none", ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80vw",
                    maxWidth: 400,
                    bgcolor: theme.palette.primary.dark,
                    color: "#ffffff",
                  }}
                >
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
                </Box>
              </Modal>
            </>
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
    </Box>
  );
};

export default NavBar;
