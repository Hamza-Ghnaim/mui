import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const Header = ({ theme }) => {
  return (
    <Box>
      <Grid container spacing={2}>
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
              <Typography variant="h2" fontWeight="bold" sx={{ mt: 9, mb: 1 }}>
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
                width: "48%",
                maxWidth: "100%",
                position: "absolute",
                right: -110,
                bottom: 90,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;



<Grid item xs={12}>
              <Paper elevation={0}>
                <img
                  src={require("../images/working.svg").default}
                  alt="My Image"
                  style={{
                    width: "120%",
                    maxWidth: "150%",
                    position: "absolute",
                    right: -120,
                    bottom: 190,
                  }}
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
                    variant="h4"
                    fontWeight="bold"
                    sx={{ mt: 4, mb: 1 }}
                  >
                    More than just
                    <br />
                    shorter links
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: theme.palette.neutral.main,
                      fontWeight: 500,
                    }}
                  >
                    {isSmallScreen
                      ? `Build your brand's recognition and\nget detailed insights on how your\nlinks are performing`
                      : `Build your brand's recognition and get detailed\ninsights on how your links are performing`}
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