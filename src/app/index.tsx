import { Fragment } from "react";
import Layout from "@/src/layout";
import Theme from "@/src/theme";
import Metadata from "./components/Metadata";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Metadata />
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Fragment>
  );
};

export default App;
