import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarBrandLink,
  NavbarSecondary,
  NavbarLink,
} from '../components/Navbar'
import { useLangKey, I18nLink } from '../components/I18nContext'

const locales = {
  en: {
    blog: 'Blog',
    talks: 'Talks',
    projects: 'Projects',
  },
  de: {
    blog: 'Blog',
    talks: 'Vorträge',
    projects: 'Projekte',
  },
}

export function AppNavbar() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <Navbar>
      <NavbarBrandLink as={I18nLink} to="/">
        <NavbarBrand>Matthias Koch</NavbarBrand>
      </NavbarBrandLink>
      <NavbarSecondary>
        <NavbarLink as={I18nLink} to="/blog">
          {t.blog}
        </NavbarLink>
        <NavbarLink as={I18nLink} to="/talks">
          {t.talks}
        </NavbarLink>
        <NavbarLink as={I18nLink} to="/projects">
          {t.projects}
        </NavbarLink>
      </NavbarSecondary>
    </Navbar>
  )
}
