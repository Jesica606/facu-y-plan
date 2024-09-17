"use client";
import { Box, Typography } from "@mui/material";
import { DragOverlay } from "@dnd-kit/core";
import React, { useEffect, useState } from "react";
import { Materia } from "../fake";
import { ChipEstadoCursada } from "./ChipEstadoCursada";
import { createPortal } from "react-dom";

const MateriaDragOverlay = ({
  materia,
  seleccionada,
}: {
  materia: Materia;
  seleccionada: boolean;
}) => {
  const [inClient, setInClient] = useState(false);
  useEffect(() => {
    setInClient(true);
  }, []);

  if (!inClient) return null;

  return createPortal(
    <DragOverlay>
      {seleccionada ? (
        <Box
          style={{
            borderRadius: "4px",
            backgroundColor: "#fff6",
          }}
        >
          <ChipEstadoCursada cursada={materia.estado} />
          <Box style={{ padding: "4px 8px" }}>
            <Typography
              fontFamily="Montserrat"
              color={"#818a91"}
              fontWeight="bold"
              fontSize="14px"
              style={{ userSelect: "none" }}
            >
              {materia.nombre}
            </Typography>
          </Box>
        </Box>
      ) : null}
    </DragOverlay>,
    document.body
  );
};

export default MateriaDragOverlay;
