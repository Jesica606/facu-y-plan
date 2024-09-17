import { Box } from "@mui/material";
import Image from "next/image";

type FuenteImagen = {
  fuente: string;
  descripcion: string;
};

const ImagenComplementaria = (props: FuenteImagen) => {
  return (
    <Box
      height={"148px"}
      position={"relative"}
      flexBasis={"33%"}
      flexGrow={999}
    >
      <Image
        src={props.fuente}
        alt={props.descripcion}
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default ImagenComplementaria;
