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
          <Card sx={{ minWidth: 275, boxShadow: "none", borderRadius: "none" }}>
            <CardContent>
              <Typography variant="h2" fontWeight="bold" sx={{ mt: 9, mb: 1 }}>
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
                width: "50%",
                maxWidth: "100%",
                position: "absolute",
                right: -120,
                bottom: 60,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
