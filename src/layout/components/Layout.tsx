import { Stack } from "@mui/material";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Stack minHeight={"100vh"}>{children}</Stack>;
};

export default Layout;
