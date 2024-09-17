"use client";
import { useState } from "react";
import {
  Cuatrimestre,
  planDeEstudios,
  materiasPorCuatri,
  Materia,
} from "../fake";
import { arrayMove } from "@dnd-kit/sortable";

export type ModificacionEnPlanDeEstudios = {
  idOrignen: string;
  idDestino: string;
};

export const usePlanPersonalizable = () => {
  const [cuatrimestres, setCuatrimestres] =
    useState<Map<string, Materia[]>>(materiasPorCuatri);

  const cuatriPorMateria = new Map<string, string>();
  cuatrimestres.forEach((materias, cuatri) => {
    materias.forEach((materia) => {
      cuatriPorMateria.set(materia.id, cuatri);
    });
  });

  const brindarPlanActual = () => {
    const planActual: Cuatrimestre[] = [];
    cuatrimestres.forEach((materias, cuatri) => {
      planActual.push({ cuatrimestre: Number(cuatri), materias });
    });
    planActual.sort((a, b) => a.cuatrimestre - b.cuatrimestre);
    return planActual;
  };

  const noForzarCambio = ({
    cuatri,
    origen,
    destino,
  }: {
    cuatri: string;
    origen: string;
    destino: string;
  }) => {
    const materias = cuatrimestres.get(cuatri);

    if (!materias) return;

    const indexOrigen = materias.findIndex((materia) => materia.id === origen);
    const indexDestino = cuatrimestres.has(destino)
      ? materias.length + 1
      : materias.findIndex((materias) => materias.id === destino);

    setCuatrimestres((cuatrimestres) => {
      const planOrdenado = new Map(cuatrimestres);
      planOrdenado.set(cuatri, arrayMove(materias, indexOrigen, indexDestino));
      return planOrdenado;
    });
  };

  const forzarCambio = ({
    origen,
    destino,
  }: {
    origen: { materia: string; cuatri: string };
    destino: { materia: string; cuatri: string };
  }) => {
    const materiasOrigen = cuatrimestres.get(origen.cuatri);
    const materiasDestino = cuatrimestres.get(destino.cuatri);

    if (!materiasOrigen || !materiasDestino) return;

    const indexOrigen = materiasOrigen.findIndex(
      (materia) => materia.id === origen.materia
    );
    const indexDestino = cuatrimestres.has(destino.materia)
      ? materiasDestino.length + 1
      : materiasDestino.findIndex(
          (materias) => materias.id === destino.materia
        );

    setCuatrimestres((cuatrimestres) => {
      const [materia] = materiasOrigen.splice(indexOrigen, 1);
      materiasDestino.splice(indexDestino, 0, materia);

      const planActualizado = new Map(cuatrimestres);
      planActualizado.set(origen.cuatri, [...materiasOrigen]);
      planActualizado.set(destino.cuatri, [...materiasDestino]);
      return planActualizado;
    });
  };

  const actualizarPlanDeEstudios = (
    modificacion: ModificacionEnPlanDeEstudios
  ) => {
    const { idOrignen, idDestino } = modificacion;
    const cuatriOrigen = cuatriPorMateria.get(idOrignen);
    const cuatriDestino = cuatrimestres.has(idDestino)
      ? idDestino
      : cuatriPorMateria.get(idDestino);

    if (!cuatriOrigen || !cuatriDestino) return;
    if (cuatriOrigen === cuatriDestino) {
      noForzarCambio({
        cuatri: cuatriOrigen,
        origen: idOrignen,
        destino: idDestino,
      });
      return;
    }
    forzarCambio({
      origen: { materia: idOrignen, cuatri: cuatriOrigen },
      destino: { materia: idDestino, cuatri: cuatriDestino },
    });
  };

  const ordenarPlanDeEstudios = (
    modificacion: ModificacionEnPlanDeEstudios
  ) => {
    const { idOrignen, idDestino } = modificacion;
    const cuatriOrigen = cuatriPorMateria.get(idOrignen);
    const cuatriDestino = cuatrimestres.has(idDestino)
      ? idDestino
      : cuatriPorMateria.get(idDestino);

    if (!cuatriOrigen || !cuatriDestino) return;
    noForzarCambio({
      cuatri: cuatriOrigen,
      origen: idOrignen,
      destino: idDestino,
    });
  };

  return {
    actual: brindarPlanActual,
    actualizar: actualizarPlanDeEstudios,
    ordenar: ordenarPlanDeEstudios,
  } as const;
};
