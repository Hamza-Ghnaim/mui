import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  Divider,
  Stack,
  Grid,
} from "@mui/material";
import React from "react";

const Summit = ({ theme }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
      {isSmallScreen ? (
        <>
          <Box sx={{ mt: 30 }}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                position: "absolute",
                left: "157px",
                transform: "translateY(150px)",
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
                left: "157px",
                transform: "translateY(783px)",
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
                left: "157px",
                transform: "translateY(455px)",
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
            <Divider
              orientation="vertical"
              flexItem={true}
              sx={{
                borderColor: theme.palette.primary.main,
                borderWidth: "4px",
                // width: 5,
                height: 50,
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                transform: "translateY(397px)",
                // bottom: -515,
              }}
            />
            <Divider
              orientation="vertical"
              flexItem={true}
              sx={{
                borderColor: theme.palette.primary.main,
                borderWidth: "4px",
                // width: 5,
                height: 50,
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                transform: "translateY(725px)",
                // bottom: -515,
              }}
            />
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 2, textAlign: "center" }}
            >
              Advanced Statistics
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme,
                color: theme.palette.neutral.main,
                fontWeight: 500,
                textAlign: "center",
                mb: 10,
              }}
            >
              Track how your links are performing
              <br />
              across the web with our advanced
              <br />
              statistics dashboard
            </Typography>
            <Stack
              spacing={12.5}
              direction="column"
              alignItems="center"
              sx={{ mb: 10, textAlign: "center" }}
            >
              <Card sx={{ width: "300px", pt: 5 }}>
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
                    Boost your brand recognition with each click. Genericlinks
                    don't <br />
                    mean a thing.Branded links help <br />
                    instil confidencein your content.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ width: "300px", pt: 5 }}>
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
                    Gain insights into who's clicing <br />
                    your links. Knowing when <br />
                    and where people engage with your <br />
                    content helpsinform better <br /> decisions
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ width: "300px", pt: 5 }}>
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
                    Improved brand awarness and <br />
                    content diecoverability through <br />
                    customizable links. supersearching <br />
                    audiance engagement.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </>
      ) : (
        <>
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
                      Boost your brand recognition with each click. Genericlinks
                      don't mean a thing.Branded links help instil confidencein
                      your content.
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
                      Gain insights into who's clicing your links. Knowing when
                      and where people engage with your content helpsinform
                      better decisions
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
                      Improved brand awarness and content diecoverability
                      through customizable links. supersearching audiance
                      engagement.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Summit;
