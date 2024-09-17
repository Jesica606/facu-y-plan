"use client";
import { useState } from "react";
import { Cuatrimestre, Materia, materiaPorId, planDeEstudios } from "../fake";

export type MateriaSeleccionada = {
  id: string;
};

export const useMateriaSeleccionable = () => {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState<{
    id: string;
    seleccionada: boolean;
  }>({
    id: "",
    seleccionada: false,
  });

  const seleccionarMateria = ({ id }: MateriaSeleccionada): void => {
    setMateriaSeleccionada({ id, seleccionada: true });
  };

  const brindarMateriaSeleccionada = (): Materia => {
    return materiaPorId.get(materiaSeleccionada.id)!;
  };

  const deseleccionarMateria = (): void => {
    setMateriaSeleccionada({ id: "", seleccionada: false });
  };

  const hayUnaMateriaSeleccionada = (): boolean =>
    materiaSeleccionada.seleccionada;

  return {
    seleccionar: seleccionarMateria,
    eleccion: brindarMateriaSeleccionada,
    deseleccionar: deseleccionarMateria,
    seleccionada: hayUnaMateriaSeleccionada,
  } as const;
};
