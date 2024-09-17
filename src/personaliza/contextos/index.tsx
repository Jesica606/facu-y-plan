"use client";

import { Box, Modal, Typography } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

type InfoMateria = {
  nombre: string;
  descripcion: string;
};

type AccionesContextoInfoMateria = {
  mostrarInfo: (info: InfoMateria) => void;
  ocultarInfo: () => void;
};

const ContextoInfoMateria = createContext<AccionesContextoInfoMateria>({
  mostrarInfo: (_: InfoMateria) => {},
  ocultarInfo: () => {},
});

export const useInfoMateria = () => {
  const { mostrarInfo, ocultarInfo } = useContext(ContextoInfoMateria);
  return { mostrarInfo, ocultarInfo } as const;
};

export const ProveedorModalMateria = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [info, setInfo] = useState<InfoMateria>({
    nombre: "",
    descripcion: "",
  });

  const [open, setOpen] = useState<boolean>(false);

  const mostrarInfo = (info: InfoMateria) => {
    setInfo(info);
    setOpen(true);
  };

  const ocultarInfo = () => {
    setOpen(false);
  };

  return (
    <ContextoInfoMateria.Provider value={{ mostrarInfo, ocultarInfo }}>
      {children}
      <Modal open={open} onClose={ocultarInfo}>
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {info.nombre}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {info.descripcion}
          </Typography>
        </Box>
      </Modal>
    </ContextoInfoMateria.Provider>
  );
};

export default ProveedorModalMateria;
