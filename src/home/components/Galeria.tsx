import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

const Galeria = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Box my="32px">
        <Typography
          variant="h1"
          fontSize={{ md: "44px", xs: "36px" }}
          style={{
            marginBottom: "16px",
            fontFamily: "Montserrat",
            color: "#2D1D54",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          sobre las tutorías
        </Typography>
        <Box
          display={"grid"}
          gridTemplateColumns={
            "repeat(auto-fit, minmax(min(100%, 390px), 1fr))"
          }
          gap={"32px"}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default Galeria;
