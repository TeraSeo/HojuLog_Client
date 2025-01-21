import React from 'react';
import { Box, Divider } from '@mui/material';
import ScrollableImageGallery from '../ScrollableImageGallery';
import ContactText from '../../../texts/ContactText';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import CreatedAtText from '../../../texts/CreatedAtText';
import PostDescriptionText from '../../../texts/PostDescriptionText';
import PostProfileBox from '../PostProfileBox';

const SoceityDetailBox = ({ userId, imageUrls, description, title, subCategory, contact, email, createdAt }) => {
  return (
    <Box>
      <ScrollableImageGallery imageUrls={imageUrls} />

      <Box sx={{ mt: imageUrls.length > 0 ? 3 : 0 }}>

        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <PostProfileBox userId={userId} />
            
            <ContactText contact={contact} email={email} />

            <Divider sx={{ my: 2.5 }} />

            <PostDescriptionText description={description} />

            <CreatedAtText createdAt={createdAt} pl={0} />
        </Box>
      </Box>
    </Box>
  );
};

export default SoceityDetailBox;