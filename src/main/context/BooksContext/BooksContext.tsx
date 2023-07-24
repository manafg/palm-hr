import React, { createContext, useState } from "react";

import {BooksInfoContextProviderProps , BooksInfoContext, BookInfo , BooksInfoState} from "./types";

const BooksInfoStateContext = createContext<BooksInfoContext>([[], () => null]);

function BooksInfoProvider({ children }: BooksInfoContextProviderProps) {
  const [state, setState] = useState<BooksInfoState>([]);

  return (
    <BooksInfoStateContext.Provider value={[state, setState]}>
      {children}
    </BooksInfoStateContext.Provider>
  );
}

export { BooksInfoProvider, BooksInfoStateContext };
