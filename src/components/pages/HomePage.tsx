import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HomePage = () => {

  return (
    <Box p={3}>
      <Typography variant="h3">Fabric Mobile</Typography>

      <Button variant="outlined">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          Get Started
        </Link>
      </Button>
    </Box>
  );
};
