import { Component, type ReactNode } from "react";
import { ClientError, NetworkError, ServerError } from "@jandi-fe/api";
import * as S from "./ErrorBoundary.styled";

type ErrorVariant = "ClientError" | "ServerError" | "NetworkError" | "Error";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ERROR_ICONS: Record<ErrorVariant, string> = {
  ClientError: "📄",
  ServerError: "⚠️",
  NetworkError: "📡",
  Error: "❌",
};

function getErrorVariant(error: Error): ErrorVariant {
  if (error instanceof ClientError) return "ClientError";
  if (error instanceof ServerError) return "ServerError";
  if (error instanceof NetworkError) return "NetworkError";
  return "Error";
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  renderFallback() {
    const { error } = this.state;
    if (!error) return null;

    const variant = getErrorVariant(error);
    const isDev = import.meta.env.DEV;

    return (
      <S.Container>
        <S.Card>
          <S.IconWrapper $variant={variant}>
            {ERROR_ICONS[variant]}
          </S.IconWrapper>
          <S.Message>{error.message}</S.Message>
          <S.ButtonGroup>
            <S.PrimaryButton type="button" onClick={this.handleReset}>
              다시 시도
            </S.PrimaryButton>
            <S.SecondaryButton type="button" onClick={this.handleGoHome}>
              홈으로
            </S.SecondaryButton>
          </S.ButtonGroup>
          {(isDev || error.stack) && (
            <S.DebugSection open={isDev}>
              <summary>상세 정보</summary>
              <pre>{error.stack ?? error.message}</pre>
            </S.DebugSection>
          )}
        </S.Card>
      </S.Container>
    );
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return this.renderFallback();
    }
    return this.props.children;
  }
}
