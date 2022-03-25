import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

export const actionTypes = {
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_ITEM:
      const stateAfterAdd = [payload, ...state];
      addToLocalStorage(stateAfterAdd);
      return stateAfterAdd;

    case actionTypes.DELETE_ITEM:
      const stateAfterDelete = state.filter((item) => item.id !== payload);
      addToLocalStorage(stateAfterDelete);
      return stateAfterDelete;

    default:
      return state;
  }
};

function addToLocalStorage(value) {
  if (typeof window !== "undefined") {
    localStorage.setItem("fem-url-shorter", JSON.stringify(value));
  }
}

const getInitialValue = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("fem-url-shorter")
      ? JSON.parse(localStorage.getItem("fem-url-shorter"))
      : [];
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialValue());
  const [copyState, setCopyState] = useState({ active: false });

  const values = {
    state,
    dispatch,
    copyState,
    setCopyState,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
