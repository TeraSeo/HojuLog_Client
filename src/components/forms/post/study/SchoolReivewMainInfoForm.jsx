import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import DescriptionField from "../../../textfields/DescriptionField";
import ContactField from "../../../textfields/ContactField";
import EmailField from "../../../textfields/EmailField";
import SchoolField from "../../../textfields/SchoolField";
import { isValidPhoneNumber } from "libphonenumber-js";
import SuburbField from "../../../textfields/SuburbField";
import { contactRequiredError, descriptionRequiredError, emailRequiredError, schoolRequiredError, suburbRequiredError, titleRequiredError } from "../../../../constant/ErrorMsg";
import RatingField from "../../../textfields/RatingField";

const SchoolReivewMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    contact: "",
    email: "",
    school: "",
    suburb: "",
    rate: 0.0
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, description, contact, email, school, suburb, rate } = formValues;

    if (!title?.trim()) newErrors.title = titleRequiredError;
    if (!description?.trim()) newErrors.description = descriptionRequiredError;

    if (contact?.trim() && !isValidPhoneNumber(contact)) {
      newErrors.contact = contactRequiredError;
    }

    if (email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = emailRequiredError;
    }

    if (!school?.trim()) newErrors.school = schoolRequiredError;

    if (!suburb?.trim()) {
      newErrors.suburb = suburbRequiredError;
    }

    if (rate < 0.0 || rate > 5.0) {
      newErrors.rate = "평점은 0.0에서 5.0 사이여야 합니다.";
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
        제목, 설명, 학교 이름, 연락처, 이메일, 지역 등 정보를 입력하세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField
          value={formValues.title}
          error={errors.title}
          onChange={(value) => handleInputChange("title", value)}
        />
        <RatingField
          value={formValues.rate}
          error={errors.rate}
          onChange={(value) => handleInputChange("rate", value)}
        />
        <DescriptionField
          value={formValues.description}
          error={errors.description}
          onChange={(value) => handleInputChange("description", value)}
        />
        <ContactField
          value={formValues.contact}
          error={errors.contact}
          onChange={(value) => handleInputChange("contact", value)}
        />
        <EmailField
          value={formValues.email}
          error={errors.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <SchoolField
          value={formValues.school}
          error={errors.school}
          onChange={(value) => handleInputChange("school", value)}
        />
        <SuburbField
          value={formValues.suburb}
          error={errors.suburb}
          onChange={(value) => handleInputChange("suburb", value)}
        />
      </Grid>
    </Paper>
  );
};

export default SchoolReivewMainInfoForm;