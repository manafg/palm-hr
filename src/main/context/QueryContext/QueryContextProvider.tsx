import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import {QueryContextProviderProps} from './types'


const queryClient = new QueryClient()


function QueryContextProvider({ children }: QueryContextProviderProps) {
    return  <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>;
}

export default QueryContextProvider;