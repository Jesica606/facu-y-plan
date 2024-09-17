import NavLogo from "../components/NavLogo";
import Layout from "./components/Layout";
import Menu from "./components/Menu";

const index = () => {
  return (
    <>
      <Layout>
        <NavLogo />
        <Menu />
      </Layout>
    </>
  );
};

export default index;
