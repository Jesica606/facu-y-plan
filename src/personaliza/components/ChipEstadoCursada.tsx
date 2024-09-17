"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const colorDeFondoPorCursada = new Map<string, string>();
colorDeFondoPorCursada.set("En curso", "#4fb7ef");
colorDeFondoPorCursada.set("Aprobada", "#1da1f2");
colorDeFondoPorCursada.set("Disponible", "#80ceeb");
colorDeFondoPorCursada.set("No disponible", "#818a91");

export const ChipEstadoCursada = ({
  cursada,
}: {
  cursada: "Aprobada" | "En curso" | "No disponible" | "Disponible";
}) => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: colorDeFondoPorCursada.get(cursada),
        marginBottom: "4px",
        userSelect: "none",
      }}
    >
      <Typography
        padding={"2px 8px"}
        fontSize="12px"
        color="white"
        fontFamily={"Montserrat"}
        fontWeight={"bold"}
      >
        {cursada}
      </Typography>
    </Box>
  );
};
