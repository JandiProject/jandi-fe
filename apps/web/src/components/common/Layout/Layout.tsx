import { Outlet, useLocation } from "react-router-dom";
import * as S from "./Layout.styled";

export function Layout() {
  const location = useLocation();

  return (
    <S.Container>
      <S.Nav>
        <S.NavList>
          <li>
            <S.NavLink to="/" $active={location.pathname === "/"}>
              나의 정원
            </S.NavLink>
          </li>
          <li>
            <S.NavLink to="/widget" $active={location.pathname === "/widget"}>
              위젯
            </S.NavLink>
          </li>
          <li>
            <S.NavLink
              to="/settings"
              $active={location.pathname === "/settings"}
            >
              설정
            </S.NavLink>
          </li>
          <li>
            <S.NavLink to="/account" $active={location.pathname === "/account"}>
              계정관리
            </S.NavLink>
          </li>
          <li>
            <S.NavLink to="/login" $active={location.pathname === "/login"}>
              로그인
            </S.NavLink>
          </li>
          <li>
            <S.NavLink to="/signup" $active={location.pathname === "/signup"}>
              회원가입
            </S.NavLink>
          </li>
          <li>
            <S.NavLink
              to="/platform/add"
              $active={location.pathname === "/platform/add"}
            >
              플랫폼 등록
            </S.NavLink>
          </li>
        </S.NavList>
      </S.Nav>
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Container>
  );
}
