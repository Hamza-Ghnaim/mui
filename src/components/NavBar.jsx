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
  Divider,
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
          <IconButton
            variant="h5"
            sx={{
              mr: 3,
            }}
          >
            <Logo />
          </IconButton>
          {isMobile ? (
            <>
              <IconButton
                onClick={() => setOpenModal(!openModal)}
                sx={{ outline: "none", ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "41%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "86vw",
                    height: "58vh",
                    maxWidth: 400,
                    bgcolor: theme.palette.primary.dark,
                    color: "#ffffff",
                    borderRadius: 3,
                  }}
                >
                  <List>
                    <ListItem
                      Button
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <ListItemText primary="Features" />
                    </ListItem>
                    <ListItem
                      Button
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <ListItemText primary="Pricing" />
                    </ListItem>
                    <ListItem
                      Button
                      sx={{
                        mb: 1,
                        textAlign: "center",
                      }}
                    >
                      <ListItemText primary="Resources" />
                    </ListItem>
                    <Divider
                      sx={{ backgroundColor: theme.palette.neutral.main }}
                      variant="middle"
                      light
                    />
                    <ListItem
                      Button
                      sx={{
                        mt: 1,
                        textAlign: "center",
                      }}
                    >
                      <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem
                      Button
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="inherit"
                        sx={{
                          pr: 12,
                          pl: 12,
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
                  sx={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: theme.palette.neutral.main,
                    "&:hover": {
                      color: "black",
                      bgcolor: "#ffffff",
                    },
                  }}
                >
                  Features
                </Button>
                <Button
                  sx={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: theme.palette.neutral.main,
                    "&:hover": {
                      color: "black",
                      bgcolor: "#ffffff",
                    },
                  }}
                >
                  Pricing
                </Button>
                <Button
                  sx={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: theme.palette.neutral.main,
                    "&:hover": {
                      color: "black",
                      bgcolor: "#ffffff",
                    },
                  }}
                >
                  Resources
                </Button>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <Button
                  sx={{
                    fontSize: "10px",
                    color: theme.palette.neutral.main,
                    fontWeight: 700,
                    "&:hover": {
                      color: "black",
                      bgcolor: "#ffffff",
                    },
                  }}
                  size="medium"
                >
                  Login
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  color="inherit"
                  sx={{
                    fontWeight: 700,
                    fontSize: "10px",
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
