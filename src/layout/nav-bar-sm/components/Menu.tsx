import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { MouseEvent } from "react";
import links from "@/src/layout/links";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon fontSize={"large"} sx={{ color: "black" }} />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {links.map((link, index) => (
          <MenuItem key={index}>
            <Link
              fontSize={"12px"}
              fontFamily={"Montserrat"}
              href={link.url}
              color={"#8b8b8b"}
              underline="none"
              fontWeight={"light"}
              textTransform={"uppercase"}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavMenu;
