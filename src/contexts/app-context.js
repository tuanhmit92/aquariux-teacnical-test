import React, { useEffect, useState } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light") // light, dark
  const [searchHistory, setSearchHistory] = useState([])

  // Use localStorage to save search history instead API
  useEffect(() => {
    const history = localStorage.getItem("searchHistory")
    if (history) {
      setSearchHistory(JSON.parse(history))
    }
  }, [])

  useEffect(() => {
    if (searchHistory.length > 0) {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
    }
  }, [searchHistory])

  return (
    <AppContext.Provider value={{ theme, setTheme, searchHistory, setSearchHistory }}>{children}</AppContext.Provider>
  )
}
export default AppProvider
export { AppContext }