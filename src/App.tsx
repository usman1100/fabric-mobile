import { Typography } from "@mui/material";
import {
  BottomNav,
  Content,
  NavigationBar,
  PageContainer,
  TopBar,
  TopNavbar
} from "./components/shared";

export default function App() {
  return (
    <PageContainer>
      <TopBar>
        <TopNavbar />
      </TopBar>

      <Content p={2}>
        <Typography variant="h3">Welcome</Typography>
      </Content>

      <BottomNav>
        <NavigationBar />
      </BottomNav>
    </PageContainer>
  );
}
