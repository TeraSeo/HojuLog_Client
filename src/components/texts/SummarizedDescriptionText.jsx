import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const SummarizedDescriptionText = ({ isPublic = true, description, pl = 1 }) => {
  return (
    <Box sx={{ pl: pl }}>
      <Typography
        sx={{
          color: "gray",
          fontStyle: "italic",
          userSelect: "none",
          fontSize: ComponentTextResponsiveFontSize1,
          filter: isPublic ? "none" : "blur(5px)", 
          transition: "filter 0.3s ease-in-out", 
        }}
      >
        {description || ""}
      </Typography>
    </Box>
  );
};

export default SummarizedDescriptionText;
