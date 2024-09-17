import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

const DistribucionRecursos = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={2}
        padding={"32px 0px"}
      >
        {children}
      </Box>
    </Container>
  );
};

export default DistribucionRecursos;
