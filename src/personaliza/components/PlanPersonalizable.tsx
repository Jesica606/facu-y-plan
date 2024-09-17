"use client";
import { ReactNode } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { ModificacionEnPlanDeEstudios } from "../hooks/usePlanPersonalizable";
import { Container, Stack } from "@mui/material";
import { MateriaSeleccionada } from "../hooks/useMateriaSeleccionable";

export type AccionAlCambiarPlanDeEstudios = (
  modificacion: ModificacionEnPlanDeEstudios
) => void;

export type AccionAlIniciarUnCambioEnPlanDeEstudios = (
  seleccion: MateriaSeleccionada
) => void;

export type AccionAlFinalizarUnCambioEnPlanDeEstudios = (
  modificacion: ModificacionEnPlanDeEstudios
) => void;

const PlanPersonalizable = ({
  children,
  alCambiar,
  alIniciarUnCambio,
  alFinalizarUnCambio,
}: {
  children: ReactNode;
  alCambiar: AccionAlCambiarPlanDeEstudios;
  alIniciarUnCambio: AccionAlIniciarUnCambioEnPlanDeEstudios;
  alFinalizarUnCambio: AccionAlFinalizarUnCambioEnPlanDeEstudios;
}) => {
  return (
    <DndContext
      id="plan-personalizable"
      onDragStart={(event) => {
        alIniciarUnCambio({ id: event.active.id.toString() });
      }}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (!over) return;
        if (active.id === over.id) return;
        console.log("active", active);
        console.log("over", over);
        alFinalizarUnCambio({
          idOrignen: active.id.toString(),
          idDestino: over.id.toString(),
        });
      }}
      onDragOver={(event) => {
        const { active, over } = event;
        if (!over) return;
        if (active.id === over.id) return;
        alCambiar({
          idOrignen: active.id.toString(),
          idDestino: over.id.toString(),
        });
      }}
      collisionDetection={closestCorners}
    >
      <Container
        style={{
          minHeight: "inherit",
          paddingBottom: "16px",
          overflowY: "hidden",
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <Stack
          component={"ol"}
          direction="row"
          spacing={"16px"}
          minHeight={"inherit"}
        >
          {children}
        </Stack>
      </Container>
    </DndContext>
  );
};

export default PlanPersonalizable;
