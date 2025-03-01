import { Typography } from "@mui/material";
import React from "react";
import { PostResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { useNavigate } from "react-router-dom";

const SummarizedInquiryTitleText = ({ inquiryText, inquiryId, pt=1 }) => {
    const navigate = useNavigate();

    return <Typography
        variant="body2"
        onClick={() => {navigate(`/inquiry/detail/${inquiryId}`)}}
        sx={{
            pt: pt,
            fontWeight: "600",
            textAlign: "start",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "color 0.3s, transform 0.3s",
            fontSize: PostResponsiveFontSize1,
            "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
                transform: "scale(1.02)",
                cursor: "pointer",
            },
        }}
    >
        { inquiryText }
    </Typography>
}

export default SummarizedInquiryTitleText;