"use client";
import { Box, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { Materia } from "../fake";
import { ChipEstadoCursada } from "./ChipEstadoCursada";

const MateriaDraggable = ({
  nombre,
  estado,
}: {
  nombre: string;
  estado: Parameters<typeof ChipEstadoCursada>[0]["cursada"];
}) => {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: nombre,
    });

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      component={"li"}
      style={{
        borderRadius: "4px",
        backgroundColor: "white",
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <ChipEstadoCursada cursada={estado} />
      <Box style={{ padding: "4px 8px" }}>
        <Typography
          fontFamily="Montserrat"
          color={"#818a91"}
          fontWeight="bold"
          fontSize="14px"
          style={{ userSelect: "none" }}
        >
          {nombre}
        </Typography>
      </Box>
    </Box>
  );
};

export default MateriaDraggable;
