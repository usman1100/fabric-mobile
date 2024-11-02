import { IconButton, Stack } from "@mui/material";
import Home from "@mui/icons-material/Home";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const NAV_ITEMS = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Camera",
    icon: CameraAltIcon,
  },
];

export const NavigationBar = () => {
  return (
    <Stack direction={"row"}>
      {NAV_ITEMS.map((item) => (
        <IconButton sx={{ mx: "auto" }} key={item.label}>
          <item.icon />
        </IconButton>
      ))}
    </Stack>
  );
};
