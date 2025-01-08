import { Box, Grid, TextField, Button, Typography, Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../components/bar/CategorySidebar";
import { useNavigate, useParams } from "react-router-dom";
import { getSpecificOwnUser, updateUserInfo } from "../../service/UserService";

const UpdateProfilePage = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [profilePictureUrl, setProfilePictureUrl] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        if (userId === localStorage.getItem('userId')) {
            getSpecificOwnUser()
                .then((data) => {
                    setUsername(data.username);
                    setDescription(data.description);
                    setProfilePictureUrl(data.profilePicture);
                })
                .catch((error) => console.error("Error fetching posts:", error));
        }
        else {
            navigate("/home")
        }
    }, [])

    const handleProfilePictureChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePicture(e.target.files[0]);
            setProfilePictureUrl(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleEditButtonClick = () => {
        document.getElementById('profile-picture-upload').click();
    };

    const handleSave = () => {
        const userFormData = new FormData();
        userFormData.append("userId", userId);
        userFormData.append("username", username);
        userFormData.append("description", description);
        if (profilePicture) {
            userFormData.append("profilePicture", profilePicture);
        }
        else {
            userFormData.append("profilePicture", null);
        }

        updateUserInfo(userFormData).then((isUpdated) => {
            if (isUpdated) {
                navigate("/mypage");
            }
        });
    };

    return (
        <Box sx={{ py: "10px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        내 정보 수정
                    </Typography>
                    <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 3 }}>
                                <label htmlFor="profile-picture-upload">
                                    <input
                                        accept="image/*"
                                        id="profile-picture-upload"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={handleProfilePictureChange}
                                    />
                                    <Avatar
                                        src={profilePictureUrl}
                                        alt="Profile Picture"
                                        sx={{ width: 80, height: 80 }}
                                    />
                                </label>
                                <Button
                                    variant="outlined"
                                    onClick={handleEditButtonClick}
                                    sx={{ textTransform: 'none', height: "30px" }}
                                >
                                    수정
                                </Button>
                            </Box>

                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <Button variant="contained" color="primary" onClick={handleSave}>
                                    변경
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UpdateProfilePage;