import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { primaryColor } from "../../constant/Color";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addPostLike, removePostLike } from "../../service/PostLikeService";
import { useNavigate } from "react-router-dom";

const PostLikeButton = ({ postId, wholeLikesCount, setWholeLikesCount, isLiked, setIsLiked }) => {
    const navigate = useNavigate();

    const handleLikeClicked = async () => {
      if (!isLiked) {
        const wholeLikes = await addPostLike(postId);
        if (wholeLikes === null) {
          navigate("/login");
        }
        else {
          setWholeLikesCount(wholeLikes);
          setIsLiked(true);
        }
      }
      else {
        const wholeLikes = await removePostLike(postId);
        if (wholeLikes === null) {
          navigate("/login");
        }
        else {
          setWholeLikesCount(wholeLikes);
          setIsLiked(false);
        }
      }
    }

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              color: isLiked ? "red" : primaryColor,
              padding: 0,
              fontSize: "24px",
              marginRight: "8px",
            }}
            onClick={handleLikeClicked}
          >
            {isLiked ? (
              <FavoriteIcon fontSize="medium"/> 
            ) : (
              <FavoriteBorderIcon fontSize="medium" />
            )}
          </IconButton>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: primaryColor,
              fontSize: "14px",
            }}
          >
            {wholeLikesCount} likes
          </Typography>
        </Box>
    )
}

export default PostLikeButton;