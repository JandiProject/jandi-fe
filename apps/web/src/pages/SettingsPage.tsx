import styled from "@emotion/styled";

const Page = styled.div`
  padding: 2rem;
`;

export function SettingsPage() {
  return (
    <Page>
      <h1>설정</h1>
      <p>서비스 설정을 변경합니다.</p>
    </Page>
  );
}
