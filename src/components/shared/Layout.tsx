import { AppBar, BottomNavigation, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BOTTOM_NAV_HEIGHT = 5;
const TOP_NAV_HEIGHT = 5;

export const PageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "100vh",
  overflow: "hidden",
}));

export const TopBar = styled(AppBar)(() => ({
  height: `${TOP_NAV_HEIGHT}vh`,
  position: "fixed",
  justifyContent: "center",
  top: 0,
  left: 0,
  right: 0,
}));

export const Content = styled(Box)(() => ({
  flexGrow: 1,
  overflowY: "auto",
  marginTop: `${TOP_NAV_HEIGHT}vh`, // Same as TopBar height
  marginBottom: `${BOTTOM_NAV_HEIGHT}vh`, // Same as BottomNav height
  height: `${TOP_NAV_HEIGHT + BOTTOM_NAV_HEIGHT}vh`,
  padding: '2%'
}));

export const BottomNav = styled(BottomNavigation)(({ theme }) => ({
  height: `${BOTTOM_NAV_HEIGHT}vh`,
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
}));
