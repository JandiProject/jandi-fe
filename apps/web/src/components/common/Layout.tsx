import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray[200]};
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: inherit;
  text-decoration: none;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  opacity: ${({ $active }) => ($active ? 1 : 0.8)};

  &:hover {
    opacity: 1;
  }
`;

const Main = styled.main`
  flex: 1;
`;

export function Layout() {
  const location = useLocation();

  return (
    <Container>
      <Nav>
        <NavList>
          <li>
            <NavLink to="/" $active={location.pathname === "/"}>
              나의 정원
            </NavLink>
          </li>
          <li>
            <NavLink to="/widget" $active={location.pathname === "/widget"}>
              위젯
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" $active={location.pathname === "/settings"}>
              설정
            </NavLink>
          </li>
          <li>
            <NavLink to="/account" $active={location.pathname === "/account"}>
              계정관리
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" $active={location.pathname === "/login"}>
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" $active={location.pathname === "/signup"}>
              회원가입
            </NavLink>
          </li>
        </NavList>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
