import React, { createContext, useReducer } from 'react'

export const AppContext = createContext({
    initialSubstances: [],
    filteredSubstances: []
});

const reducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {  
        case 'SAVE_INITIAL_SUBSTANCES':
            return {
                initialSubstances: payload,
                filteredSubstances: payload
            }
        case 'FILTER_SUBSTANCES': 
            const matching = state.initialSubstances.filter(item => item.name.toLowerCase().includes(payload.toLowerCase()));
            return {
                ...state,
                filteredSubstances: matching
            }
        case 'RESET_FILTERS':
            return {
                ...state,
                filteredSubstances: state.initialSubstances
            }
        default:
            return state;
    }
}


function AppContextProvider({children}) {

  const [ state, dispatch ] = useReducer(reducer, {
      initialSubstances: [],
      filteredSubstances: []
  });

  return (
    <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider