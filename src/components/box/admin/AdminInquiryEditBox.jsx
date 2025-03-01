import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { replyInquiry } from "../../../service/AdminService";
import ScrollableImageGallery from "../post/ScrollableImageGallery";
import { PostResponsiveFontSize1, PostTitleFontSize, SubTitleResponsiveFontSize1 } from "../../../constant/FontSizeResponsive";
import PostProfileBox from "../post/PostProfileBox";

const AdminInquiryEditBox = ({ inquiryData }) => {
    const navigate = useNavigate();
    const [responseText, setResponseText] = useState(inquiryData.response);

    const handleResponseChange = (e) => {
        setResponseText(e.target.value);
    };

    const handleSubmitResponse = async () => {
        if (responseText !== "") {
            const isUpdated = await replyInquiry(inquiryData.id, responseText);
            if (isUpdated) {
                navigate("/admin");
            }
        }
    };

    return (
        <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: "8px", maxWidth: "600px", mx: "auto" }}>
            <Typography variant="h5" gutterBottom>문의 답변</Typography>

            <ScrollableImageGallery imageUrls={inquiryData.imageUrls} />

            <PostProfileBox userId={inquiryData.userId} />

            <Typography
                variant="body2"
                sx={{
                    fontSize: PostTitleFontSize,
                    fontWeight: "400",
                    textAlign: "start",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    overflow: "hidden",
                    width: "100%",
                }}
            >
                {inquiryData.title || "No Title Available"}
            </Typography>

            <Box>
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: "600",
                        textAlign: "start",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        fontSize: SubTitleResponsiveFontSize1,
                    }}
                >
                    문의내역
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: "400",
                        textAlign: "start",
                        pt: 1,
                        whiteSpace: "pre-line",
                        wordWrap: "break-word",
                        overflow: "auto",
                        width: "100%",
                        fontSize: PostResponsiveFontSize1,
                    }}
                >
                    {inquiryData.description}
                </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: "600", mb: 1 }}>답변 작성</Typography>
                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    value={responseText}
                    onChange={handleResponseChange}
                    placeholder="답변을 입력하세요..."
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleSubmitResponse}
                >
                    답변 제출
                </Button>
            </Box>
        </Box>
    );
};

export default AdminInquiryEditBox;
