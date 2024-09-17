import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return <Box component={"header"}>{children}</Box>;
};

export default Header;
