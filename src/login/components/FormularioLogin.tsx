import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Stack,
} from "@mui/material";

const FormularioLogin = () => {
  return (
    <Box
      sx={{
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#fff7",
      }}
    >
      <Stack spacing={"32px"}>
        <Typography
          component={"h6"}
          color={"white"}
          fontWeight={"medium"}
          fontSize={"20px"}
          fontFamily={"Roboto"}
          textTransform={"uppercase"}
        >
          iniciar sesión
        </Typography>
        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Usuario"
            id="usuario"
            required
            type={"text"}
            variant="filled"
          />
        </Box>

        <Box style={{ backgroundColor: "#ededed", borderRadius: "4px" }}>
          <TextField
            fullWidth
            label="Contraseña"
            id="contraseña"
            required
            type={"password"}
            variant="filled"
          />
        </Box>
        <Button
          variant="contained"
          size="medium"
          sx={{
            color: "white",
            backgroundColor: "#3498DB",
          }}
        >
          Continuar
        </Button>
      </Stack>
    </Box>
  );
};
export default FormularioLogin;
