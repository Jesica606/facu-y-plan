import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box component={"main"} flexGrow={1} minHeight={"72vh"}>
      {children}
    </Box>
  );
};

export default Main;
