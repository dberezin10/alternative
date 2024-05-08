import React, { PropsWithChildren } from "react";

import { render } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const renderWithProviders = (ui?: React.ReactElement) => {
  const Wrapper = ({ children }: PropsWithChildren<any>): JSX.Element => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  return {
    ...render(ui ?? <></>, { wrapper: Wrapper }),
    Wrapper,
  };
};
