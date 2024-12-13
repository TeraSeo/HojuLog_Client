import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import DescriptionField from "../../../textfields/DescriptionField";
import ContactField from "../../../textfields/ContactField";
import EmailField from "../../../textfields/EmailField";
import SchoolField from "../../../textfields/SchoolField";
import MajorField from "../../../textfields/MajorField";
import { isValidPhoneNumber } from "libphonenumber-js";

const MajorReviewMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    contact: "",
    email: "",
    school: "",
    major: "",
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, description, contact, email, school, major } = formValues;

    if (!title?.trim()) newErrors.title = "제목은 필수 입력 항목입니다.";
    if (!description?.trim()) newErrors.description = "설명은 필수 입력 항목입니다.";

    if (contact?.trim() && !isValidPhoneNumber(contact)) {
      newErrors.contact = "유효하지 않은 휴대폰 번호입니다.";
    }

    if (email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "유효하지 않은 이메일 주소입니다.";
    }

    if (!school?.trim()) newErrors.school = "학교 이름은 필수 입력 항목입니다.";
    if (!major?.trim()) newErrors.major = "전공은 필수 입력 항목입니다.";

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
        제목, 설명, 학교 이름, 전공, 연락처, 이메일 등 정보를 입력하세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField
          value={formValues.title}
          error={errors.title}
          onChange={(value) => handleInputChange("title", value)}
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
        <MajorField
          value={formValues.major}
          error={errors.major}
          onChange={(value) => handleInputChange("major", value)}
        />
      </Grid>
    </Paper>
  );
};

export default MajorReviewMainInfoForm;