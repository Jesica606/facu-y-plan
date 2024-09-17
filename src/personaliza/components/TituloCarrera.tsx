import { Container, Typography } from "@mui/material";

const TituloCarrera = ({ carrera }: { carrera: string }) => {
  return (
    <Container>
      <Typography
        fontSize={{ xs: "40px", md: "48px" }}
        fontFamily={"Roboto"}
        color={"white"}
        fontWeight="bold"
      >
        {carrera}
      </Typography>
    </Container>
  );
};

export default TituloCarrera;
