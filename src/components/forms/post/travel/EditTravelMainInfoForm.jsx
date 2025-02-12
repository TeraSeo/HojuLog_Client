import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import CountrySelectField from "../../../textfields/CountrySelectField";
import LocationField from "../../../textfields/LocationField";
import LocationDialog from "../../../dialog/LocationDialog";
import {
  countryRequiredError,
  keywordOverError,
  locationFormatError,
  locationRequiredError,
  titleRequiredError,
} from "../../../../constant/ErrorMsg";
import PostVisibleField from "../../../textfields/PostVisibleField";
import TravelKeyWordField from "../../../textfields/TravelKeyWordField";
import CommentAvailabilityField from "../../../textfields/CommentAvailabilityField";
import ContentBlockManagerWithInitialValue from "../ContentBlockManagerWithInitialValue";

const EditTravelMainInfoForm = ({ onDataChange, setIsFormValid, mainInfoData }) => {
  const [formValues, setFormValues] = useState({
    postId: mainInfoData.postId,
    title: mainInfoData.title,
    country: mainInfoData.country,
    location: mainInfoData.location,
    blogContents: mainInfoData.blogContents,
    selectedKeywords: mainInfoData.selectedKeywords,
    isPublic: mainInfoData.isPublic,
    isCommentAllowed: mainInfoData.isCommentAllowed
  });

  const [errors, setErrors] = useState({});
  const [mapOpen, setMapOpen] = useState(false);

  const locationPattern = /^https:\/\/(www\.)?google\.[a-z]+\/maps(\?.*|\/.*)?$/;

  const validateLocation = (value) => {
    if (!locationPattern.test(value)) {
      setErrors((prev) => ({
        ...prev,
        location: locationFormatError,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        location: "",
      }));
    }
  };

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, country, location, selectedKeywords } = formValues;

    if (!title?.trim()) newErrors.title = titleRequiredError;

    if (!country) newErrors.country = countryRequiredError;

    if (!location.trim()) {
      newErrors.location = locationRequiredError;
    } else if (!locationPattern.test(location)) {
      newErrors.location = locationFormatError;
    }

    if (selectedKeywords.length > 12) {
      newErrors.keyword = keywordOverError;
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    checkFormValidity();
    onDataChange(formValues);
  }, [formValues]);

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        주요 정보 입력
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        제목, 나라 등 정보를 입력하세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField
          value={formValues.title}
          error={errors.title}
          onChange={(value) => handleInputChange("title", value)}
        />
        <CountrySelectField
          value={formValues.country}
          error={errors.country}
          onChange={(value) => handleInputChange("country", value)}
        />
        <LocationField
          location={formValues.location}
          error={errors.location}
          onLocationChange={(value) => {
            handleInputChange("location", value);
            validateLocation(value);
          }}
          onMapOpen={() => setMapOpen(true)}
        />

        <PostVisibleField
            value={formValues.isPublic} 
            onChange={(value) => handleInputChange("isPublic", value)} 
          />

        <CommentAvailabilityField
          value={formValues.isCommentAllowed} 
          onChange={(value) => handleInputChange("isCommentAllowed", value)} 
        />

        <TravelKeyWordField
            selectedKeywords={formValues.selectedKeywords} 
            error={errors.keyword}
            onChange={(value) => handleInputChange("selectedKeywords", value)} 
        />

        <Grid item xs={12}>
          <ContentBlockManagerWithInitialValue
            onChange={(blocks) => handleInputChange("blogContents", blocks)}
            blogContents={mainInfoData.blogContents}
          />
        </Grid>
      </Grid>

      <LocationDialog
        open={mapOpen}
        onClose={() => setMapOpen(false)}
        onConfirm={() => setMapOpen(false)}
        onLocationSelected={(url) => handleInputChange("location", url)}
        googleMapsApiKey="AIzaSyAbpOOHTMEZeY_WNnQjuROdIUCAPpwM45Q"
      />
    </Paper>
  );
};

export default EditTravelMainInfoForm;