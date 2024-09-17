"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Materia } from "../fake";

const CuatrimestreDroppable = ({
  index,
  items,
  children,
}: {
  index: number;
  items: Materia[];
  children: ReactNode;
}) => {
  const { setNodeRef } = useDroppable({
    id: index,
  });
  return (
    <SortableContext
      id={index.toString()}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <Box
        ref={setNodeRef}
        style={{
          backgroundColor: "#fff4",
          borderRadius: "8px",
          minHeight: "inherit",
        }}
      >
        <Box padding={"8px"}>
          <Typography
            color={"white"}
            fontFamily={"Montserrat"}
            fontWeight={800}
            fontSize={"16px"}
            textTransform={"uppercase"}
            style={{ userSelect: "none" }}
          >{`${index}° cuatrimestre`}</Typography>
        </Box>
        <Stack
          component={"ol"}
          spacing={"8px"}
          style={{
            width: "320px",
            padding: "8px",
            minHeight: "inherit",
          }}
        >
          {children}
        </Stack>
      </Box>
    </SortableContext>
  );
};

export default CuatrimestreDroppable;
