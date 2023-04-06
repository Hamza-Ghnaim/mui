import { Box, Typography } from "@mui/material";
import React from "react";

const Summit = ({ theme }) => {
  return (
    <Box sx={{ bgcolor: "#EFF1F7", mt: 20 }}>
      <br />
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 30 }}>
        Advanced Statistics
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
    </Box>
  );
};

export default Summit;
