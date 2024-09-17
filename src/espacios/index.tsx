//https://mui.com/material-ui/ materiales pantillas etc etc
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Container, Button } from "@mui/material";

import Modal from "@mui/material/Modal";
import VideoEspacios from "./components/VideoEspacios";

const Espacio = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box id="contenedor-supremo" sx={{ marginTop: "30px" }}>
      <Box id="contenedor-general">
        <Box id="layout">
          <Box
            id="paneles-superiores"
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"row"}
          >
            <Container id="elegir-video" sx={{ marginBottom: "20px" }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "#3728b7" }}
                >
                  {" "}
                  Select Video
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={"video-general"}
                  sx={{ color: "#3728b7" }}
                >
                  <MenuItem value="video-general">Video General</MenuItem>
                  <MenuItem value="primer-piso">Primer Piso</MenuItem>
                  <MenuItem value="segundo-piso">Segundo Piso</MenuItem>
                </Select>
              </FormControl>
            </Container>

            <Container id="planos" sx={{ marginBottom: "20px" }}>
              <Button
                onClick={handleOpen}
                variant="outlined"
                size="large"
                fullWidth
                sx={{
                  height: "100%",
                  color: "#3728b7",
                  borderColor: "#3728b7",
                }}
              >
                Ver Plano
              </Button>
              <Modal
                id="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <img src="https://i.pinimg.com/236x/9b/53/c7/9b53c7056b72da324df08aed0d7be51f.jpg" />
                </Box>
              </Modal>
            </Container>
          </Box>

          <VideoEspacios />
        </Box>
      </Box>
    </Box>
  );
};
export default Espacio;
