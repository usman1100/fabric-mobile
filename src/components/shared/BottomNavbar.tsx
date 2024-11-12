import { IconButton, Stack } from "@mui/material";
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const NAV_ITEMS = [
  {
    label: "Download",
    icon: GetAppOutlinedIcon,
  },
  {
    label: "Camera",
    icon: CameraAltOutlinedIcon,
  },
];

export const BottomNavbar = () => {
  return (
    <Stack direction={"row"}>
      {NAV_ITEMS.map((item) => (
        <IconButton sx={{ mx: "auto" }} key={item.label}>
          <item.icon fontSize="large" />
        </IconButton>
      ))}
    </Stack>
  );
};
