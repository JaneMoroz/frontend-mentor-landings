import React from "react";

// Store
import Store from "../store/store";

// Interface
import IFormInfo from "../interfaces/IFormInfo";

type ContextType = {
  formInfo: IFormInfo;
  addPersonalInfo: (info: {
    name: string;
    email: string;
    phone: string;
  }) => void;
  addPlan: (plan: { name: string; price: number; duration: string }) => void;
  addAddOns: (addOns: { name: string; title: string; price: number }[]) => void;
};

const Context = React.createContext({} as ContextType);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Context.Provider value={Store}>{children}</Context.Provider>;
};

export const useStore = () => React.useContext(Context);
