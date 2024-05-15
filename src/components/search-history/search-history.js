import React, { useContext } from "react"
import { AppContext } from "../../contexts/app-context"
import iconSearchLight from "@assets/images/icons/icon-search-black.svg"
import iconSearchDark from "@assets/images/icons/icon-search-gray.svg"
import iconDeleteLight from "@assets/images/icons/icon-delete.svg"
import iconDeleteDark from "@assets/images/icons/icon-delete-gray.svg"
import "./search-history.scss"

const SearchHistory = ({ research }) => {
  const appContext = useContext(AppContext)

  const deleteSearchHistory = (index) => {
    appContext.setSearchHistory(appContext.searchHistory.filter((s, i) => (i != index)))
  }

  return (
    <div className="search-history">
      {appContext.searchHistory?.length > 0 &&
        <div className="search-history__wrapper">
          <p className="search-history__wrapper__title">Search History</p>
          {appContext.searchHistory.map((item, index) => {
            return (
              <div className="search-history__wrapper__item" key={`search-history__wrapper__item-${index}`}>
                <div className="search-history__wrapper__item__info">
                  <p className="search-history__wrapper__item__info__name">{item.name}</p>
                  <p className="search-history__wrapper__item__info__datetime">{item.dateTime}</p>
                </div>
                <div className="search-history__wrapper__item__group-btn">
                  <div className="search-history__wrapper__item__group-btn__btn" onClick={() => { research(item.keySearch, true) }}>
                    <img src={appContext.theme == "dark" ? iconSearchDark : iconSearchLight} />
                  </div>
                  <div className="search-history__wrapper__item__group-btn__btn" onClick={() => { deleteSearchHistory(index) }}>
                    <img src={appContext.theme == "dark" ? iconDeleteDark : iconDeleteLight} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}
export default SearchHistory
