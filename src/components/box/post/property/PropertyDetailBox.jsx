import React from 'react';
import { Box, Divider } from '@mui/material';
import ScrollableImageGallery from '../ScrollableImageGallery';
import ContactText from '../../../texts/ContactText';
import RoomCountsText from '../../../texts/RoomCountsText';
import BathRoomTypeText from '../../../texts/BathRoomTypeText';
import ParkAvailabilityText from '../../../texts/ParkAvailabilityText';
import PriceCard from '../../../texts/PriceCard';
import PropertyDetailText from '../../../texts/PropertyDetailText';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import CreatedAtText from '../../../texts/CreatedAtText';
import PostDescriptionText from '../../../texts/PostDescriptionText';
import PostProfileBox from '../PostProfileBox';
import PostKeywordText from '../../../texts/PostKeywordText';

const PropertyDetailBox = ({ userId, imageUrls, description, price, period, roomCount, bathroomType, isParkable, title, subCategory, contact, email, isBillIncluded, availableTime, createdAt, keywords=[] }) => {
  return (
    <Box>
      <ScrollableImageGallery imageUrls={imageUrls} />

      <Box sx={{ mt: imageUrls.length > 0 ? 3 : 0 }}>

        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <PostProfileBox userId={userId} />
            
            <ContactText contact={contact} email={email} />

            <Divider sx={{ my: 2.5 }} />

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <PriceCard price={price} period={period} isBillIncluded={isBillIncluded} />
                  <RoomCountsText roomCount={roomCount} width={25} height={25} fontSize={11} />
                  <BathRoomTypeText bathroomType={bathroomType} width={25} height={25} fontSize={11} />
                  <ParkAvailabilityText isParkable={isParkable} width={25} height={25} fontSize={11} />
                </Box>

            </Box>

            <Divider sx={{ my: 2.5 }} />
            
            <PostDescriptionText description={description} />

            <CreatedAtText createdAt={createdAt} pl={0} />

            <Divider sx={{ my: 2.5 }} />

            <PropertyDetailText price={price} period={period} isBillIncluded={isBillIncluded} availableTime={availableTime} bathroomType={bathroomType} isParkable={isParkable} roomCount={roomCount} />

            {keywords.length > 0 && (
              <Box>
                <Divider sx={{ my: 2.5 }} />
                <PostKeywordText keywords={keywords} />
              </Box>
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetailBox;