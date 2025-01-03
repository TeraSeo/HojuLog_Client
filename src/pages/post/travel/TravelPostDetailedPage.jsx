import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificTravelPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import TravelDetailBox from '../../../components/box/post/travel/TravelDetailBox';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';

const TravelPostDetailedPage = () => {
  const { postId } = useParams();
  const [travelPostData, setTravelPostData] = useState();

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificTravelPost(postId)
      .then((data) => {
        setTravelPostData(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  if (!travelPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: { md: "120px", sm: "40px", xs: "0px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <TravelDetailBox imageUrls={travelPostData.imageUrls} description={travelPostData.description} title={travelPostData.title} subCategory={travelPostData.subCategory} postId={travelPostData.postId} contact={travelPostData.contact} email={travelPostData.email} createdAt={travelPostData.createdAt} price={travelPostData.price} rate={travelPostData.rate} createdDate={travelPostData.createdAt} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText likeCounts={22} pl={0} />
          <Box sx={{ cursor: "pointer" }}>
              <CommentsCountsText commentsCounts={10} />
          </Box>
          <ViewCountsText viewCounts={220} />
      </Box>

      { travelPostData.location ? <EmbeddedMap mapUrl={travelPostData.location} /> : <></> }

      <Box sx={{ mt: 8, mb: 15 }}>
          <PostCommentBox postId={postId} />
      </Box>
    </Box>
  );
};

export default TravelPostDetailedPage;
