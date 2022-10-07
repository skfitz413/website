import React from 'react'
import { Link } from 'gatsby'

const I18nContext = React.createContext()

export function I18nProvider({ langKey, children }) {
  return <I18nContext.Provider value={langKey}>{children}</I18nContext.Provider>
}

export function useLangKey() {
  return React.useContext(I18nContext)
}

export function I18nLink(props) {
  const langKey = useLangKey()
  if (langKey === 'en') return <Link {...props} />
  return <Link {...props} to={`/${langKey}${props.to}`} />
}

export function toEnglish(location) {
  return location.pathname.replace(/^\/de\//, '/')
}

export function toGerman(location) {
  return `/de${location.pathname}`
}
