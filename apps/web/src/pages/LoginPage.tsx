import styled from "@emotion/styled";

const Page = styled.div`
  padding: 2rem;
`;

export function LoginPage() {
  return (
    <Page>
      <h1>로그인</h1>
      <p>계정에 로그인합니다.</p>
    </Page>
  );
}
