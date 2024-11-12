import { IconButton, Stack } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  }

  return (
    <IconButton onClick={onClick}>
      <ArrowBack />
    </IconButton>
  );
};

export const TopNavbar = () => {
  return (
    <Stack direction={"row"} px={2} py={1} alignItems="center">
      <BackButton />
    </Stack>
  );
};
