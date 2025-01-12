import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificTransactionPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import TransactionDetailBox from '../../../components/box/post/transaction/TransactionDetailBox';
import UpdatePostButton from '../../../components/buttons/UpdatePostButton';
import RemovePostButton from '../../../components/buttons/RemovePostButton';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';

const OwnTransactionPostDetailPage = () => {
  const { postId } = useParams();
  const [transactionPostData, setTransactionPostData] = useState();
  const commentBoxRef = useRef(null);

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificTransactionPost(postId)
      .then((data) => {
        setTransactionPostData(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!transactionPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: { md: "120px", sm: "40px", xs: "0px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <TransactionDetailBox imageUrls={transactionPostData.imageUrls} description={transactionPostData.description} title={transactionPostData.title} subCategory={transactionPostData.subCategory} postId={transactionPostData.postId} contact={transactionPostData.contact} email={transactionPostData.email} createdAt={transactionPostData.createdAt} price={transactionPostData.price} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={transactionPostData.likeCounts} initialIsLiked={transactionPostData.isUserLiked} pl={0} postId={transactionPostData.postId} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText commentsCounts={transactionPostData.commentCounts} />
          </Box>
          <ViewCountsText viewCounts={transactionPostData.viewCounts} />
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1}}>
          <UpdatePostButton postId={transactionPostData.postId} />
          <RemovePostButton postId={transactionPostData.postId} />
      </Box>

      <Box sx={{ mt: 8, mb: 15 }} ref={commentBoxRef}>
          <PostCommentBox postId={postId} />
      </Box>
    </Box>
  );
};

export default OwnTransactionPostDetailPage;