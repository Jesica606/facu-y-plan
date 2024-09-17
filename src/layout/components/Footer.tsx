import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const informacion = [
  "Facultad de farmacia y bioquimica - UBA",
  "Junin 954 Ciudad Autonoma de Buenos Aires, Argentina",
  "TE:52875000",
];

const Footer = () => {
  return (
    <>
      <Box
        component={"footer"}
        py={"32px"}
        style={{ backgroundColor: "#011344", color: "white" }}
      >
        <Stack direction={"column"} textAlign={"center"} spacing={"12px"}>
          {informacion.map((info) => (
            <Typography
              key={info}
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "800",
              }}
            >
              {info}
            </Typography>
          ))}
          <Typography
            style={{
              color: "#FF8700",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "800",
            }}
          >
            Hecho con 💕 por ETEC-UBA
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
