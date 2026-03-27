import { useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { NAV_ITEMS } from "./Header.constants";
import * as S from "./Header.styled";

export function Header() {
  const location = useLocation();
  const { isLoggedIn, logout } = useAuthStore();

  return (
    <S.Header>
      <S.LogoLink to="/">
        {/* TODO:실제 로고 이미지로 변경 필요 */}
        <S.LogoIcon />
        Jandi
      </S.LogoLink>
      <S.Nav>
        {/* 네비게이션 리스트로 목록 관리*/}
        <S.NavList>
          {NAV_ITEMS.map(({ name, path }) => (
            <li key={path}>
              <S.NavLink to={path} $active={location.pathname === path}>
                {name}
              </S.NavLink>
            </li>
          ))}
        </S.NavList>
        {isLoggedIn ? (
          <S.AuthButton type="button" onClick={logout}>
            로그아웃
          </S.AuthButton>
        ) : (
          <S.LoginLink to="/login">로그인</S.LoginLink>
        )}
      </S.Nav>
    </S.Header>
  );
}
