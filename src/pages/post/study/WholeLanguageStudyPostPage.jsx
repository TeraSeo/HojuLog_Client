import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getLanguageStudyPostsByPage } from "../../../service/PostService";
import { getPaginationRange } from "../../../service/PageService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import StudyPostBox from "../../../components/box/post/study/StudyPostBox";

const WholeLanguageStudyPostPage = () => {
    const [postPageData, setPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getLanguageStudyPostsByPage(page)
            .then((data) => {
                setPostPageData({
                    posts: data.posts,
                    pageSize: data.pageSize,
                    currentPage: page
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (event, value) => {
        fetchPageData(value);
    };

    const [startPage, endPage] = getPaginationRange(postPageData.currentPage, postPageData.pageSize);

    return (
        <Box sx={{ py: "10px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        어학연수후기
                    </Typography>

                    {postPageData.posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <Box>
                                <StudyPostBox post={post} />
                            </Box>
                            {index < postPageData.posts.length - 1 && (
                                <Divider sx={{ my: 2 }} />
                            )}
                        </React.Fragment>
                    ))}

                    <PostPaginationBox totalPage={endPage - startPage + 1} currentPage={postPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeLanguageStudyPostPage;