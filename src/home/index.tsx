import MensajePrincipal from "./components/MensajePrincipal";
import Galeria from "./components/Galeria";
import Tarjeta from "./tarjeta";
import { articulos } from "./fake";

const index = () => {
  return (
    <>
      <MensajePrincipal />
      <Galeria>
        {articulos.map((articulo) => (
          <Tarjeta
            key={articulo.titulo}
            titulo={articulo.titulo}
            resumen={articulo.descripcion}
            enlace={articulo.enlace}
            imagen={{
              fuente: articulo.imagen.fuente,
              descripcion: articulo.imagen.descripcion,
            }}
          />
        ))}
      </Galeria>
    </>
  );
};

export default index;
