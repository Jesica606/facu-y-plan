import { Box, Container } from "@mui/material";
import React, { ReactNode } from "react";

const ImagenDeFondo = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      style={{
        backgroundImage: 'url("https://picsum.photos/1200/800")',
        backgroundSize: "cover",
        minHeight: "inherit",
      }}
    >
      <Box
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.2)",
          minHeight: "inherit",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ImagenDeFondo;
