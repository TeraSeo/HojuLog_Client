import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PostMedia from "../../components/media/PostMedia";
import PostPreviewActions from "../buttons/PostPreviewActions";
import PostPreviewTab from "../buttons/PostPreviewTab";
import LikeCountButton from "../buttons/LikeCountButton";
import DescriptionText from "../texts/DescriptionText";
import LocationButton from "../buttons/LocationButton";
import EntertainmentDetailedPostDialog from "./EntertainmentDetailedPostDialog";
import PostTitleTextWithTime from "../texts/PostTitleTextWithTime";

const EntertainmentPostPreviewDialog = ({ open, onClose, mainInfoData, mediaData = {} }) => {
  const [detailedDialogOpen, setDetailedDialogOpen] = useState(false);

  const handleViewDetailsClick = () => {
    setDetailedDialogOpen(true);
  };

  const handleDetailedDialogClose = () => {
    setDetailedDialogOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogTitle>
          Preview Your Post
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
            <PostTitleTextWithTime mainInfoData={mainInfoData} mediaData={mediaData} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LikeCountButton count={1223} />
              <LocationButton location={mainInfoData.location} />
            </Box>
          </Box>

          <PostPreviewTab />
          <DescriptionText description={mainInfoData.description} />
          <PostMedia mediaData={mediaData} />
          <PostPreviewActions mainInfoData={mainInfoData} onViewDetailsClick={handleViewDetailsClick} />
        </DialogContent>
      </Dialog>
      <EntertainmentDetailedPostDialog
        open={detailedDialogOpen}
        onClose={handleDetailedDialogClose}
        mainInfoData={mainInfoData}
        mediaData={mediaData}
      />
    </>
  );
};

export default EntertainmentPostPreviewDialog;