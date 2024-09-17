import Layout from "./components/Layout";
import Contenido from "./components/Contenido";
import ImagenComplementaria from "./components/ImagenComplementaria";

type ParametrosTarjeta = {
  titulo: string;
  resumen: string;
  enlace: string;
  imagen: {
    fuente: string;
    descripcion: string;
  };
};

const index = (props: ParametrosTarjeta) => {
  return (
    <Layout>
      <Contenido
        titulo={props.titulo}
        resumen={props.resumen}
        enlace={props.enlace}
      />
      <ImagenComplementaria
        fuente={props.imagen.fuente}
        descripcion={props.imagen.descripcion}
      />
    </Layout>
  );
};

export default index;
