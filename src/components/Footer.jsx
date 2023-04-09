import React from "react";
import { Box, Grid, Typography, IconButton, Stack } from "@mui/material";
import { ReactComponent as Logo } from "../images/Shortly.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Pinitrist } from "../images/pentrest.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";

const Footer = ({ theme }) => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.neutral.contrastText,
        pb: 10,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={3.5}>
          <IconButton variant="h5" sx={{ ml: 16, mt: 3 }}>
            <Logo color="white" />
          </IconButton>{" "}
        </Grid>
        <Grid
          item
          xs={1.5}
          sx={{
            mt: 5,
            ml: 12,
          }}
        >
          <Typography fontWeight="bold" sx={{ color: "white", mb: 3 }}>
            Features
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Link Shortening
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Branded Links
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Analytics
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={1.5} sx={{ mt: 5 }}>
          <Typography fontWeight="bold" sx={{ color: "white", mb: 3 }}>
            Resources
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Blog
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Developers
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Support
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={1.5} sx={{ mt: 5 }}>
          <Typography fontWeight="bold" sx={{ color: "white", mb: 3 }}>
            Company
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              About
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Our Team
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Careers
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.neutral.main,
                fontWeight: 700,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              size="medium"
            >
              Contacts
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={1} sx={{ mt: 5 }}>
          <Stack direction="row" spacing={0.5}>
            <IconButton variant="h5">
              <Facebook color="white" />
            </IconButton>
            <IconButton variant="h5">
              <Twitter color="white" />
            </IconButton>
            <IconButton variant="h5">
              <Pinitrist color="white" />
            </IconButton>
            <IconButton variant="h5">
              <Instagram color="white" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
