import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const Header = ({ theme }) => {
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box>
      <Grid container spacing={2}>
        {isLargeScreen ? (
          <>
            <Grid item xs={6}>
              <Card
                sx={{
                  minWidth: 275,
                  boxShadow: "none",
                  borderRadius: "none",
                  mt: 3,
                  ml: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    sx={{ mt: 9, mb: 1 }}
                  >
                    More than just
                    <br />
                    shorter links
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: theme,
                      color: theme.palette.neutral.main,
                    }}
                  >
                    Build your brand's recognition and get detailed
                    <br />
                    insights on how your links are performing
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="large"
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
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0}>
                <img
                  src={require("../images/working.svg").default}
                  alt="My Image"
                  style={{
                    width: "47%",
                    maxWidth: "100%",
                    position: "absolute",
                    right: -120,
                    bottom: 240,
                  }}
                />
              </Paper>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Paper elevation={0}>
                <img
                  src={require("../images/working.svg").default}
                  alt="My Image"
                  style={{ maxWidth: "100%" }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Card
                sx={{
                  minWidth: 275,
                  boxShadow: "none",
                  borderRadius: "none",
                  backgroundColor: "transparent",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 1 }}
                  >
                    More than just
                    <br />
                    shorter links
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 2, color: theme }}>
                    Build your brand's recognition and get detailed
                    <br />
                    insights on how your links are performing
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{
                      pr: 4,
                      pl: 4,
                      borderRadius: 28,
                      bgcolor: theme.palette.primary.main,
                      color: "#ffffff",
                    }}
                  >
                    Get Started
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Header;
