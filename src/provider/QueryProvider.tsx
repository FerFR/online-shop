import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
    children: React.ReactNode;
}

const QueryProvider = ({ children }: Props) => {
    const client = new QueryClient();

    return (
        <>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </>
    );
};

export default QueryProvider;
