import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray[200]};
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  color: inherit;
  text-decoration: none;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  opacity: ${({ $active }) => ($active ? 1 : 0.8)};

  &:hover {
    opacity: 1;
  }
`;

export const Main = styled.main`
  flex: 1;
`;
