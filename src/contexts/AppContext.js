import React, { createContext, useState, useEffect } from "react";

import { withRouter, useHistory } from "react-router-dom";
import Login from "../components/Login";


export const AppContext = createContext();

const initialModal = {
  active: true,
  type: null,
};


function AppProvider({ children }) {
  const [modal, setModal] = useState(initialModal);
  
  const OpenModal = ({ type }) => {
    setModal({
      ...modal,
      type,
      active: true,
    })
  }
  const CloseModal = ({ type }) => {
    setModal(initialModal)
  }

  const props = {
    OpenModal,
    CloseModal,
    modal
  }

  return (
    <AppContext.Provider value={{ ...props }}>
      {children}
    </AppContext.Provider>
  );
}
export default withRouter(AppProvider);
