import { Box, Container, Stack } from "@mui/material";
import { ReactNode } from "react";

const FondoConImagen = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      style={{
        backgroundImage:
          "url('https://www.ffyb.uba.ar/wp-content/uploads/2023/05/66-aniversario-ffyb-alumnos-990x500.jpg')",
        backgroundSize: "cover",
        height: "100%",

        minHeight: "inherit",
      }}
    >
      <Box
        minHeight={"inherit"}
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Container maxWidth={"xs"} style={{ minHeight: "inherit" }}>
          <Stack justifyContent={"center"} style={{ minHeight: "inherit" }}>
            {children}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
export default FondoConImagen;
