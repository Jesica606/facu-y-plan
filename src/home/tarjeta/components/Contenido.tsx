import { Typography, Link, Stack } from "@mui/material";

type Componentes = {
  titulo: string;
  resumen: string;
  enlace: string;
};

const Contenido = (props: Componentes) => {
  return (
    <Stack
      spacing={"20px"}
      flexBasis={"390px"}
      flexGrow={1}
      marginBottom={"20px"}
      marginRight={"16px"}
    >
      <Stack spacing={"16px"}>
        <Typography
          component={"h6"}
          style={{
            color: "#011344",
            fontWeight: "800",
            fontFamily: "Montserrat",
          }}
        >
          {props.titulo}
        </Typography>
        <Typography
          style={{
            color: "#7C7C7C",
            fontWeight: "400",
            fontFamily: "Montserrat",
          }}
        >
          {props.resumen}
        </Typography>
      </Stack>
      <Link
        href={props.enlace}
        style={{
          color: "#5DAFD6",
          textDecoration: "none",
          fontFamily: "Montserrat",
        }}
      >
        Ver más
      </Link>
    </Stack>
  );
};

export default Contenido;
