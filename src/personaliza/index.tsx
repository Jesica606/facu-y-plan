"use client";

import { createPortal } from "react-dom";
import CuatrimestreDroppable from "./components/CuatrimestreDroppable";
import ImagenDeFondo from "./components/ImagenDeFondo";
import MateriaDraggable from "./components/MateriaDraggable";
import MateriaDragOverlay from "./components/MateriaDragOverlay";
import PlanPersonalizable from "./components/PlanPersonalizable";
import TituloCarrera from "./components/TituloCarrera";
import { useMateriaSeleccionable } from "./hooks/useMateriaSeleccionable";
import { usePlanPersonalizable } from "./hooks/usePlanPersonalizable";

const Personaliza = () => {
  const plan = usePlanPersonalizable();
  const materia = useMateriaSeleccionable();

  return (
    <ImagenDeFondo>
      <TituloCarrera carrera={"Farmacia"} />
      <PlanPersonalizable
        alIniciarUnCambio={materia.seleccionar}
        alCambiar={plan.actualizar}
        alFinalizarUnCambio={(modificacion) => {
          materia.deseleccionar();
          plan.ordenar(modificacion);
        }}
      >
        {plan.actual().map(({ cuatrimestre, materias }) => (
          <CuatrimestreDroppable
            index={cuatrimestre}
            key={cuatrimestre}
            items={materias}
          >
            {materias.map(({ nombre, estado }) => (
              <MateriaDraggable nombre={nombre} estado={estado} key={nombre} />
            ))}
          </CuatrimestreDroppable>
        ))}
        <MateriaDragOverlay
          materia={materia.eleccion()}
          seleccionada={materia.seleccionada()}
        />
      </PlanPersonalizable>
    </ImagenDeFondo>
  );
};

export default Personaliza;
