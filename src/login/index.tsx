import { Box, Typography, Button, FormControl, TextField } from "@mui/material";
import FondoConImagen from "./components/FondoConImagen";
import FormularioLogin from "./components/FormularioLogin";

const index = () => {
  return (
    <FondoConImagen>
      <FormularioLogin />
    </FondoConImagen>
  );
};
export default index;
