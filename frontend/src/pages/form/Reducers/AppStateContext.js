// AppStateContext.js
import React, { createContext, useState, useContext } from 'react';

const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {

  const [dropdowns, setDropdowns] = useState({
    dropdown1: null, // Default option for dropdown1
  });

  const [checkboxStates, setCheckboxStates] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: true,
    // Add more checkboxes as needed
  });

  const setDropdownOption = (dropdownName, option) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdownName]: option,
    }));
  };

  const toggleCheckbox = (checkboxName) => {
    setCheckboxStates((prevCheckboxStates) => ({
      ...prevCheckboxStates,
      [checkboxName]: !prevCheckboxStates[checkboxName],
    }));
  };

  return (
    <AppStateContext.Provider
      value={{
        dropdowns,
        setDropdownOption,
        checkboxStates,
        toggleCheckbox,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

const useAppStateContext = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppStateContext must be used within an AppStateProvider');
  }
  return context;
};

export { AppStateProvider, useAppStateContext };
