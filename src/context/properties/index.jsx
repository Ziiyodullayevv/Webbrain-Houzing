import { Children, createContext, useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContext = createContext();

const PropertiesProvider = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <PropertiesProvider.Provider value={[state, dispatch]}>
      {Children}
    </PropertiesProvider.Provider>
  );
};

export default PropertiesProvider;
