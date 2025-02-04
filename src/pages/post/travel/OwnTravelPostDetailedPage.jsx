import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificTravelPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import TravelDetailBox from '../../../components/box/post/travel/TravelDetailBox';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import UpdatePostButton from '../../../components/buttons/UpdatePostButton';
import RemovePostButton from '../../../components/buttons/RemovePostButton';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import { PostResponsiveFontSize2 } from '../../../constant/FontSizeResponsive';
import { DetailedPostIconResponsiveSize2 } from '../../../constant/IconSizeResponsive';

const OwnTravelPostDetailedPage = () => {
  const { postId } = useParams();
  const [travelPostData, setTravelPostData] = useState();
  const commentBoxRef = useRef(null);
  
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

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            <TravelDetailBox userId={travelPostData.userId} title={travelPostData.title} subCategory={travelPostData.subCategory} postId={travelPostData.postId} createdAt={travelPostData.createdAt} price={travelPostData.price} rate={travelPostData.rate} createdDate={travelPostData.createdAt} blogContents={travelPostData.blogContents} keywords={travelPostData.keywords} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={travelPostData.likeCounts} initialIsLiked={travelPostData.isUserLiked} pl={0} postId={travelPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText isCommentAllowed={travelPostData.isCommentAllowed} commentsCounts={travelPostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={travelPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1 }}>
          <UpdatePostButton postId={travelPostData.postId} />
          <RemovePostButton postId={travelPostData.postId} />
      </Box>

      { travelPostData.location ? <EmbeddedMap mapUrl={travelPostData.location} /> : <></> }

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
        {
          travelPostData.isCommentAllowed ? 
          <PostCommentBox postId={postId} />
          :
          <Box />
        }
      </Box>
    </Box>
  );
};

export default OwnTravelPostDetailedPage;
