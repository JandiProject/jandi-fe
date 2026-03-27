import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray[200]};
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: inherit;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;

export const LogoIcon = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gray[400]};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
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
  font-weight: ${({ theme, $active }) =>
    $active ? theme.fonts.weight.semibold : theme.fonts.weight.normal};
  opacity: ${({ $active }) => ($active ? 1 : 0.8)};
  font-size: ${({ theme }) => theme.fonts.size.sm};

  &:hover {
    opacity: 1;
  }
`;

export const AuthButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.gray[300]};
  border-radius: 9999px;
  background: transparent;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  cursor: pointer;
  color: inherit;

  &:hover {
    background: ${({ theme }) => theme.gray[100]};
  }
`;

export const LoginLink = styled(Link)`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.gray[300]};
  border-radius: 9999px;
  background: transparent;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.gray[100]};
  }
`;
