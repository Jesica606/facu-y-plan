import DistribucionRecursos from "./DistribucionRecursos";
import { recursos } from "../fake";
import TarjetaRecurso from "./TarjetaRecurso";

const GaleriaRecursos = () => {
  return (
    <DistribucionRecursos>
      {recursos.map((recurso) => {
        return <TarjetaRecurso key={recurso.titulo} recurso={recurso} />;
      })}
    </DistribucionRecursos>
  );
};

export default GaleriaRecursos;
