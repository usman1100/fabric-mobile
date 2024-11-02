import { Typography } from "@mui/material";
import {
  BottomNav,
  Content,
  NavigationBar,
  PageContainer,
  TopBar,
} from "./components/shared";
import { TopNavbar } from "./components/shared/TopNavbar";

export default function App() {
  return (
    <PageContainer>
      <TopBar>
        <TopNavbar />
      </TopBar>

      <Content>
        {new Array(1200).fill(0).map((_, index) => (
          <Typography key={index}>{index}</Typography>
        ))}
      </Content>

      <BottomNav>
        <NavigationBar />
      </BottomNav>
    </PageContainer>
  );
}
