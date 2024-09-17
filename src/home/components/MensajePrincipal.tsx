import { Box, Typography } from "@mui/material";

const MensajePrincipal = () => {
  const promo = `Bienvenidos al Sistema<br/>de Tutorías<br/>de Farmacia y bioquímica.`;
  return (
    <Box
      height={"448px"}
      style={{
        backgroundImage: "url(https://picsum.photos/1200/800)",
        backgroundSize: "cover",
      }}
    >
      <Box
        height={"100%"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Typography
          variant={"h1"}
          fontSize={{ md: "48px", xs: "40px" }}
          textAlign={"center"}
          padding={"10px"}
          color={"white"}
          fontWeight={"900"}
          fontFamily={"Montserrat"}
          dangerouslySetInnerHTML={{ __html: promo }}
        />
      </Box>
    </Box>
  );
};

export default MensajePrincipal;
