import { Box, CardMedia, Stack, Typography } from "@mui/material";

type Recurso = {
  titulo: string;
  imagen: string;
  descripcion: string;
  contacto: string[];
};

const TarjetaRecurso = ({ recurso }: { recurso: Recurso }) => {
  const { titulo, descripcion, contacto } = recurso;
  return (
    <Stack spacing={"8px"}>
      <CardMedia
        component="img"
        sx={{
          height: 140,
          width: "100%",
          objectFit: "cover",
        }}
        image={"https://via.placeholder.com/150"}
        alt="Descripción de la imagen"
      />
      <Typography
        style={{
          color: "#011344",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        {titulo}
      </Typography>
      <Typography
        style={{
          color: "#7C7C7C",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "400",
        }}
      >
        {descripcion}
      </Typography>
      <Box>
        {contacto.map((dato) => (
          <Typography
            key={dato}
            style={{
              color: "#5DAFD6",
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            {dato}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};

export default TarjetaRecurso;
