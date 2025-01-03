import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { primaryColor } from "../../../constant/Color";
import CreatedAtText from "../../texts/CreatedAtText";
import { addCommentLike, removeCommentLike } from "../../../service/CommentLikeService";

const SingleCommentBox = ({ comment }) => {
  const { username, profilePicture } = comment.summarizedUserDto;
  const { commentId, content, wholeLikedUserLength, isCurrentUserLiked, createdAt } = comment;
  const profilePictureUrl = profilePicture || "";

  const [ wholeLikesCount, setWholeLikesCount ] = useState(wholeLikedUserLength);
  const [ isLiked, setIsLiked ] = useState(isCurrentUserLiked);

  const handleLikeClicked = async () => {
    if (!isLiked) {
      const wholeLikes = await addCommentLike(commentId);
      setWholeLikesCount(wholeLikes);
      setIsLiked(true);
    }
    else {
      const wholeLikes = await removeCommentLike(commentId);
      setWholeLikesCount(wholeLikes);
      setIsLiked(false);
    }
  }

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 2,
        }}
      >
    
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            src={profilePictureUrl}
            alt={username}
            sx={{
              width: 40,
              height: 40,
            }}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "13px", 
                color: "#333",
              }}
            >
              {username}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.4,
                fontSize: "12px", 
              }}
            >
              {content}
            </Typography>

            <CreatedAtText createdAt={createdAt} />
          </Box>
        </Box>
    
        <Box sx={{ justifyItems: "center", gap: 0.5 }}>
          <IconButton
            aria-label="favorite"
            sx={{
              color: isLiked ? "red" : primaryColor,
              padding: "4px"
            }}
            onClick={handleLikeClicked}
          >
            {isLiked ? (
              <FavoriteIcon sx={{ fontSize: "18px" }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: "18px" }} />
            )}
          </IconButton>

          <Typography
            sx={{
              fontSize: "11px",
              color: "#666",
            }}
          >
            {wholeLikesCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleCommentBox;
