import { Container, Stack, Box } from "@mui/material";
import { ReactNode } from "react";

const NavBarContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display={{
        xs: "none",
        sm: "none",
        md: "none",
        lg: "block",
        xl: "block",
      }}
      minHeight={{
        xs: "0",
        sm: "0",
        md: "0",
        lg: "80px",
        xl: "80px",
      }}
      borderBottom={"8px solid #011344"}
    >
      <Container style={{ paddingBottom: "16px", paddingTop: "16px" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          {children}
        </Stack>
      </Container>
    </Box>
  );
};
export default NavBarContainer;
