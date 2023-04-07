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
      <Divider
        orientation="horizontal"
        flexItem={true}
        sx={{
          borderColor: theme.palette.primary.main,
          borderWidth: "4px",
          width: 15,
          position: "absolute",
          left: 835.5,
          bottom: -515,
        }}
      />
      <Divider
        orientation="horizontal"
        flexItem={true}
        sx={{
          borderColor: theme.palette.primary.main,
          borderWidth: "4px",
          width: 15,
          position: "absolute",
          left: 511,
          bottom: -515,
        }}
      />
      <Box
        sx={{
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          position: "absolute",
          left: 270,
          bottom: -405,
          transform: "translateX(-50%)",
          // bottom: "-100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img
          src={require("../images/recognition.svg").default}
          alt="Circle Image"
          style={{
            width: "50%",
            height: "50%",
            clipPath: "circle(100%)", // make the image circular
            zIndex: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          position: "absolute",
          left: 915,
          bottom: -480,
          transform: "translateX(-50%)",
          // bottom: "-100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img
          src={require("../images/pencils.svg").default}
          alt="Circle Image"
          style={{
            width: "50%",
            height: "50%",
            clipPath: "circle(100%)", // make the image circular
            zIndex: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          position: "absolute",
          left: 596,
          bottom: -445,
          transform: "translateX(-50%)",
          // bottom: "-100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img
          src={require("../images/records.svg").default}
          alt="Circle Image"
          style={{
            width: "50%",
            height: "50%",
            clipPath: "circle(100%)", // make the image circular
            zIndex: 1,
          }}
        />
      </Box>
      {/* <img
        src={require("../images/pencils.svg").default}
        alt="Circle Image"
        style={{
          position: "absolute",
          left: 910,
          bottom: -471,
          transform: "translateX(-50%)",
          // bgcolor: theme.palette.primary.dark,
          clipPath: "circle(100%)", // make the image circular
          zIndex: 1,
        }}
      /> */}
      <br />
      <Box sx={{ mt: 30 }}>
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
      <Box sx={{ mb: 55 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card
              sx={{
                width: "300px",
                pt: 5,
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
          <Grid item xs={4}>
            <Card
              sx={{
                width: "300px",
                position: "absolute",
                pt: 5,
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
          <Grid item xs={4}>
            <Card
              sx={{
                width: "300px",
                position: "absolute",
                pt: 5,
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
