"use client";
import { createContext, useEffect, useState } from "react";

const AppContext: any = createContext(null);

export const AppProvider = ({ children }: any) => {
  const [loading, setLoading]: any = useState(false);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
