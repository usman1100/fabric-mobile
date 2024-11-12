import { Typography } from "@mui/material";
import {
  BottomNav,
  Content,
  BottomNavbar,
  PageContainer,
  TopBar,
  TopNavbar,
} from "../components/shared";

export const DashboardPage = () => {
  return (
    <PageContainer>
      <TopBar>
        <TopNavbar />
      </TopBar>

      <Content p={2}>
        <Typography variant="h3">Dashboard</Typography>
      </Content>

      <BottomNav>
        <BottomNavbar />
      </BottomNav>
    </PageContainer>
  );
};
