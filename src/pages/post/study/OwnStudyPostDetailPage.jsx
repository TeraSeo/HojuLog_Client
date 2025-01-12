import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificStudyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import StudyDetailBox from '../../../components/box/post/study/StudyDetailBox';
import UpdatePostButton from '../../../components/buttons/UpdatePostButton';
import RemovePostButton from '../../../components/buttons/RemovePostButton';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';

const OwnStudyPostDetailPage = () => {
  const { postId } = useParams();
  const [studyPostData, setStudyPostData] = useState();
  const commentBoxRef = useRef(null);

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificStudyPost(postId)
      .then((data) => {
        setStudyPostData(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!studyPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: { md: "120px", sm: "40px", xs: "0px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <StudyDetailBox description={studyPostData.description} title={studyPostData.title} subCategory={studyPostData.subCategory} postId={studyPostData.postId} school={studyPostData.school} major={studyPostData.major} rate={studyPostData.rate} createdAt={studyPostData.createdAt} blogContents={studyPostData.blogContents} />
        </Grid>
      </Grid> 

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={studyPostData.likeCounts} initialIsLiked={studyPostData.isUserLiked} pl={0} postId={studyPostData.postId} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText commentsCounts={studyPostData.commentCounts} />
          </Box>
          <ViewCountsText viewCounts={studyPostData.viewCounts} />
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1 }}>
        <UpdatePostButton postId={studyPostData.postId} />
        <RemovePostButton postId={studyPostData.postId} />
      </Box>

      { studyPostData.location ? <EmbeddedMap mapUrl={studyPostData.location} /> : <></> }

      <Box sx={{ mt: 8, mb: 15 }} ref={commentBoxRef}>
          <PostCommentBox postId={postId} />
      </Box>
    </Box>
  );
};

export default OwnStudyPostDetailPage;