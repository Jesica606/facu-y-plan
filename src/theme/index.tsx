import {
  createTheme,
  outlinedInputClasses,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { ReactNode } from "react";
const options: ThemeOptions = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#E0E3E7",
          "--TextField-brandBorderHoverColor": "#B2BAC2",
          "--TextField-brandBorderFocusedColor": "#6F7E8C",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "var(--TextField-brandBorderColor)",
        },
        // root: {
        //   [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        //     borderColor: "var(--TextField-brandBorderHoverColor)",
        //   },
        //   [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        //     borderColor: "var(--TextField-brandBorderFocusedColor)",
        //   },
        // },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&::before, &::after": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
  },
};

const theme = createTheme(options);
const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
