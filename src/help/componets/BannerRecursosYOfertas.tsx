import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const BannerRecursosYOfertas = () => {
  return (
    <Box
      style={{
        height: "112px",
        backgroundImage: "url(https://picsum.photos/1200/800)",
        backgroundSize: "cover",
      }}
    >
      <Box
        height={"100%"}
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Container style={{ height: "100%" }}>
          <Stack direction={"row"} alignItems={"center"} height={"100%"}>
            <Typography
              fontSize={{ xs: "40px", md: "48px" }}
              component="h1"
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontWeight: 900,
              }}
            >
              Recursos y Ofertas
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default BannerRecursosYOfertas;
