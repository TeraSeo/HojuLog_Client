import React, { useState, useEffect } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import webIcon from "../../assets/images/web.png";
import { primaryColor } from "../../constant/Color";
import LocationButton from "./LocationButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VisitWebsiteButton from "./VisitWebsiteButton";

const RestaurantPostLinksButton = ({ postData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleVisitClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (url) => {
    window.open(url, "_blank");
    setAnchorEl(null);
  };

  const hasLinks = postData.webUrl || postData.location;

  if (!hasLinks) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
      {isWideScreen ? (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <VisitWebsiteButton webUrl={postData.webUrl} />
          <LocationButton location={postData.location} />
        </Box>
      ) : (
        <> 
          <Button
            variant="contained"
            color="secondary"
            onClick={handleVisitClick}
            sx={{ textTransform: 'none', fontWeight: 'bold', backgroundColor: primaryColor }}
          >
            Visit
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ '& .MuiPaper-root': { borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } }}
          >
            {postData.webUrl && (
                <MenuItem onClick={() => handleMenuItemClick(postData.webUrl)}>
                <img src={webIcon} alt="Website" style={{ width: 24, height: 24, marginRight: 8 }} />
                Visit Website
                </MenuItem>
                )
            }

            {postData.location && (
              <MenuItem onClick={() => handleMenuItemClick(postData.location)}>
                <LocationOnIcon sx={{ marginRight: 1, color: primaryColor }} />
                Location
              </MenuItem>
            )}
          </Menu>
        </>
      )}
    </Box>
  );
};

export default RestaurantPostLinksButton;
