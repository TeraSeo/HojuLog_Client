import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../components/bar/CategorySidebar";
import { getWholeLikedPosts } from "../../service/PostService";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import { TitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import CommonLikedSummarizedPostBoxByPost from "../../components/box/post/CommonLikedSummarizedPostBoxByPost";

function LikedPostPage() {
    const [likedPostPageData, setLikedPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getWholeLikedPosts(page)
            .then((data) => {
                setLikedPostPageData({
                    posts: data.posts,
                    pageSize: data.pageSize,
                    currentPage: page
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (value) => {
        fetchPageData(value);
    };

    return (
        <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, fontSize: TitleResponsiveFontSize1 }}>
                        내가 좋아요 한 게시물
                    </Typography>

                    {likedPostPageData.posts.map((post, index) => (
                        <CommonLikedSummarizedPostBoxByPost post={post} />
                    ))}
                    
                    <PostPaginationBox totalPage={likedPostPageData.pageSize} currentPage={likedPostPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default LikedPostPage;