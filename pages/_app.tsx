import "../styles/globals.css";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import "@fontsource/roboto-condensed/300.css";
import "@fontsource/roboto-condensed/400.css";
import "@fontsource/roboto-condensed/500.css";
import "@fontsource/roboto-condensed/700.css";

import { AppProps } from "next/app";
import App from "@/src/app";

export default function MyApp(props: AppProps) {
  return <App {...props} />;
}
