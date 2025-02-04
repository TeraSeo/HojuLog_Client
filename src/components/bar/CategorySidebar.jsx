import React, { useState } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { categories } from "../../constant/Categories";
import { useNavigate } from "react-router-dom";

const CategorySidebar = () => {
    const navigate = useNavigate();

    const [expandedCategories, setExpandedCategories] = useState(() => {
        const initialExpandedState = {};
        Object.keys(categories).forEach((category) => {
            initialExpandedState[category] = false;
        });
        return initialExpandedState;
    });

    const toggleCategory = (category) => {
        setExpandedCategories((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };

    const handleSubCategoryClick = (subCategory) => {
        if (subCategory === "레스토랑(카페,펍)") {
            navigate("/레스토랑");
        }
        else {
            navigate(`/${subCategory}`);
        }
    };

    return (
        <Box
            sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
                카테고리
            </Typography>
            <List>
                {Object.keys(categories).map((category) => (
                    <Box key={category} sx={{ marginBottom: 2 }}>
                        <ListItem
                            button
                            disableGutters
                            onClick={() => toggleCategory(category)}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "8px 8px",
                                borderRadius: "4px",
                                "&:hover": { backgroundColor: "#f5f5f5" },
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "bold", flexGrow: 1 }}
                            >
                                {category}
                            </Typography>
                            <IconButton size="small">
                                {expandedCategories[category] ? (
                                    <ExpandLessIcon />
                                ) : (
                                    <ExpandMoreIcon />
                                )}
                            </IconButton>
                        </ListItem>
                        <Collapse in={expandedCategories[category]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {categories[category].map((subCategory, index) => (
                                    <ListItem
                                        key={index}
                                        button
                                        onClick={() => handleSubCategoryClick(subCategory)}
                                        sx={{
                                            padding: "8px 8px",
                                            "&:hover": { backgroundColor: "#f9f9f9" },
                                        }}
                                    >
                                        <ListItemText
                                            primary={subCategory}
                                            primaryTypographyProps={{
                                                variant: "body2",
                                                color: "textSecondary",
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </Box>
                ))}
            </List>
        </Box>
    );
};

export default CategorySidebar;
