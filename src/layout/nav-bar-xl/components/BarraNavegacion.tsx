import { Link, Stack, Box } from "@mui/material";
import links from "@/src/layout/links";

const NavBar = () => {
  return (
    <Stack
      height={"100%"}
      alignItems={"center"}
      direction={"row"}
      spacing={"32px"}
    >
      {links.map((link, index) => (
        <Link
          fontSize={"12px"}
          fontFamily={"Montserrat"}
          href={link.url}
          color={"#8b8b8b"}
          underline="none"
          fontWeight={"light"}
          textTransform={"uppercase"}
          dangerouslySetInnerHTML={{ __html: link.label }}
          key={index}
        />
      ))}

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          backgroundColor: "#8b8b8b",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ width: "24px", height: "24px" }}
        >
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
            fill="white"
          />
        </svg>
      </Box>
    </Stack>
  );
};
export default NavBar;
