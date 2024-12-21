import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getJobPostsByPage } from "../../../service/PostService";
import JobPostBox from "../../../components/box/post/job/JobPostBox";

function WholeJobPostPage() {
    const [jobPageData, setJobPageData] = useState({ posts: [], pageSize: 0, currentPage: 0, currentPagePostsCount: 0 });

    useEffect(() => {
        getJobPostsByPage(1)
            .then((data) => setJobPageData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <Box sx={{ py: "10px", px: {md: "120px", sm: "40px", xs: "0px"} }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        구인구직
                    </Typography>
                    
                    {jobPageData.posts.map((post, index) => (
                        <Box key={index}>
                            <JobPostBox post={post} />
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeJobPostPage;