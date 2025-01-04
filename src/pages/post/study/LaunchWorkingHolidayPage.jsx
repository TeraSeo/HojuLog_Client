import React, { useState, useRef, useEffect } from "react";
import { Paper, Typography, Grid,Box, Button } from "@mui/material";
import { postStudy } from "../../../service/PostService";
import { useNavigate } from "react-router-dom";
import { primaryColor } from "../../../constant/Color";
import WorkingHolidayMainInfoForm from "../../../components/forms/post/study/WorkingHolidayMainInfoForm";

const LaunchWorkingHolidayPage = () => {
  const [isMainValid, setIsMainValid] = useState(false);
  const [mainInfoData, setMainInfoData] = useState({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const mainInfoRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    if (isPreviewOpen) {
      handlePreview();
    }
  }, []);

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    const formData = new FormData();

    const studyData = {
      ...mainInfoData,
      "category": "유학",
      "subCategory": "워홀후기",
      "userId": userId,
      "blogContents": mainInfoData.blogContents.map((blog) => {
        if (blog.type === "image") {
          return {
            type: "image", 
            imageUrl: blog.file.name, 
          };
        } else if (blog.type === "description") {
          return {
            type: "description", 
            content: blog.content, 
            fontSize: blog.fontSize || 16, 
            fontWeight: blog.fontWeight || 400, 
          };
        }
        return blog;
      }),
    };

    formData.append(
      "studyPostDto",
      new Blob([JSON.stringify(studyData)], { type: "application/json" })
    );

    mainInfoData.blogContents
      .filter((blog) => blog.type === "image" && blog.file)
      .forEach((imageBlog) => {
        formData.append("images", imageBlog.file);
      });

    setIsLoading(true);
    const isCreated = await postStudy(formData);
        if (isCreated) {
            navigate("/");
        } else {
          setError("제출에 실패했습니다. 다시 제출 해주세요.");
          setIsLoading(false);
        }
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, margin: 4, maxWidth: 800, mx: "auto", backgroundColor: "#f7f9fc" }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ color: primaryColor }}>
        워홀 후기 정보 등록하기
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} ref={mainInfoRef}>
          <WorkingHolidayMainInfoForm
            onDataChange={(data) => setMainInfoData(data)}
            setIsFormValid={setIsMainValid}
          />
        </Grid>
        <Grid item xs={12} ref={submitRef}>
          <Box textAlign="right">
            <Button
              type="button"
              variant="outlined"
              sx={{ marginRight: 2, color: primaryColor, borderColor: primaryColor }}
              size="large"
              onClick={handlePreview}
            >
              미리보기
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: primaryColor, color: "#FFF" }}
              size="large"
              disabled={!isMainValid || isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "제출중..." : "제출"}
            </Button>

            {error && (
              <Typography color="error" align="center" sx={{ marginBottom: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LaunchWorkingHolidayPage;