import NavLogo from "../components/NavLogo";
import Layout from "./components/Layout";
import BarraNavegacion from "./components/BarraNavegacion";

const index = () => {
  return (
    <Layout>
      <NavLogo />
      <BarraNavegacion />
    </Layout>
  );
};
export default index;
