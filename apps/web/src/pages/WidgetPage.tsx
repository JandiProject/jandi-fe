import styled from "@emotion/styled";

const Page = styled.div`
  padding: 2rem;
`;

export function WidgetPage() {
  return (
    <Page>
      <h1>위젯</h1>
      <p>블로그에 삽입할 위젯을 관리합니다.</p>
    </Page>
  );
}
