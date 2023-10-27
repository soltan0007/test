import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import "../App.css";

const ApiItem = ({ item }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.thumbnail.alt_text}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ApiItem;
