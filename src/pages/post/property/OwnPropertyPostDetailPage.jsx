import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificPropertyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import PropertyDetailBox from '../../../components/box/post/property/PropertyDetailBox';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import UpdatePostButton from '../../../components/buttons/UpdatePostButton';
import RemovePostButton from '../../../components/buttons/RemovePostButton';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';

const OwnPropertyPostDetailPage = () => {
  const { postId } = useParams();
  const [propertyPostData, setPropertyPostData] = useState();
  const commentBoxRef = useRef(null);

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificPropertyPost(postId)
      .then((data) => {
        setPropertyPostData(data);
        alert(propertyPostData.isUserLiked);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!propertyPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: { md: "120px", sm: "40px", xs: "0px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <PropertyDetailBox imageUrls={propertyPostData.imageUrls} description={propertyPostData.description} price={propertyPostData.price} period={propertyPostData.period} roomCount={propertyPostData.roomCount} bathroomType={propertyPostData.bathroomType} isParkable={propertyPostData.isParkable} title={propertyPostData.title} subCategory={propertyPostData.subCategory} postId={propertyPostData.postId} contact={propertyPostData.contact} email={propertyPostData.email} isBillIncluded={propertyPostData.isBillIncluded} availableTime={propertyPostData.availableTime} createdAt={propertyPostData.createdAt} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={propertyPostData.likeCounts} initialIsLiked={propertyPostData.isUserLiked} pl={0} postId={propertyPostData.postId} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText commentsCounts={propertyPostData.commentCounts} />
          </Box>
          <ViewCountsText viewCounts={propertyPostData.viewCounts} />
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1 }}>
        <UpdatePostButton postId={propertyPostData.postId} />
        <RemovePostButton postId={propertyPostData.postId} />
      </Box>

      { propertyPostData.location ? <EmbeddedMap mapUrl={propertyPostData.location} /> : <></> }

      <Box sx={{ mt: 8, mb: 15 }} ref={commentBoxRef}>
          <PostCommentBox postId={postId} />
      </Box>
    </Box>
  );
};

export default OwnPropertyPostDetailPage;