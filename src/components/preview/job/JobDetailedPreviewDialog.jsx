import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Box, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DetailedPostTitleText from "../../texts/DetailedPostTitleText";
import ContactText from "../../texts/ContactText";
import CreatedAtText from "../../texts/CreatedAtText";
import PreviewScrollableImageGallery from "../PreviewScrollableImageGallery";
import EmbeddedMap from "../../box/post/EmbeddedMap";
import PostKeywordText from "../../texts/PostKeywordText";
import PostProfileBox from "../../box/post/PostProfileBox";
import PostDescriptionText from "../../texts/PostDescriptionText";

const JobDetailedPreviewDialog = ({ open, onClose, subCategory, post, mediaData }) => {
  const userId = localStorage.getItem('userId') || "";

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        미리보기
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box>
            <PreviewScrollableImageGallery imageUrls={mediaData.selectedImages} />

            <Box sx={{ mt: mediaData.selectedImages.length > 0 ? 3 : 0 }}>

                <Box sx={{ pl: 1 }}>
                <DetailedPostTitleText subCategory={subCategory} title={post.title} />

                <PostProfileBox userId={userId} />

                <ContactText contact={post.contact} email={post.email} />

                <Divider sx={{ my: 2.5 }} />

                <PostDescriptionText description={post.description} />

                <CreatedAtText createdAt={post.createdAt} pl={0} />

                {post.selectedKeywords.length > 0 && (
                  <Box>
                    <Divider sx={{ my: 2.5 }} />
                    <PostKeywordText keywords={post.selectedKeywords} />
                  </Box>
                )}
                </Box>
            </Box>

            { post.location ? <EmbeddedMap mapUrl={post.location} /> : <></> }
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailedPreviewDialog;