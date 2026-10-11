import { Children, createContext } from "react"

const initialState={
    cohortName:"cohort_3",
    theme:"Light",
}
export const AppContext=createContext(initialState);

const Context = ({Children}) => {
  return (
    <>
      <AppContext.Provider  value={{cohortName,theme}}>
        {Children}
      </AppContext.Provider>
    </>
  )
}

export default Context
