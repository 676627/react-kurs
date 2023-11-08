import React from "react";
import { Card, CardMedia } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "/bogd.jpg";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Card sx={{ my: 4 }}>
      <CardMedia component="img" image={imageUrl} />
    </Card>
  );
};

export default ImageComponent;
