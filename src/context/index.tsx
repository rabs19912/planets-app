import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "../styled/global";

const MAX_RETRIES_NUMBER = 2;
const RETRY_RESPONSE_STATUSES = [500, 503, 504];

type AppProvidersProps = {
  children: React.ReactNode | JSX.Element;
};

const defaultProps: Partial<AppProvidersProps> = {
  children: null,
};

const handleRetry = (failureCount: number, error: any): boolean => {
  return (
    failureCount < MAX_RETRIES_NUMBER &&
    RETRY_RESPONSE_STATUSES.includes(error?.status)
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: handleRetry,
    },
    mutations: {
      retry: handleRetry,
    },
  },
});

function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      {children}
    </QueryClientProvider>
  );
}

AppProviders.defaultProps = defaultProps;
export default AppProviders;
