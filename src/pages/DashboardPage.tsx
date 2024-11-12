import { Typography } from "@mui/material";
import {
  BottomNav,
  Content,
  NavigationBar,
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
        <NavigationBar />
      </BottomNav>
    </PageContainer>
  );
};
