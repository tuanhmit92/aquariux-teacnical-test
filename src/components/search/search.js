import React, { useEffect, useState } from "react"
import Input from "../elements/input/input"
import iconSearch from "@assets/images/icons/icon-search-white.svg"
import iconClear from "@assets/images/icons/icon-clear.png"
import "./search.scss"

const Search = ({ keySearch, setKeySearch, callbackKeySearch, callback, clear }) => {

  const [debouncedKeySearch, setDebouncedKeySearch] = useState("")

  const onChange = (e) => {
    setKeySearch(e.target.value)
  }

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedKeySearch(keySearch)
    }, 300)
    return () => clearTimeout(delayInputTimeoutId)
  }, [keySearch, 300])

  useEffect(() => {
    callbackKeySearch(debouncedKeySearch)
  }, [debouncedKeySearch])

  return (
    <div className="search">
      <Input customClass="search__input" label="City / Country" type="text" value={keySearch} onChange={onChange} callback={callback} />
      <div className="search__icon-search" onClick={callback}>
        <img src={iconSearch} />
      </div>
      <div className="search__icon-search" onClick={clear}>
        <img src={iconClear} />
      </div>
    </div>
  )
}
export default Search
