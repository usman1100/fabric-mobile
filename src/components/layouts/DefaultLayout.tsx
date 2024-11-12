import { BottomNavbar, TopNavbar } from "../shared";
import { BottomNav, Content, PageContainer, TopBar } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  return (
    <PageContainer>
      <TopBar>
        <TopNavbar />
      </TopBar>

      <Content p={2}>{children}</Content>

      <BottomNav>
        <BottomNavbar />
      </BottomNav>
    </PageContainer>
  );
};
