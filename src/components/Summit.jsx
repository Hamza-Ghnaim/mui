import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";

const Summit = ({ theme }) => {
  return (
    <Box
      sx={{
        bgcolor: "#EFF1F7",
        mt: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <br />
      <Box sx={{ mt: 30, mb: 20 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ pl: 7.9, mb: 2 }}>
          Advanced Statistics
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme,
            color: theme.palette.neutral.main,
            fontWeight: 500,
          }}
        >
          Track how your links are performing across the web with
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme,
            color: theme.palette.neutral.main,
            ml: 8,
            fontWeight: 500,
          }}
        >
          our advanced statistics dashboard
        </Typography>
      </Box>
      <Box sx={{ mb: 80 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card
              sx={{
                width: "300px",
                position: "absolute",
                left: 210,
                bottom: -580,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Brand Recognition
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme,
                    color: theme.palette.neutral.main,
                  }}
                >
                  Build your brand's recognition and get detailed
                  <br />
                  insights on how your links are performing
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem={true}
            sx={{ borderColor: "blue", borderWidth: "4px" }}
          />
          <Grid item xs={4}>
            <Card
              sx={{
                width: "300px",
                position: "absolute",
                left: 535,
                bottom: -620,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Detailed Records
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme,
                    color: theme.palette.neutral.main,
                  }}
                >
                  Build your brand's recognition and get detailed
                  <br />
                  insights on how your links are performing
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Divider
            orientation="horizontal"
            flexItem={true}
            sx={{ borderColor: "blue", borderWidth: "20px" }}
          />
          <Grid item xs={4}>
            <Card
              sx={{
                width: "300px",
                position: "absolute",
                left: 860,
                bottom: -660,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Fully Customizable
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme,
                    color: theme.palette.neutral.main,
                  }}
                >
                  Build your brand's recognition and get detailed
                  <br />
                  insights on how your links are performing
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Summit;
