import { Box, AppBar, Toolbar } from "@mui/material";
import { ReactNode } from "react";

const NavBarContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display={{
        xs: "block",
        sm: "block",
        md: "block",
        lg: "none",
        xl: "none",
      }}
    >
      <Box
        height={{
          xs: "56px",
        }}
      />
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarContainer;
