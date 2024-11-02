import { Stack, Typography } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export const TopNavbar = () => {
  return (
    <Stack direction={"row"}>
      <FlashOnIcon />
      <Typography ml={1}> Fabric Mobile</Typography>
    </Stack>
  );
};
