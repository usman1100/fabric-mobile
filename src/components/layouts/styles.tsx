import { BottomNavigation, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BOTTOM_NAV_HEIGHT = 6;
const TOP_NAV_HEIGHT = 5;

const SCREEN_HEIGHT_UNIT = "vh";

export const PageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: `100${SCREEN_HEIGHT_UNIT}`,
  height: `100${SCREEN_HEIGHT_UNIT}`,
  overflow: "hidden",
}));

export const TopBar = styled(Box)(() => ({
  height: `${TOP_NAV_HEIGHT}${SCREEN_HEIGHT_UNIT}`,
  position: "fixed",
  justifyContent: "center",
  top: 0,
  left: 0,
  right: 0,
}));

export const Content = styled(Box)(() => ({
  flexGrow: 1,
  overflowY: "auto",
  marginTop: `${TOP_NAV_HEIGHT}${SCREEN_HEIGHT_UNIT}`,
  marginBottom: `${BOTTOM_NAV_HEIGHT}${SCREEN_HEIGHT_UNIT}`,
  height: "auto",
}));

export const BottomNav = styled(BottomNavigation)(({ theme }) => ({
  height: `${BOTTOM_NAV_HEIGHT}${SCREEN_HEIGHT_UNIT}`,
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
}));
